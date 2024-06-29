"use client";

import { memo, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function Three() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== undefined && containerRef.current !== null) {
      const sizes = {
        width: window.innerWidth,
        height: Math.min(window.innerHeight, 600),
      };

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
      );
      const renderer = new THREE.WebGLRenderer();
      const axesHelper = new THREE.AxesHelper(5);
      const gridHelper = new THREE.GridHelper(20, 30);
      const controls = new OrbitControls(camera, renderer.domElement);

      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: "green" });
      const box = new THREE.Mesh(boxGeometry, material);

      scene.add(axesHelper);
      scene.add(gridHelper);
      scene.add(box);

      camera.position.z = 5;
      camera.position.y = 1;
      controls.update();

      box.position.y = 0.5;

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

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
