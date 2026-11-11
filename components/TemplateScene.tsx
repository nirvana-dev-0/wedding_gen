"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { CONTINUE_LABEL, type TemplateDef } from "@/lib/data";

// Partikel Three.js: warna dan jumlah beda per tema. Ini lapisan atmosfer,
// bukan objek utama. Objek utama (gebyok, gerbang, amplop) digerakkan GSAP/CSS 3D.
function Particles({ color, count, speed, reduced }: { color: string; count: number; speed: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);
  useFrame((_, delta) => {
    if (reduced) return;
    if (ref.current) { ref.current.rotation.y += delta * speed; ref.current.rotation.x += delta * speed * 0.3; }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color={color} transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

function Ring({ color, reduced }: { color: string; reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (!reduced && ref.current) ref.current.rotation.z += delta * 0.25; });
  return (
    <mesh ref={ref} position={[0, 1.1, -0.4]} rotation={[Math.PI / 2.6, 0, 0]}>
      <torusGeometry args={[1.2, 0.025, 8, 64]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

const PARTICLE_CONF: Record<string, { color: string; count: number; speed: number }> = {
  klasik: { color: "#d4af37", count: 260, speed: 0.12 },
  sunda: { color: "#7fb3d5", count: 200, speed: 0.2 },
  floral: { color: "#e8b4b8", count: 220, speed: 0.08 },
  islami: { color: "#ffd700", count: 320, speed: 0.05 },
  garden: { color: "#a8c686", count: 240, speed: 0.1 },
  navy: { color: "#d4af37", count: 200, speed: 0.06 },
  kabar: { color: "#9a7b2d", count: 140, speed: 0.15 },
  chat: { color: "#25d366", count: 180, speed: 0.25 },
};

// Scene pembuka per template. GSAP menggerakkan panel objeknya,
// Three.js menggerakkan partikel di belakangnya.
export default function TemplateScene({ tpl, onOpen }: { tpl: TemplateDef; onOpen: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const conf = PARTICLE_CONF[tpl.id] ?? PARTICLE_CONF.klasik;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".scene-object", { opacity: 0, y: 30, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" });
      // Gerakan khas tiap tema
      if (tpl.id === "klasik") gsap.to(".door-left", { rotateY: -72, duration: 1.4, ease: "power2.inOut", delay: 0.2, transformOrigin: "left center" });
      if (tpl.id === "klasik") gsap.to(".door-right", { rotateY: 72, duration: 1.4, ease: "power2.inOut", delay: 0.2, transformOrigin: "right center" });
      if (tpl.id === "sunda") gsap.fromTo(".scroll-roll", { scaleX: 0.1 }, { scaleX: 1, duration: 1.2, ease: "power3.inOut", transformOrigin: "center" });
      if (tpl.id === "floral") gsap.fromTo(".peony", { scale: 0.2, rotate: -40, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1.3, ease: "back.out(1.6)" });
      if (tpl.id === "islami") gsap.fromTo(".dome", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" });
      if (tpl.id === "garden") gsap.to(".gate-left", { rotateY: -65, duration: 1.3, ease: "power2.inOut", delay: 0.2, transformOrigin: "left center" });
      if (tpl.id === "garden") gsap.to(".gate-right", { rotateY: 65, duration: 1.3, ease: "power2.inOut", delay: 0.2, transformOrigin: "right center" });
      if (tpl.id === "navy") gsap.fromTo(".seal", { scale: 1 }, { scale: 0.2, opacity: 0, rotate: 40, duration: 0.9, ease: "power2.in", delay: 0.3 });
      if (tpl.id === "kabar") gsap.fromTo(".paper", { rotateY: -70, rotateX: 12, opacity: 0 }, { rotateY: 0, rotateX: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
      if (tpl.id === "chat") gsap.fromTo(".bubble", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.22, ease: "power2.out" });
    }, root);
    return () => ctx.revert();
  }, [tpl.id]);

  return (
    <div ref={root} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden" style={{ background: tpl.palette.bg, color: tpl.palette.ink }}>
      <div aria-hidden className="absolute inset-0 opacity-90">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
          <Particles color={conf.color} count={conf.count} speed={conf.speed} reduced={reduced} />
          {tpl.id === "klasik" && <Ring color={conf.color} reduced={reduced} />}
        </Canvas>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-16 text-center" style={{ perspective: 900 }}>
        <p className="text-[11px] tracking-[0.3em]" style={{ color: tpl.palette.gold }}>THE WEDDING OF</p>

        <div className="scene-object mt-4 w-full max-w-sm">
          {tpl.id === "klasik" && (
            <div className="flex h-44">
              <div className="door-left flex-1 border-2 rounded-l-lg" style={{ borderColor: tpl.palette.gold, background: "#2a1e0f" }}><p className="pt-16 text-xs tracking-[0.3em]" style={{ color: tpl.palette.gold }}>KAWUNG</p></div>
              <div className="door-right flex-1 border-2 rounded-r-lg" style={{ borderColor: tpl.palette.gold, background: "#2a1e0f" }}><p className="pt-16 text-xs tracking-[0.3em]" style={{ color: tpl.palette.gold }}>JAWA</p></div>
            </div>
          )}
          {tpl.id === "sunda" && (
            <div className="scroll-roll mx-auto h-40 w-full max-w-xs rounded-lg border-2 px-6 py-10" style={{ borderColor: tpl.palette.gold, background: "#f4efe6", color: "#10233a" }}>
              <p className="serif text-2xl">Mega Mendung</p><p className="text-sm mt-2">gulungan terbuka dari tengah</p>
            </div>
          )}
          {tpl.id === "floral" && (
            <div className="peony mx-auto h-40 w-40 rounded-full flex items-center justify-center text-7xl" style={{ background: "radial-gradient(circle, #f7d9dc, #e8b4b8)" }}>❀</div>
          )}
          {tpl.id === "islami" && (
            <div className="dome mx-auto h-40 w-64 border-2 flex items-end justify-center pb-4" style={{ borderColor: tpl.palette.gold, borderRadius: "999px 999px 8px 8px", background: "radial-gradient(circle at 50% 100%, #d4af37 0%, transparent 65%)" }}>
              <span className="text-5xl">☾</span>
            </div>
          )}
          {tpl.id === "garden" && (
            <div className="flex h-40">
              <div className="gate-left flex-1 border-2 rounded-t-full" style={{ borderColor: tpl.palette.gold, background: "#3d4a35" }} />
              <div className="gate-right flex-1 border-2 rounded-t-full" style={{ borderColor: tpl.palette.gold, background: "#3d4a35" }} />
            </div>
          )}
          {tpl.id === "navy" && (
            <div className="relative mx-auto h-40 w-full max-w-xs rounded-lg border-2 flex items-center justify-center" style={{ borderColor: tpl.palette.gold, background: "#f5f0e6", color: "#0e1a33" }}>
              <span className="serif text-2xl">Amplop Navy</span>
              <span className="seal absolute h-14 w-14 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "#7a1f2b" }}>R&amp;A</span>
            </div>
          )}
          {tpl.id === "kabar" && (
            <div className="paper mx-auto w-full max-w-xs rounded bg-[#fdf8ec] text-[#1c1a16] p-5 text-left shadow-xl">
              <p className="serif text-2xl font-bold border-b-2 border-[#1c1a16] pb-1">KABAR GEMBIRA</p>
              <p className="serif text-xl mt-3">Rizky dan Aisyah Menikah</p>
              <p className="text-sm mt-1">Sabtu, 12 Desember 2026, Malang</p>
            </div>
          )}
          {tpl.id === "chat" && (
            <div className="mx-auto w-full max-w-xs space-y-2 text-left">
              <div className="bubble inline-block rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-[#1f2a20]">Hai, kamu diundang nikah kami</div>
              <div className="bubble ml-auto block w-fit rounded-2xl rounded-br-sm px-4 py-2 text-white" style={{ background: "#25d366" }}>Serius? Kapan?</div>
              <div className="bubble inline-block rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-[#1f2a20]">12 Desember 2026, di Malang</div>
            </div>
          )}
        </div>

        <h2 className="serif text-4xl md:text-5xl font-semibold mt-6">Rizky &amp; Aisyah</h2>
        <p className="mt-2 text-sm tracking-[0.25em]">SABTU, 12 DESEMBER 2026</p>
        <div className="gold-line w-40 my-4" />
        <button type="button" onClick={onOpen} className="rounded-full px-7 py-3 font-medium text-[#14100a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ background: tpl.palette.gold, outlineColor: tpl.palette.ink }}>
          {CONTINUE_LABEL}
        </button>
        <p className="mt-3 text-xs opacity-80">{tpl.openHint}</p>
      </div>
    </div>
  );
}
