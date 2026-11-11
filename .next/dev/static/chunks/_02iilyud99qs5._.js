(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/tamu/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TamuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TamuInner() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const slug = params.get("slug") ?? "rizky-aisyah";
    const tpl = params.get("tpl") ?? "klasik";
    const pkg = params.get("pkg") ?? "premium";
    const track = params.get("track") ?? "";
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_GUESTS"]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function addFromText(text) {
        const names = text.split(/\n|,/).map((s)=>s.trim()).filter(Boolean);
        setGuests((g)=>Array.from(new Set([
                ...g,
                ...names
            ])));
    }
    function onFile(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        f.text().then(addFromText).catch(()=>undefined);
    }
    function link(name) {
        const base = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
        return `${base}/u/${slug}?to=${encodeURIComponent(name)}`;
    }
    async function copyAll() {
        const text = guests.map((g)=>`${g}: ${link(g)}`).join("\n");
        try {
            await navigator.clipboard.writeText(text);
            setCopied("Semua link disalin.");
        } catch  {
            setCopied("Salin gagal, salin manual dari daftar.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs tracking-[0.3em] text-[#8a6a1f]",
                children: "TAMU DAN LINK"
            }, void 0, false, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "serif text-4xl font-semibold mt-1",
                children: "Tamu dan link"
            }, void 0, false, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[#5c5546] leading-relaxed",
                children: [
                    "Tiap tamu dapat link sendiri. Nama tamu muncul di sampul dari parameter ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "?to=nama"
                    }, void 0, false, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 39,
                        columnNumber: 130
                    }, this),
                    ". Kalau parameter kosong atau aneh, tampilannya jadi Bapak/Ibu/Saudara/i."
                ]
            }, void 0, true, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border border-[#e3dcc9] rounded-2xl p-5 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold",
                        children: "Tambah tamu"
                    }, void 0, false, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                placeholder: "Nama tamu, satu per baris atau dipisah koma",
                                className: "flex-1 border rounded-lg px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    addFromText(input);
                                    setInput("");
                                },
                                className: "rounded-full bg-[#241f18] text-white px-5",
                                children: "Tambah"
                            }, void 0, false, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mt-4 text-sm",
                        children: [
                            "Impor dari file teks atau CSV (satu nama per baris)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: ".txt,.csv",
                                onChange: onFile,
                                className: "block mt-1"
                            }, void 0, false, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-2 text-[#7a7264]",
                        children: "Impor Excel (XLSX) belum didukung di versi Next.js ini, pakai teks atau CSV dulu."
                    }, void 0, false, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold",
                                children: [
                                    guests.length,
                                    " tamu"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: copyAll,
                                className: "rounded-full border px-4 py-2 text-sm",
                                children: "Salin semua link"
                            }, void 0, false, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2 text-[#5c5546]",
                        children: copied
                    }, void 0, false, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 58,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-2",
                        children: guests.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "bg-white border border-[#e3dcc9] rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "serif text-lg",
                                        children: g
                                    }, void 0, false, {
                                        fileName: "[project]/app/tamu/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[#5c5546] break-all",
                                        children: [
                                            "/u/",
                                            slug,
                                            "?to=",
                                            encodeURIComponent(g)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tamu/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/u/${slug}?to=${encodeURIComponent(g)}&tpl=${tpl}`,
                                        className: "text-sm underline",
                                        children: "Lihat sebagai tamu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tamu/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, g, true, {
                                fileName: "[project]/app/tamu/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/tamu/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/checkout?tpl=${tpl}&pkg=${pkg}&track=${encodeURIComponent(track)}&slug=${encodeURIComponent(slug)}`,
                className: "inline-block mt-8 rounded-full bg-[#241f18] text-white px-6 py-3",
                children: "Lanjut ke checkout →"
            }, void 0, false, {
                fileName: "[project]/app/tamu/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tamu/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(TamuInner, "GoI+zlDC8crZdvlK/o/9YzLT3D0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TamuInner;
function TamuPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10",
            children: "Memuat tamu…"
        }, void 0, false, {
            fileName: "[project]/app/tamu/page.tsx",
            lineNumber: 76,
            columnNumber: 30
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TamuInner, {}, void 0, false, {
            fileName: "[project]/app/tamu/page.tsx",
            lineNumber: 76,
            columnNumber: 72
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tamu/page.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
_c1 = TamuPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "TamuInner");
__turbopack_context__.k.register(_c1, "TamuPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUPLE",
    ()=>COUPLE,
    "FAQ",
    ()=>FAQ,
    "PACKAGES",
    ()=>PACKAGES,
    "SAMPLE_GUESTS",
    ()=>SAMPLE_GUESTS,
    "TEMPLATES",
    ()=>TEMPLATES,
    "TRACKS",
    ()=>TRACKS,
    "formatRp",
    ()=>formatRp,
    "templateById",
    ()=>templateById
]);
const TEMPLATES = [
    {
        id: "klasik",
        name: "Klasik Jawa Emas",
        desc: "Pintu gebyok kayu, motif kawung, emas tipis di atas navy sogan.",
        palette: {
            bg: "#14100a",
            ink: "#f8f5f0",
            gold: "#c6a969",
            accent: "#8a6a1f"
        },
        frame: "arch",
        openLabel: "Buka pintu gebyok",
        openHint: "Ketuk untuk membuka gebyok",
        guestBox: "Bingkai emas ganda, nama di plakat kayu",
        reveal: "foil",
        track: "Gamelan",
        scene: "Gebyok 3D berputar terbuka, kawung berputar, partikel emas beterbangan."
    },
    {
        id: "sunda",
        name: "Sunda Heritage",
        desc: "Gulungan kertas, mega mendung biru, siger emas.",
        palette: {
            bg: "#10233a",
            ink: "#f4efe6",
            gold: "#d9b45b",
            accent: "#2e6f73"
        },
        frame: "octagon",
        openLabel: "Buka gulungan",
        openHint: "Ketuk untuk membuka gulungan",
        guestBox: "Pita biru gulungan, nama di atas kertas",
        reveal: "thread",
        track: "Degung",
        scene: "Mega mendung bergerak berlapis, gulungan 3D terbuka dari tengah."
    },
    {
        id: "floral",
        name: "Floral Putih Minimal",
        desc: "Peoni mekar, putih bersih, garis bunga tanpa kotak.",
        palette: {
            bg: "#fdfbf7",
            ink: "#3a3a34",
            gold: "#c9a86a",
            accent: "#e8b4b8"
        },
        frame: "oval",
        openLabel: "Lihat bunga mekar",
        openHint: "Ketuk, peoninya mekar",
        guestBox: "Garis bunga tanpa kotak, nama di bawah kelopak",
        reveal: "veil",
        track: "Piano Peony",
        scene: "Peoni mekar pakai GSAP scale dan rotate, kelopak jatuh satu-satu."
    },
    {
        id: "islami",
        name: "Kubah Cahaya Islami",
        desc: "Kubah geometri bercahaya, bintang berkelip, lentera.",
        palette: {
            bg: "#0b3d2e",
            ink: "#f8f5f0",
            gold: "#d4af37",
            accent: "#0f766e"
        },
        frame: "pointed",
        openLabel: "Masuk lewat arch",
        openHint: "Ketuk untuk menyalakan cahaya kubah",
        guestBox: "Wadah bentuk arch, nama di dalam lengkung",
        reveal: "veil",
        track: "Oud",
        scene: "Kubah 3D bercahaya, bintang berkelip, lentera bergoyang."
    },
    {
        id: "garden",
        name: "Rustic Garden Sage",
        desc: "Gerbang besi taman, mawar jatuh, hijau sage.",
        palette: {
            bg: "#eef0e6",
            ink: "#2f3a2c",
            gold: "#a8894f",
            accent: "#8a9a7b"
        },
        frame: "arch",
        openLabel: "Buka gerbang taman",
        openHint: "Ketuk, gerbangnya terbuka",
        guestBox: "Papan kayu garis putus-putus, nama di papan",
        reveal: "thread",
        track: "Gitar Taman",
        scene: "Gerbang 3D terbuka, mawar jatuh, parallax daun di pinggir."
    },
    {
        id: "navy",
        name: "Navy Royal",
        desc: "Amplop navy, segel lilin maroon, foil emas di atas gelap.",
        palette: {
            bg: "#0e1a33",
            ink: "#f5f0e6",
            gold: "#d4af37",
            accent: "#7a1f2b"
        },
        frame: "oval",
        openLabel: "Pecahkan segel dan buka",
        openHint: "Ketuk segel lilinnya",
        guestBox: "Kotak navy berbingkai foil emas dan segel lilin",
        reveal: "foil",
        track: "Royal Trio",
        scene: "Amplop 3D, flap terbuka, segel lilin retak dan pecah."
    },
    {
        id: "kabar",
        name: "Kabar Gembira",
        desc: "Koran vintage, masthead, kolom cerita.",
        palette: {
            bg: "#f4efe4",
            ink: "#1c1a16",
            gold: "#9a7b2d",
            accent: "#7a1f2b"
        },
        frame: "paper",
        openLabel: "Baca halaman dalam",
        openHint: "Ketuk, korannya terbuka",
        guestBox: "Potongan koran bermaterai UNTUK",
        reveal: "thread",
        track: "Jazz",
        scene: "Halaman koran 3D berputar masuk, headline muncul baris demi baris."
    },
    {
        id: "chat",
        name: "Sapa Sayang",
        desc: "Undangan sebagai percakapan chat, gelembung hijau.",
        palette: {
            bg: "#eef3ec",
            ink: "#1f2a20",
            gold: "#8a9a7b",
            accent: "#25d366"
        },
        frame: "bubble",
        openLabel: "Balas dan buka undangan",
        openHint: "Ketuk, pesannya masuk",
        guestBox: "Gelembung chat hijau, nama di dalam gelembung",
        reveal: "veil",
        track: "Lo-fi",
        scene: "Gelembung chat masuk berurutan pakai GSAP, titik mengetik berkedip."
    }
];
const PACKAGES = [
    {
        id: "basic",
        name: "Basic",
        price: 39000,
        desc: "Template dasar, link undangan.",
        music: "Tanpa musik"
    },
    {
        id: "premium",
        name: "Premium",
        price: 79000,
        desc: "Tema premium, RSVP, musik, galeri.",
        music: "Satu lagu tema per template"
    },
    {
        id: "exclusive",
        name: "Exclusive",
        price: 129000,
        desc: "Kustomisasi lebih banyak, fitur ekstra.",
        music: "Pilih dari 10 lagu"
    }
];
const TRACKS = [
    "Gamelan",
    "Degung",
    "Piano Peony",
    "Oud",
    "Gitar Taman",
    "Royal Trio",
    "Jazz",
    "Lo-fi",
    "Romantic Piano",
    "Cinematic Strings"
];
const SAMPLE_GUESTS = [
    "Budi Santoso",
    "Keluarga Besar Hartono",
    "Siti Rahma dan Pasangan",
    "Dewi Lestari"
];
const COUPLE = {
    bride: "Aisyah",
    groom: "Rizky",
    slug: "rizky-aisyah",
    date: "Sabtu, 12 Desember 2026",
    venue: "Gedung Serbaguna Malang",
    address: "Jl. Merdeka No. 12, Malang"
};
const FAQ = [
    {
        q: "Bagaimana cara membuat undangan?",
        a: "Pilih template, isi nama dan acara, lalu bayar dan terbitkan. Link langsung jadi dan bisa dibagikan."
    },
    {
        q: "Berapa biayanya dan kapan bayar?",
        a: "Basic Rp39.000, Premium Rp79.000, Exclusive Rp129.000. Bayar di awal sebelum undangan diterbitkan."
    },
    {
        q: "Bagaimana cara membagikan ke tamu?",
        a: "Tiap tamu dapat link sendiri, contohnya /u/rizky-aisyah?to=Budi. Nama tamu muncul di sampul."
    },
    {
        q: "Apakah tamu perlu aplikasi atau akun?",
        a: "Tidak. Link dibuka di browser HP, tanpa aplikasi dan tanpa akun."
    },
    {
        q: "Apakah bisa pakai foto, musik, RSVP, dan amplop?",
        a: "Bisa di paket Premium dan Exclusive. Basic hanya template dasar dan link undangan."
    },
    {
        q: "Berapa lama link aktif dan apakah bisa diubah setelah terbit?",
        a: "Link aktif 3 bulan. Isi undangan masih bisa diubah setelah terbit dari halaman Undanganku."
    }
];
function formatRp(n) {
    return "Rp" + n.toLocaleString("id-ID");
}
function templateById(id) {
    return TEMPLATES.find((t)=>t.id === id) ?? TEMPLATES[0];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_02iilyud99qs5._.js.map