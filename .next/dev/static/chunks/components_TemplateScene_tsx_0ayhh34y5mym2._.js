(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TemplateScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplateScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Partikel Three.js: warna dan jumlah beda per tema. Ini lapisan atmosfer,
// bukan objek utama. Objek utama (gebyok, gerbang, amplop) digerakkan GSAP/CSS 3D.
function Particles({ color, count, speed, reduced }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Particles.useMemo[positions]": ()=>{
            const arr = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                arr[i * 3] = (Math.random() - 0.5) * 10;
                arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
                arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
            }
            return arr;
        }
    }["Particles.useMemo[positions]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Particles.useFrame": (_, delta)=>{
            if (reduced) return;
            if (ref.current) {
                ref.current.rotation.y += delta * speed;
                ref.current.rotation.x += delta * speed * 0.3;
            }
        }
    }["Particles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    args: [
                        positions,
                        3
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/TemplateScene.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.07,
                color: color,
                transparent: true,
                opacity: 0.9,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TemplateScene.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Particles, "0ptl0ffithHPFc/nsupaEfjPmlg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Particles;
function Ring({ color, reduced }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Ring.useFrame": (_, delta)=>{
            if (!reduced && ref.current) ref.current.rotation.z += delta * 0.25;
        }
    }["Ring.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        position: [
            0,
            1.1,
            -0.4
        ],
        rotation: [
            Math.PI / 2.6,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                args: [
                    1.2,
                    0.025,
                    8,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: color
            }, void 0, false, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TemplateScene.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s1(Ring, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Ring;
const PARTICLE_CONF = {
    klasik: {
        color: "#d4af37",
        count: 260,
        speed: 0.12
    },
    sunda: {
        color: "#7fb3d5",
        count: 200,
        speed: 0.2
    },
    floral: {
        color: "#e8b4b8",
        count: 220,
        speed: 0.08
    },
    islami: {
        color: "#ffd700",
        count: 320,
        speed: 0.05
    },
    garden: {
        color: "#a8c686",
        count: 240,
        speed: 0.1
    },
    navy: {
        color: "#d4af37",
        count: 200,
        speed: 0.06
    },
    kabar: {
        color: "#9a7b2d",
        count: 140,
        speed: 0.15
    },
    chat: {
        color: "#25d366",
        count: 180,
        speed: 0.25
    }
};
function TemplateScene({ tpl, onOpen }) {
    _s2();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const conf = PARTICLE_CONF[tpl.id] ?? PARTICLE_CONF.klasik;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplateScene.useEffect": ()=>{
            setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        }
    }["TemplateScene.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplateScene.useEffect": ()=>{
            if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TemplateScene.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".scene-object", {
                        opacity: 0,
                        y: 30,
                        scale: 0.94
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: "power3.out"
                    });
                    // Gerakan khas tiap tema
                    if (tpl.id === "klasik") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".door-left", {
                        rotateY: -72,
                        duration: 1.4,
                        ease: "power2.inOut",
                        delay: 0.2,
                        transformOrigin: "left center"
                    });
                    if (tpl.id === "klasik") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".door-right", {
                        rotateY: 72,
                        duration: 1.4,
                        ease: "power2.inOut",
                        delay: 0.2,
                        transformOrigin: "right center"
                    });
                    if (tpl.id === "sunda") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".scroll-roll", {
                        scaleX: 0.1
                    }, {
                        scaleX: 1,
                        duration: 1.2,
                        ease: "power3.inOut",
                        transformOrigin: "center"
                    });
                    if (tpl.id === "floral") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".peony", {
                        scale: 0.2,
                        rotate: -40,
                        opacity: 0
                    }, {
                        scale: 1,
                        rotate: 0,
                        opacity: 1,
                        duration: 1.3,
                        ease: "back.out(1.6)"
                    });
                    if (tpl.id === "islami") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".dome", {
                        scale: 0.7,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                    if (tpl.id === "garden") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".gate-left", {
                        rotateY: -65,
                        duration: 1.3,
                        ease: "power2.inOut",
                        delay: 0.2,
                        transformOrigin: "left center"
                    });
                    if (tpl.id === "garden") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".gate-right", {
                        rotateY: 65,
                        duration: 1.3,
                        ease: "power2.inOut",
                        delay: 0.2,
                        transformOrigin: "right center"
                    });
                    if (tpl.id === "navy") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".seal", {
                        scale: 1
                    }, {
                        scale: 0.2,
                        opacity: 0,
                        rotate: 40,
                        duration: 0.9,
                        ease: "power2.in",
                        delay: 0.3
                    });
                    if (tpl.id === "kabar") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".paper", {
                        rotateY: -70,
                        rotateX: 12,
                        opacity: 0
                    }, {
                        rotateY: 0,
                        rotateX: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                    if (tpl.id === "chat") __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".bubble", {
                        y: 18,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.22,
                        ease: "power2.out"
                    });
                }
            }["TemplateScene.useEffect.ctx"], root);
            return ({
                "TemplateScene.useEffect": ()=>ctx.revert()
            })["TemplateScene.useEffect"];
        }
    }["TemplateScene.useEffect"], [
        tpl.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden",
        style: {
            background: tpl.palette.bg,
            color: tpl.palette.ink
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 opacity-90",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            5
                        ]
                    },
                    dpr: [
                        1,
                        2
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Particles, {
                            color: conf.color,
                            count: conf.count,
                            speed: conf.speed,
                            reduced: reduced
                        }, void 0, false, {
                            fileName: "[project]/components/TemplateScene.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        tpl.id === "klasik" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ring, {
                            color: conf.color,
                            reduced: reduced
                        }, void 0, false, {
                            fileName: "[project]/components/TemplateScene.tsx",
                            lineNumber: 92,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TemplateScene.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex w-full flex-col items-center justify-center px-6 py-16 text-center",
                style: {
                    perspective: 900
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] tracking-[0.3em]",
                        style: {
                            color: tpl.palette.gold
                        },
                        children: "THE WEDDING OF"
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scene-object mt-4 w-full max-w-sm",
                        children: [
                            tpl.id === "klasik" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-44",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "door-left flex-1 border-2 rounded-l-lg",
                                        style: {
                                            borderColor: tpl.palette.gold,
                                            background: "#2a1e0f"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-16 text-xs tracking-[0.3em]",
                                            style: {
                                                color: tpl.palette.gold
                                            },
                                            children: "KAWUNG"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TemplateScene.tsx",
                                            lineNumber: 102,
                                            columnNumber: 136
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "door-right flex-1 border-2 rounded-r-lg",
                                        style: {
                                            borderColor: tpl.palette.gold,
                                            background: "#2a1e0f"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-16 text-xs tracking-[0.3em]",
                                            style: {
                                                color: tpl.palette.gold
                                            },
                                            children: "JAWA"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TemplateScene.tsx",
                                            lineNumber: 103,
                                            columnNumber: 137
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            tpl.id === "sunda" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scroll-roll mx-auto h-40 w-full max-w-xs rounded-lg border-2 px-6 py-10",
                                style: {
                                    borderColor: tpl.palette.gold,
                                    background: "#f4efe6",
                                    color: "#10233a"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "serif text-2xl",
                                        children: "Mega Mendung"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-2",
                                        children: "gulungan terbuka dari tengah"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 108,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            tpl.id === "floral" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "peony mx-auto h-40 w-40 rounded-full flex items-center justify-center text-7xl",
                                style: {
                                    background: "radial-gradient(circle, #f7d9dc, #e8b4b8)"
                                },
                                children: "❀"
                            }, void 0, false, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            tpl.id === "islami" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dome mx-auto h-40 w-64 border-2 flex items-end justify-center pb-4",
                                style: {
                                    borderColor: tpl.palette.gold,
                                    borderRadius: "999px 999px 8px 8px",
                                    background: "radial-gradient(circle at 50% 100%, #d4af37 0%, transparent 65%)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-5xl",
                                    children: "☾"
                                }, void 0, false, {
                                    fileName: "[project]/components/TemplateScene.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            tpl.id === "garden" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gate-left flex-1 border-2 rounded-t-full",
                                        style: {
                                            borderColor: tpl.palette.gold,
                                            background: "#3d4a35"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gate-right flex-1 border-2 rounded-t-full",
                                        style: {
                                            borderColor: tpl.palette.gold,
                                            background: "#3d4a35"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            tpl.id === "navy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto h-40 w-full max-w-xs rounded-lg border-2 flex items-center justify-center",
                                style: {
                                    borderColor: tpl.palette.gold,
                                    background: "#f5f0e6",
                                    color: "#0e1a33"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "serif text-2xl",
                                        children: "Amplop Navy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "seal absolute h-14 w-14 rounded-full flex items-center justify-center text-white font-bold",
                                        style: {
                                            background: "#7a1f2b"
                                        },
                                        children: "R&A"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            tpl.id === "kabar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "paper mx-auto w-full max-w-xs rounded bg-[#fdf8ec] text-[#1c1a16] p-5 text-left shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "serif text-2xl font-bold border-b-2 border-[#1c1a16] pb-1",
                                        children: "KABAR GEMBIRA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "serif text-xl mt-3",
                                        children: "Rizky dan Aisyah Menikah"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-1",
                                        children: "Sabtu, 12 Desember 2026, Malang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            tpl.id === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto w-full max-w-xs space-y-2 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bubble inline-block rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-[#1f2a20]",
                                        children: "Hai, kamu diundang nikah kami"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bubble ml-auto block w-fit rounded-2xl rounded-br-sm px-4 py-2 text-white",
                                        style: {
                                            background: "#25d366"
                                        },
                                        children: "Serius? Kapan?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bubble inline-block rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-[#1f2a20]",
                                        children: "12 Desember 2026, di Malang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TemplateScene.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TemplateScene.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "serif text-4xl md:text-5xl font-semibold mt-6",
                        children: "Rizky & Aisyah"
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm tracking-[0.25em]",
                        children: "SABTU, 12 DESEMBER 2026"
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gold-line w-40 my-4"
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onOpen,
                        className: "rounded-full px-7 py-3 font-medium text-[#14100a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
                        style: {
                            background: tpl.palette.gold,
                            outlineColor: tpl.palette.ink
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTINUE_LABEL"]
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-xs opacity-80",
                        children: tpl.openHint
                    }, void 0, false, {
                        fileName: "[project]/components/TemplateScene.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TemplateScene.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TemplateScene.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s2(TemplateScene, "oXvlo2d3gAXFMSSZh9EwT08ssKA=");
_c2 = TemplateScene;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Particles");
__turbopack_context__.k.register(_c1, "Ring");
__turbopack_context__.k.register(_c2, "TemplateScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TemplateScene.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/TemplateScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_TemplateScene_tsx_0ayhh34y5mym2._.js.map