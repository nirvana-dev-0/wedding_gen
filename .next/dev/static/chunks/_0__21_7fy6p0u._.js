(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/undanganku/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UndangankuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UndangankuPage() {
    _s();
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UndangankuPage.useEffect": ()=>{
            setList((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadInvitations"])());
        }
    }["UndangankuPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs tracking-[0.3em] text-[#8a6a1f]",
                children: "UNDANGANKU"
            }, void 0, false, {
                fileName: "[project]/app/undanganku/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "serif text-4xl font-semibold mt-1",
                children: "Undanganmu"
            }, void 0, false, {
                fileName: "[project]/app/undanganku/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[#5c5546]",
                children: "Daftar ini tersimpan di browser ini (localStorage). Undangan yang diterbitkan lewat checkout simulasi muncul di sini."
            }, void 0, false, {
                fileName: "[project]/app/undanganku/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-[#e3dcc9] rounded-2xl p-8 mt-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "serif text-2xl",
                        children: "Belum ada undangan"
                    }, void 0, false, {
                        fileName: "[project]/app/undanganku/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#5c5546] mt-2",
                        children: "Buat undangan pertamamu, lalu terbitkan lewat checkout."
                    }, void 0, false, {
                        fileName: "[project]/app/undanganku/page.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/buat",
                        className: "inline-block mt-4 rounded-full bg-[#241f18] text-white px-6 py-3",
                        children: "Buat undangan"
                    }, void 0, false, {
                        fileName: "[project]/app/undanganku/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/undanganku/page.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid md:grid-cols-2 gap-4 mt-6",
                children: list.map((inv)=>{
                    const tpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateById"])(inv.templateId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-2xl overflow-hidden border border-[#e3dcc9] bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 flex items-center justify-center",
                                style: {
                                    background: tpl.palette.bg,
                                    color: tpl.palette.ink
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "serif text-2xl",
                                    children: [
                                        inv.groom,
                                        " & ",
                                        inv.bride
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/undanganku/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/undanganku/page.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: [
                                            tpl.name,
                                            " · Paket ",
                                            inv.pkg
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/undanganku/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#5c5546]",
                                        children: [
                                            inv.date,
                                            " · /u/",
                                            inv.slug
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/undanganku/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/u/${inv.slug}?tpl=${inv.templateId}`,
                                                className: "rounded-full bg-[#241f18] text-white px-4 py-2 text-sm",
                                                children: "Buka"
                                            }, void 0, false, {
                                                fileName: "[project]/app/undanganku/page.tsx",
                                                lineNumber: 34,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/buat?tpl=${inv.templateId}`,
                                                className: "rounded-full border px-4 py-2 text-sm",
                                                children: "Ubah"
                                            }, void 0, false, {
                                                fileName: "[project]/app/undanganku/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/undanganku/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/undanganku/page.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, this)
                        ]
                    }, inv.slug, true, {
                        fileName: "[project]/app/undanganku/page.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/undanganku/page.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/undanganku/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(UndangankuPage, "ZBNfaudzy8bVxb8UgkyyMnLdlWY=");
_c = UndangankuPage;
var _c;
__turbopack_context__.k.register(_c, "UndangankuPage");
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

//# sourceMappingURL=_0__21_7fy6p0u._.js.map