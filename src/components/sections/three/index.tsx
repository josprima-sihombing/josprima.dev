"use client";

import gsap from "gsap";
import { memo, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  OrbitControls,
  FontLoader,
  TextGeometry,
} from "three/examples/jsm/Addons.js";

function Three() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== undefined && containerRef.current !== null) {
      const sizes = {
        width: document.body.clientWidth,
        height: Math.min(window.innerHeight, 600),
      };

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
      );
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
      });
      const axesHelper = new THREE.AxesHelper(5);
      const gridHelper = new THREE.GridHelper(20, 30);
      const controls = new OrbitControls(camera, renderer.domElement);

      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: "green" });
      const box = new THREE.Mesh(boxGeometry, material);

      // scene.add(axesHelper);
      // scene.add(gridHelper);
      // scene.add(box);

      camera.position.z = 3;
      camera.position.y = 0.2;
      controls.update();

      controls.enableZoom = false;

      // box.position.y = 0.5;

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      /**
       * Texture
       */
      const textureLoader = new THREE.TextureLoader();
      const matcapTexture = textureLoader.load(
        "/textures/54584E_B1BAC5_818B91_A7ACA3-128px.png",
      );
      matcapTexture.colorSpace = THREE.SRGBColorSpace;

      /**
       * Font
       */
      const fontLoader = new FontLoader();

      fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
        const material = new THREE.MeshMatcapMaterial({
          matcap: matcapTexture,
        });
        const text = "HelloThreeJS";
        const textsMesh: THREE.Mesh[] = [];
        const textGroup = new THREE.Group();

        let max = 0;
        const maxs: number[] = [];
        const mins: number[] = [];

        for (let i = 0; i < text.length; i++) {
          const textGeometry = new TextGeometry(text[i], {
            font: font,
            size: 1,
            depth: 0.2,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 3,
          });

          textGeometry.translate(max, 0, 0);
          textGeometry.computeBoundingBox();
          max = (textGeometry.boundingBox?.max.x || 0) + 0.1;

          maxs.push(max);
          mins.push(textGeometry.boundingBox?.min.x || 0);

          const textMesh = new THREE.Mesh(textGeometry, material);

          textMesh.position.z = 3;

          textsMesh.push(textMesh);
        }

        maxs.forEach((width, index) => {
          if (index === 0) {
            textsMesh[index].position.x = -max / 2;
          } else {
            textsMesh[index].position.x =
              -mins[index] - max / 2 + maxs[index - 1];
          }
        });

        const timeline = gsap.timeline();

        textsMesh.forEach((textMesh) => {
          textGroup.add(textMesh);
          timeline.to(
            textMesh.position,
            {
              z: 0,
              duration: 1,
            },
            "<0.3",
          );
        });

        scene.add(textGroup);
      });

      const animate = () => {
        requestAnimationFrame(animate);

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        renderer.render(scene, camera);
      };

      animate();
    }
  }, [containerRef]);

  return <div ref={containerRef}></div>;
}

const memoizedThree = memo(Three);

export default memoizedThree;
