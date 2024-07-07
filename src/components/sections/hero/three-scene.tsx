"use client";

import { memo, useEffect, useRef } from "react";
import * as THREE from "three";

import css from "./style.module.scss";

export type ThreeSceneProps = {
  sizes: {
    width: number;
    height: number;
  };
};

const ThreeScene = ({ sizes }: ThreeSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const marsTexture = textureLoader.load("textures/8k_mars.webp");

      marsTexture.colorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const clock = new THREE.Clock();
      const camera = new THREE.PerspectiveCamera(
        50,
        sizes.width / sizes.height,
      );

      camera.position.set(0, 0, 10);

      /**
       * Planet
       */
      const mars = new THREE.Mesh(
        new THREE.SphereGeometry(6, 50, 50),
        new THREE.MeshBasicMaterial({
          map: marsTexture,
        }),
      );

      scene.add(mars);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
      });

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = document.body.clientWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      const tick = () => {
        renderer.render(scene, camera);

        mars.rotation.y = (Math.PI * clock.getElapsedTime()) / 300;
        mars.rotation.x = (Math.PI * clock.getElapsedTime()) / 600;

        window.requestAnimationFrame(tick);
      };

      tick();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  }, [canvasRef, sizes]);

  return <canvas className={css.canvas} ref={canvasRef}></canvas>;
};

export default memo(ThreeScene, (prevProps, nextProps) => {
  return (
    prevProps.sizes.width === nextProps.sizes.width &&
    prevProps.sizes.height === prevProps.sizes.height
  );
});
