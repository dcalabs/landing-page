import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.4, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.setAttribute('aria-label', 'Animated 3D blockchain architecture scene');
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(1.8, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x23d3b6,
      metalness: 0.55,
      roughness: 0.22,
      transparent: true,
      opacity: 0.72,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.34 });
    const rings = [2.45, 3.2, 3.95].map((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 12, 180), ringMaterial.clone());
      ring.rotation.x = Math.PI / 2 + index * 0.38;
      ring.rotation.y = index * 0.45;
      group.add(ring);
      return ring;
    });

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0x0f766e,
      emissiveIntensity: 0.4,
      metalness: 0.4,
      roughness: 0.35,
    });
    const nodeGeometry = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const nodes = Array.from({ length: 28 }, (_, index) => {
      const angle = (index / 28) * Math.PI * 2;
      const radius = 2.8 + (index % 5) * 0.28;
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 1.15, Math.sin(angle) * radius);
      node.rotation.set(angle, angle * 0.5, angle * 0.25);
      group.add(node);
      return node;
    });

    const linePositions: number[] = [];
    nodes.forEach((node, index) => {
      const next = nodes[(index + 4) % nodes.length];
      linePositions.push(node.position.x, node.position.y, node.position.z);
      linePositions.push(next.position.x, next.position.y, next.position.z);
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x2dd4bf, transparent: true, opacity: 0.2 }),
    );
    group.add(lines);

    const particlePositions = new Float32Array(420 * 3);
    for (let i = 0; i < particlePositions.length; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 9;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.018, transparent: true, opacity: 0.48 }),
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const mainLight = new THREE.PointLight(0x5eead4, 11, 18);
    mainLight.position.set(-3, 4, 5);
    scene.add(mainLight);
    const sideLight = new THREE.PointLight(0xfacc15, 4, 14);
    sideLight.position.set(4, -3, 4);
    scene.add(sideLight);

    const pointer = new THREE.Vector2(0, 0);
    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    mount.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += (pointer.x * 0.18 - group.rotation.y) * 0.025;
      group.rotation.x += (-pointer.y * 0.12 - group.rotation.x) * 0.025;
      core.rotation.x = elapsed * 0.17;
      core.rotation.z = elapsed * 0.11;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.12 + index * 0.04);
      });
      nodes.forEach((node, index) => {
        node.rotation.x += 0.006 + index * 0.0001;
        node.rotation.y += 0.008;
      });
      particles.rotation.y = elapsed * 0.018;
      particles.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      mount.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      particlesGeometry.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-y-0 right-0 h-full w-full opacity-25 [mask-image:linear-gradient(to_right,transparent,black_28%,black_82%,transparent)] sm:opacity-35 lg:w-[66%] lg:opacity-45"
    />
  );
};

export default HeroScene;
