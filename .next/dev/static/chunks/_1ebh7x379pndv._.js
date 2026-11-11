(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/buat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EditorInner() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [tplId, setTplId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(params.get("tpl") ?? "klasik");
    const [pkg, setPkg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("premium");
    const [track, setTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][8]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bride: "Aisyah",
        groom: "Rizky",
        slug: "rizky-aisyah",
        date: "Sabtu, 12 Desember 2026",
        venue: "Gedung Serbaguna Malang",
        address: "Jl. Merdeka No. 12, Malang",
        maps: ""
    });
    const tpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateById"])(tplId);
    const chosen = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGES"].find((p)=>p.id === pkg) ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGES"][1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorInner.useEffect": ()=>{
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDraft"])();
            if (Object.keys(d).length) setForm({
                "EditorInner.useEffect": (f)=>({
                        ...f,
                        ...d
                    })
            }["EditorInner.useEffect"]);
        }
    }["EditorInner.useEffect"], []);
    function set(k, v) {
        const next = {
            ...form,
            [k]: v
        };
        setForm(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDraft"])(next);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs tracking-[0.3em] text-[#8a6a1f]",
                children: "BUAT UNDANGAN"
            }, void 0, false, {
                fileName: "[project]/app/buat/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "serif text-4xl font-semibold mt-1",
                children: "Atelier undangan"
            }, void 0, false, {
                fileName: "[project]/app/buat/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[#5c5546]",
                children: "Pilih template, isi data, pilih paket, lalu lanjut ke tamu dan checkout. Draft tersimpan di browser ini."
            }, void 0, false, {
                fileName: "[project]/app/buat/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-6 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-white border border-[#e3dcc9] rounded-2xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold",
                                        children: "1. Template"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 mt-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEMPLATES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTplId(t.id),
                                                "aria-pressed": tplId === t.id,
                                                className: `rounded-xl p-3 text-left border-2 ${tplId === t.id ? "border-[#8a6a1f]" : "border-[#e3dcc9]"}`,
                                                style: {
                                                    background: t.palette.bg,
                                                    color: t.palette.ink
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "serif text-lg leading-tight",
                                                        children: t.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1 opacity-80",
                                                        children: [
                                                            t.openLabel,
                                                            " · ",
                                                            t.track
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-3 text-[#7a7264]",
                                        children: [
                                            "Scene template ini: ",
                                            tpl.scene
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-white border border-[#e3dcc9] rounded-2xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold",
                                        children: "2. Mempelai dan acara"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 mt-3",
                                        children: [
                                            [
                                                "bride",
                                                "groom",
                                                "slug",
                                                "date"
                                            ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm capitalize",
                                                    children: [
                                                        k === "bride" ? "Mempelai wanita" : k === "groom" ? "Mempelai pria" : k === "slug" ? "Slug link" : "Tanggal",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form[k],
                                                            onChange: (e)=>set(k, e.target.value),
                                                            className: "mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buat/page.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, k, true, {
                                                    fileName: "[project]/app/buat/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm col-span-2",
                                                children: [
                                                    "Nama tempat",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: form.venue,
                                                        onChange: (e)=>set("venue", e.target.value),
                                                        className: "mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm col-span-2",
                                                children: [
                                                    "Alamat lengkap",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: form.address,
                                                        onChange: (e)=>set("address", e.target.value),
                                                        className: "mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 67
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm col-span-2",
                                                children: [
                                                    "Link Google Maps (dijadikan iframe di undangan)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: form.maps,
                                                        onChange: (e)=>set("maps", e.target.value),
                                                        placeholder: "https://maps.google.com/...",
                                                        className: "mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 100
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-white border border-[#e3dcc9] rounded-2xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold",
                                        children: "3. Paket dan musik"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3 mt-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKAGES"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPkg(p.id),
                                                "aria-pressed": pkg === p.id,
                                                className: `rounded-xl border-2 p-3 text-left ${pkg === p.id ? "border-[#8a6a1f]" : "border-[#e3dcc9]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRp"])(p.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 60
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1 text-[#5c5546]",
                                                        children: p.music
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 106
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    pkg === "exclusive" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm mt-4",
                                        children: [
                                            "Pilih lagu",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: track,
                                                onChange: (e)=>setTrack(e.target.value),
                                                className: "mt-1 w-full border rounded-lg px-3 py-2 bg-white",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t,
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/app/buat/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 38
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/buat/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    pkg === "premium" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-3 text-[#5c5546]",
                                        children: [
                                            "Lagu tema template ini: ",
                                            tpl.track,
                                            ". Musik mulai setelah tamu menekan Buka Undangan."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 35
                                    }, this),
                                    pkg === "basic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-3 text-[#5c5546]",
                                        children: "Paket Basic tanpa musik."
                                    }, void 0, false, {
                                        fileName: "[project]/app/buat/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/tamu?tpl=${tplId}&pkg=${pkg}&track=${encodeURIComponent(track)}&slug=${encodeURIComponent(form.slug)}`,
                                className: "inline-block rounded-full bg-[#241f18] text-white px-6 py-3",
                                children: "Lanjut ke tamu →"
                            }, void 0, false, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/buat/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#7a7264] mb-2",
                                children: [
                                    "Preview sampul — ",
                                    tpl.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden sticky top-20",
                                style: {
                                    background: tpl.palette.bg,
                                    color: tpl.palette.ink
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center min-h-[420px] flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] tracking-[0.3em]",
                                            style: {
                                                color: tpl.palette.gold
                                            },
                                            children: "THE WEDDING OF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "serif text-4xl mt-3",
                                            children: [
                                                form.groom,
                                                " & ",
                                                form.bride
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-2 tracking-[0.25em]",
                                            children: form.date.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gold-line w-40 my-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm opacity-80",
                                            children: tpl.openLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-4 opacity-70",
                                            children: [
                                                "Paket ",
                                                chosen.name,
                                                " · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRp"])(chosen.price),
                                                " · ",
                                                chosen.music
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buat/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buat/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/buat/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/buat/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/buat/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/buat/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(EditorInner, "jRcjcrkZbCkng58v8MUqNmSROsY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EditorInner;
function BuatPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10",
            children: "Memuat editor…"
        }, void 0, false, {
            fileName: "[project]/app/buat/page.tsx",
            lineNumber: 98,
            columnNumber: 30
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorInner, {}, void 0, false, {
            fileName: "[project]/app/buat/page.tsx",
            lineNumber: 98,
            columnNumber: 74
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/buat/page.tsx",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
_c1 = BuatPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditorInner");
__turbopack_context__.k.register(_c1, "BuatPage");
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
"[project]/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadDraft",
    ()=>loadDraft,
    "loadInvitations",
    ()=>loadInvitations,
    "saveDraft",
    ()=>saveDraft,
    "saveInvitation",
    ()=>saveInvitation
]);
const KEY = "wedding-nextjs-invitations";
function loadInvitations() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return JSON.parse(localStorage.getItem(KEY) ?? "[]");
    } catch  {
        return [];
    }
}
function saveInvitation(inv) {
    const list = loadInvitations().filter((x)=>x.slug !== inv.slug);
    list.unshift(inv);
    localStorage.setItem(KEY, JSON.stringify(list));
}
function loadDraft() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return JSON.parse(localStorage.getItem("wedding-nextjs-draft") ?? "{}");
    } catch  {
        return {};
    }
}
function saveDraft(d) {
    localStorage.setItem("wedding-nextjs-draft", JSON.stringify(d));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1ebh7x379pndv._.js.map