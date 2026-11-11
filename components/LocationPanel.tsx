import { COUPLE, type TemplateDef } from "@/lib/data";

function Corner({ className, color, children }: { className: string; color: string; children: React.ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className={`absolute h-10 w-10 sm:h-12 sm:w-12 ${className}`} style={{ color }}>
      {children}
    </svg>
  );
}

function Ornaments({ tpl }: { tpl: TemplateDef }) {
  const gold = tpl.palette.gold;
  const accent = tpl.palette.accent;
  const corners = [
    "left-2 top-2",
    "right-2 top-2 rotate-90",
    "right-2 bottom-2 rotate-180",
    "left-2 bottom-2 -rotate-90",
  ];

  if (tpl.id === "sunda") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-x-3 -top-4 -bottom-4 overflow-hidden">
        <svg viewBox="0 0 400 34" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-7 w-full"><path d="M0 26C40 2 78 2 118 26s78 24 118 0 78-24 118 0 46 10 46 10" fill="none" stroke={gold} strokeWidth="1.1" opacity=".75" /></svg>
        <svg viewBox="0 0 400 34" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-7 w-full rotate-180"><path d="M0 26C40 2 78 2 118 26s78 24 118 0 78-24 118 0 46 10 46 10" fill="none" stroke={accent} strokeWidth="1.1" opacity=".65" /></svg>
      </div>
    );
  }

  if (tpl.id === "floral") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3">
        {corners.map((pos) => (
          <Corner key={pos} className={pos} color={accent}>
            <g fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="24" cy="12" r="5" />
              <circle cx="35" cy="21" r="5" />
              <circle cx="29" cy="33" r="5" />
              <circle cx="16" cy="32" r="5" />
              <circle cx="13" cy="20" r="5" />
              <circle cx="24" cy="22" r="2.4" fill="currentColor" />
            </g>
          </Corner>
        ))}
      </div>
    );
  }

  if (tpl.id === "islami") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3">
        {corners.map((pos) => (
          <Corner key={pos} className={pos} color={gold}>
            <path d="M24 3l5 16 16 5-16 5-5 16-5-16-16-5 16-5z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
          </Corner>
        ))}
      </div>
    );
  }

  if (tpl.id === "garden") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3">
        {corners.map((pos) => (
          <Corner key={pos} className={`${pos} sway`} color={accent}>
            <path d="M4 44C4 23 20 5 44 4c0 21-16 40-40 40z" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M7 41C17 30 27 21 38 13" fill="none" stroke="currentColor" strokeWidth="1.1" />
          </Corner>
        ))}
      </div>
    );
  }

  if (tpl.id === "navy") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3">
        <div className="absolute inset-0 rounded-[inherit] border" style={{ borderColor: gold, opacity: 0.55 }} />
        <div className="absolute inset-2 rounded-[inherit] border" style={{ borderColor: gold, opacity: 0.3 }} />
        <div className="seal-pulse absolute -top-5 right-6 flex h-11 w-11 items-center justify-center rounded-full text-[10px] font-bold text-[#f5f0e6]" style={{ background: accent }}>R&amp;A</div>
      </div>
    );
  }

  if (tpl.id === "kabar") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3 border-y-4 border-double" style={{ borderColor: "#1c1a16" }}>
        <div className="absolute inset-x-4 top-2 h-px" style={{ background: "#1c1a16" }} />
        <div className="absolute inset-x-4 bottom-2 h-px" style={{ background: "#1c1a16" }} />
      </div>
    );
  }

  if (tpl.id === "chat") {
    return (
      <div aria-hidden className="pointer-events-none absolute -inset-3">
        <div className="absolute inset-0 rounded-[30px] rounded-bl-md border-2" style={{ borderColor: accent }} />
        <div className="absolute -bottom-3 left-6 h-5 w-5 rotate-45 border-b-2 border-l-2" style={{ borderColor: accent, background: tpl.palette.bg }} />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute -inset-3">
      <div className="absolute inset-0 border" style={{ borderColor: gold, opacity: 0.7 }} />
      <div className="absolute inset-2 border-4 border-double" style={{ borderColor: gold, opacity: 0.45 }} />
      {corners.map((pos) => (
        <Corner key={pos} className={pos} color={gold}>
          <path d="M4 24V4h20" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" strokeWidth="1" />
        </Corner>
      ))}
    </div>
  );
}

export default function LocationPanel({ tpl }: { tpl: TemplateDef }) {
  const query = encodeURIComponent(`${COUPLE.venue}, ${COUPLE.address}`);
  const shape = tpl.frame === "bubble" ? "rounded-[28px] rounded-bl-md" : tpl.frame === "paper" ? "rounded-sm" : "rounded-2xl";
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent("112.58,-8.02,112.68,-7.94")}&layer=mapnik&marker=${encodeURIComponent("-7.982,112.631")}`;
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <Ornaments tpl={tpl} />
      <div
        className={`relative overflow-hidden border-2 ${shape}`}
        style={{ borderColor: tpl.palette.gold, background: tpl.palette.bg }}
      >
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
          <div className="absolute inset-0 flex items-center justify-center text-xs opacity-45">Memuat peta…</div>
          <iframe
            title={`Peta lokasi ${COUPLE.venue}`}
            src={mapSrc}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="relative px-5 py-5 text-center">
          <h3 className="serif text-2xl font-semibold">{COUPLE.venue}</h3>
          <p className="mt-1 text-sm opacity-80">{COUPLE.address}</p>
          <p className="mt-1 text-[11px] opacity-50">Peta contoh kawasan Malang.</p>
          <a
            href={`https://www.google.com/maps?q=${query}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm underline underline-offset-4 opacity-80 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ outlineColor: tpl.palette.gold }}
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
