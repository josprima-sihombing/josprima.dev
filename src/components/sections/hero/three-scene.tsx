"use client";

import * as THREE from "three";
import { memo, useEffect, useRef } from "react";

import css from "./style.module.scss";

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      const sizes = {
        width: document.body.clientWidth,
        height: window.innerHeight,
      };

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        sizes.width / sizes.height,
      );

      camera.position.set(0, 0, 10);

      /**
       * Sphere
       */
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(2),
        new THREE.MeshBasicMaterial({ color: "yellow" }),
      );

      scene.add(planet);

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
        renderer.render(scene, camera);
      });

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.render(scene, camera);
    }
  }, [canvasRef]);

  return <canvas className={css.canvas} ref={canvasRef}></canvas>;
};

export default memo(ThreeScene);
