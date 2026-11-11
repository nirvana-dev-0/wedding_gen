"use client";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { TemplateId } from "@/lib/data";

type ObjProps = { gold: string; reduced: boolean };

function useDrift(reduced: boolean) {
  return (state: { clock: { elapsedTime: number } }) => (reduced ? 0 : state.clock.elapsedTime);
}

function Klasik({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) { group.current.rotation.y = Math.sin(t * 0.35) * 0.16; group.current.position.y = Math.sin(t * 0.8) * 0.05; }
    if (left.current) left.current.rotation.y = -0.08 - (Math.sin(t * 0.9) * 0.5 + 0.5) * 0.62;
    if (right.current) right.current.rotation.y = 0.08 + (Math.sin(t * 0.9) * 0.5 + 0.5) * 0.62;
  });
  return (
    <group ref={group}>
      <mesh position={[0, 0.9, -0.25]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.55, 0.035, 8, 56, Math.PI]} />
        <meshStandardMaterial color={gold} metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[-1.55, -0.15, -0.2]}><boxGeometry args={[0.08, 2.45, 0.08]} /><meshStandardMaterial color={gold} metalness={0.8} roughness={0.3} /></mesh>
      <mesh position={[1.55, -0.15, -0.2]}><boxGeometry args={[0.08, 2.45, 0.08]} /><meshStandardMaterial color={gold} metalness={0.8} roughness={0.3} /></mesh>
      <group ref={left} position={[-1.5, -0.1, 0]}>
        <mesh position={[0.75, 0, 0]}>
          <boxGeometry args={[1.48, 2.35, 0.14]} />
          <meshStandardMaterial color="#2a1e0f" roughness={0.62} metalness={0.18} />
        </mesh>
        <mesh position={[0.75, 0, 0.09]}><planeGeometry args={[1.25, 2.05]} /><meshBasicMaterial color="#3a2a15" /></mesh>
      </group>
      <group ref={right} position={[1.5, -0.1, 0]}>
        <mesh position={[-0.75, 0, 0]}>
          <boxGeometry args={[1.48, 2.35, 0.14]} />
          <meshStandardMaterial color="#2a1e0f" roughness={0.62} metalness={0.18} />
        </mesh>
        <mesh position={[-0.75, 0, 0.09]}><planeGeometry args={[1.25, 2.05]} /><meshBasicMaterial color="#3a2a15" /></mesh>
      </group>
      <mesh position={[0, -0.1, 0.45]}>
        <circleGeometry args={[0.42, 40]} />
        <meshStandardMaterial color={gold} metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Sunda({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) { group.current.rotation.y = Math.sin(t * 0.32) * 0.3; group.current.rotation.z = Math.sin(t * 0.5) * 0.04; }
  });
  return (
    <group ref={group}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 2.7, 28]} />
        <meshStandardMaterial color="#f4efe6" roughness={0.7} />
      </mesh>
      <mesh position={[-1.38, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.12, 28]} />
        <meshStandardMaterial color={gold} metalness={0.65} roughness={0.35} />
      </mesh>
      <mesh position={[1.38, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.12, 28]} />
        <meshStandardMaterial color={gold} metalness={0.65} roughness={0.35} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.78 - i * 0.3, -0.35 - i * 0.18]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.45 - i * 0.18, 0.028, 8, 48, Math.PI]} />
          <meshStandardMaterial color={i === 1 ? "#7fb3d5" : gold} metalness={0.55} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Floral({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) {
      group.current.rotation.z = t * 0.12;
      group.current.rotation.y = Math.sin(t * 0.4) * 0.22;
      group.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.025);
    }
  });
  return (
    <group ref={group}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.78, Math.sin(angle) * 0.78, 0]} rotation={[0, 0, angle]} scale={[0.62, 0.2, 0.16]}>
            <sphereGeometry args={[1, 18, 12]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#f7d9dc" : "#e8b4b8"} roughness={0.55} />
          </mesh>
        );
      })}
      <mesh>
        <sphereGeometry args={[0.42, 24, 18]} />
        <meshStandardMaterial color={gold} metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0, 0.35]}>
        <sphereGeometry args={[0.2, 20, 16]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Islami({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const lantern = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) { group.current.rotation.y = Math.sin(t * 0.3) * 0.2; group.current.position.y = Math.sin(t * 0.7) * 0.04; }
    if (lantern.current) lantern.current.rotation.z = Math.sin(t * 0.9) * 0.16;
  });
  return (
    <group ref={group}>
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[1.35, 1.45, 0.35, 40]} />
        <meshStandardMaterial color="#0f766e" roughness={0.5} metalness={0.25} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[1.22, 40, 22, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} emissive={gold} emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.52, 0.035, 8, 56, Math.PI]} />
        <meshStandardMaterial color="#f8f5f0" metalness={0.3} roughness={0.4} />
      </mesh>
      <group ref={lantern} position={[-1.5, 0.2, 0.4]}>
        <mesh><boxGeometry args={[0.3, 0.5, 0.3]} /><meshStandardMaterial color={gold} metalness={0.8} roughness={0.25} emissive="#d4af37" emissiveIntensity={0.4} /></mesh>
        <mesh position={[0, 0.36, 0]}><coneGeometry args={[0.22, 0.22, 4]} /><meshStandardMaterial color={gold} metalness={0.8} roughness={0.3} /></mesh>
      </group>
      <mesh position={[1.55, 0.4, 0.3]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[0.3, 0.05, 8, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color={gold} metalness={0.8} roughness={0.25} />
      </mesh>
    </group>
  );
}

function Garden({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) group.current.rotation.y = Math.sin(t * 0.28) * 0.16;
    if (left.current) left.current.rotation.y = -0.06 - (Math.sin(t * 0.8) * 0.5 + 0.5) * 0.58;
    if (right.current) right.current.rotation.y = 0.06 + (Math.sin(t * 0.8) * 0.5 + 0.5) * 0.58;
  });
  const bars = [-0.7, -0.35, 0, 0.35, 0.7];
  return (
    <group ref={group}>
      <mesh position={[0, 1.15, -0.1]}><torusGeometry args={[1.25, 0.045, 8, 40, Math.PI]} /><meshStandardMaterial color={gold} metalness={0.6} roughness={0.35} /></mesh>
      <group ref={left} position={[-1.2, -0.1, 0]}>
        {bars.map((x) => <mesh key={x} position={[x, 0, 0]}><cylinderGeometry args={[0.035, 0.035, 2.1, 8]} /><meshStandardMaterial color="#3d4a35" metalness={0.45} roughness={0.5} /></mesh>)}
        <mesh position={[0, 0.9, 0]}><boxGeometry args={[1.5, 0.07, 0.07]} /><meshStandardMaterial color={gold} metalness={0.6} roughness={0.35} /></mesh>
      </group>
      <group ref={right} position={[1.2, -0.1, 0]}>
        {bars.map((x) => <mesh key={x} position={[-x, 0, 0]}><cylinderGeometry args={[0.035, 0.035, 2.1, 8]} /><meshStandardMaterial color="#3d4a35" metalness={0.45} roughness={0.5} /></mesh>)}
        <mesh position={[0, 0.9, 0]}><boxGeometry args={[1.5, 0.07, 0.07]} /><meshStandardMaterial color={gold} metalness={0.6} roughness={0.35} /></mesh>
      </group>
      {[[-1.7, 0.9], [1.7, 0.8], [-1.4, -1], [1.45, -0.95]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.1]} rotation={[0, 0, i % 2 ? 0.7 : -0.7]} scale={[0.45, 0.16, 0.12]}>
          <sphereGeometry args={[1, 14, 10]} />
          <meshStandardMaterial color={i % 2 ? "#8a9a7b" : "#a8c686"} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Navy({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const seal = useRef<THREE.Mesh>(null);
  const clock = useDrift(reduced);
  const flap = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.2, 0);
    shape.lineTo(0, 0.62);
    shape.lineTo(1.2, 0);
    shape.closePath();
    return shape;
  }, []);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) { group.current.rotation.y = Math.sin(t * 0.3) * 0.24; group.current.position.y = Math.sin(t * 0.7) * 0.05; }
    if (seal.current) seal.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.045);
  });
  return (
    <group ref={group}>
      <mesh><boxGeometry args={[2.45, 1.55, 0.16]} /><meshStandardMaterial color="#f5f0e6" roughness={0.6} metalness={0.05} /></mesh>
      <mesh position={[0, 0.79, 0]} rotation={[0, 0, 0]}>
        <shapeGeometry args={[flap]} />
        <meshStandardMaterial color="#0e1a33" roughness={0.5} metalness={0.15} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.1, 0.09]}><boxGeometry args={[2.2, 0.02, 0.02]} /><meshStandardMaterial color={gold} metalness={0.8} roughness={0.25} /></mesh>
      <mesh ref={seal} position={[0, 0.48, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.09, 32]} />
        <meshStandardMaterial color="#7a1f2b" roughness={0.45} metalness={0.1} />
      </mesh>
    </group>
  );
}

function Kabar({ gold, reduced }: ObjProps) {
  const group = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) { group.current.rotation.y = Math.sin(t * 0.45) * 0.3; group.current.rotation.z = Math.sin(t * 0.38) * 0.04; }
  });
  return (
    <group ref={group}>
      <mesh><boxGeometry args={[1.9, 2.45, 0.05]} /><meshStandardMaterial color="#f4efe4" roughness={0.8} /></mesh>
      <mesh position={[0, 1.08, 0.04]}><boxGeometry args={[1.5, 0.035, 0.01]} /><meshStandardMaterial color="#1c1a16" /></mesh>
      <mesh position={[0, 0.98, 0.04]}><boxGeometry args={[1.5, 0.012, 0.01]} /><meshStandardMaterial color={gold} /></mesh>
      {[0.55, 0.35, 0.15, -0.05, -0.25, -0.45, -0.65].map((y, i) => (
        <mesh key={y} position={[0, y, 0.04]}><boxGeometry args={[i % 3 === 0 ? 1.15 : 1.5, i === 0 ? 0.11 : 0.035, 0.01]} /><meshStandardMaterial color="#3f3a32" /></mesh>
      ))}
      <mesh position={[0, -1.02, 0.04]}><boxGeometry args={[0.9, 0.08, 0.012]} /><meshStandardMaterial color={gold} /></mesh>
    </group>
  );
}

function Chat({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const clock = useDrift(reduced);
  useFrame((state) => {
    const t = clock(state);
    if (group.current) group.current.rotation.y = Math.sin(t * 0.4) * 0.3;
  });
  const bubbles = [
    { y: 0.72, x: -0.3, width: 1.7, color: "#f8f5f0" },
    { y: 0, x: 0.42, width: 1.45, color: "#25d366" },
    { y: -0.72, x: -0.18, width: 1.55, color: "#f8f5f0" },
  ];
  return (
    <group ref={group}>
      {bubbles.map((b, i) => (
        <RoundedBox key={i} args={[b.width, 0.52, 0.16]} radius={0.18} smoothness={4} position={[b.x, b.y, 0]}>
          <meshStandardMaterial color={b.color} roughness={0.65} />
        </RoundedBox>
      ))}
      <mesh position={[0.95, -0.38, 0.1]} rotation={[0, 0, 0.7]} scale={[0.18, 0.18, 0.1]}>
        <coneGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color="#25d366" roughness={0.65} />
      </mesh>
    </group>
  );
}

function PreloaderObject({ id, gold, reduced }: { id: TemplateId; gold: string; reduced: boolean }) {
  switch (id) {
    case "sunda": return <Sunda gold={gold} reduced={reduced} />;
    case "floral": return <Floral gold={gold} reduced={reduced} />;
    case "islami": return <Islami gold={gold} reduced={reduced} />;
    case "garden": return <Garden gold={gold} reduced={reduced} />;
    case "navy": return <Navy gold={gold} reduced={reduced} />;
    case "kabar": return <Kabar gold={gold} reduced={reduced} />;
    case "chat": return <Chat reduced={reduced} />;
    default: return <Klasik gold={gold} reduced={reduced} />;
  }
}

export default function PreloaderScene({ id, gold, reduced }: { id: TemplateId; gold: string; reduced: boolean }) {
  return (
    <div className="h-full w-full" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        fallback={<div className="flex h-full items-center justify-center text-6xl">✦</div>}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 5, 6]} intensity={1.8} color="#fff4d6" />
        <pointLight position={[-4, -2, 3]} intensity={1.4} color={gold} />
        <PreloaderObject id={id} gold={gold} reduced={reduced} />
      </Canvas>
    </div>
  );
}
