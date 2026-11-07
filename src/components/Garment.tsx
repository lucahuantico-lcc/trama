import type { Garment as GarmentType } from "@/data/products";

// Siluetas planas de cada prenda, dibujadas en SVG y coloreadas con el color elegido.
// Sustituyen a las fotos hasta que la tienda tenga fotografía propia.

const SHORT_TOP =
  "M62 42 L86 32 Q100 46 114 32 L138 42 L168 72 L148 90 L138 80 L138 172 L62 172 L62 80 L52 90 L32 72 Z";
const LONG_TOP =
  "M62 42 L86 32 Q100 46 114 32 L138 42 L158 62 L172 154 L154 158 L138 92 L138 172 L62 172 L62 92 L46 158 L28 154 L42 62 Z";
const LONG_COAT =
  "M60 36 L86 28 Q100 40 114 28 L140 36 L160 58 L174 150 L156 154 L142 90 L146 184 L54 184 L58 90 L44 154 L26 150 L40 58 Z";

function luminance(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

export function Garment({
  type,
  color,
  className,
}: {
  type: GarmentType;
  color: string;
  className?: string;
}) {
  const dark = luminance(color) < 0.42;
  const line = dark ? "rgba(255,255,255,.28)" : "rgba(23,21,18,.28)";
  const edge = dark ? "rgba(0,0,0,.35)" : "rgba(23,21,18,.32)";
  const body = { fill: color, stroke: edge, strokeWidth: 1.5, strokeLinejoin: "round" as const };
  const detail = { fill: "none", stroke: line, strokeWidth: 1.6, strokeLinecap: "round" as const };

  let shape: React.ReactNode;
  switch (type) {
    case "tee":
      shape = (
        <>
          <path d={SHORT_TOP} {...body} />
          <path d="M86 32 Q100 50 114 32" {...detail} />
        </>
      );
      break;
    case "longsleeve":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M86 32 Q100 50 114 32" {...detail} />
        </>
      );
      break;
    case "tank":
      shape = (
        <>
          <path d="M72 28 L84 28 Q100 64 116 28 L128 28 L132 72 L140 172 L60 172 L68 72 Z" {...body} />
        </>
      );
      break;
    case "sweatshirt":
    case "sweater":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M84 33 Q100 52 116 33" {...detail} />
          <path d="M64 162 L136 162 M140 146 L156 150 M60 146 L44 150" {...detail} />
          {type === "sweater" && <path d="M100 60 L100 160" {...detail} strokeDasharray="3 6" />}
        </>
      );
      break;
    case "hoodie":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M80 40 Q100 4 120 40 Q100 60 80 40 Z" {...body} />
          <path d="M94 54 L92 82 M106 54 L108 82" {...detail} />
          <path d="M76 126 L124 126 L130 156 L70 156 Z" {...detail} />
        </>
      );
      break;
    case "cardigan":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M86 32 L100 80 L114 32 M100 80 L100 172" {...detail} />
          {[96, 116, 136, 156].map((y) => (
            <circle key={y} cx={104} cy={y} r={2.4} fill={line} />
          ))}
        </>
      );
      break;
    case "shirt":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M86 32 L94 52 L100 40 L106 52 L114 32" {...detail} />
          <path d="M100 42 L100 172" {...detail} />
          {[66, 92, 118, 144].map((y) => (
            <circle key={y} cx={104} cy={y} r={2.2} fill={line} />
          ))}
        </>
      );
      break;
    case "pants":
    case "jeans":
      shape = (
        <>
          <path d="M64 28 L136 28 L144 178 L110 178 L100 76 L90 178 L56 178 Z" {...body} />
          <path d="M64 40 L136 40" {...detail} />
          {type === "jeans" && <path d="M70 46 Q78 66 92 58 M130 46 Q122 66 108 58" {...detail} />}
        </>
      );
      break;
    case "leggings":
      shape = (
        <>
          <path d="M74 28 L126 28 L130 178 L106 178 L100 82 L94 178 L70 178 Z" {...body} />
          <path d="M74 44 L126 44" {...detail} />
        </>
      );
      break;
    case "shorts":
      shape = (
        <>
          <path d="M56 58 L144 58 L152 134 L108 140 L100 98 L92 140 L48 134 Z" {...body} />
          <path d="M57 70 L143 70" {...detail} />
        </>
      );
      break;
    case "skirt":
      shape = (
        <>
          <path d="M72 44 L128 44 L156 166 L44 166 Z" {...body} />
          <path d="M72 56 L128 56 M88 56 L76 166 M112 56 L124 166 M100 56 L100 166" {...detail} />
        </>
      );
      break;
    case "dress":
      shape = (
        <>
          <path d="M80 22 L90 22 Q100 38 110 22 L120 22 L126 72 L154 180 L46 180 L74 72 Z" {...body} />
          <path d="M75 74 Q100 82 125 74" {...detail} />
        </>
      );
      break;
    case "jacket":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M86 32 L94 70 L100 172 M114 32 L106 70 L100 172" {...detail} />
          <path d="M72 128 L88 128 M112 128 L128 128" {...detail} />
        </>
      );
      break;
    case "puffer":
      shape = (
        <>
          <path d={LONG_TOP} {...body} />
          <path d="M80 36 Q100 22 120 36" {...detail} />
          {[66, 92, 118, 144].map((y) => (
            <path key={y} d={`M62 ${y} Q100 ${y + 6} 138 ${y}`} {...detail} />
          ))}
          <path d="M100 40 L100 172" {...detail} />
        </>
      );
      break;
    case "coat":
      shape = (
        <>
          <path d={LONG_COAT} {...body} />
          <path d="M86 28 L96 78 L100 184 M114 28 L104 78" {...detail} />
          <path d="M86 28 L74 62 L92 74 M114 28 L126 62 L108 74" {...detail} />
          {[104, 130].map((y) => (
            <circle key={y} cx={110} cy={y} r={2.6} fill={line} />
          ))}
        </>
      );
      break;
    case "briefs":
      shape = (
        <>
          <path d="M48 66 L152 66 L148 92 Q122 100 112 142 L88 142 Q78 100 52 92 Z" {...body} />
          <path d="M50 78 L150 78" {...detail} />
        </>
      );
      break;
    case "bra":
      shape = (
        <>
          <path d="M74 40 L80 84 M126 40 L120 84" {...detail} strokeWidth={3} />
          <path d="M46 86 Q70 62 98 96 L102 96 Q130 62 154 86 L154 120 L46 120 Z" {...body} />
          <path d="M46 108 L154 108" {...detail} />
        </>
      );
      break;
    case "socks":
      shape = (
        <>
          <path d="M70 26 L104 26 L104 116 L140 136 Q156 156 136 170 L84 170 Q68 166 70 146 Z" {...body} />
          <path d="M70 40 L104 40 M70 48 L104 48" {...detail} />
          <path d="M108 36 L138 36 L138 110 L164 124" {...detail} strokeDasharray="4 5" />
        </>
      );
      break;
    case "set":
      shape = (
        <>
          <g transform="translate(30 4) scale(.7)">
            <path d={LONG_TOP} {...body} />
          </g>
          <g transform="translate(64 64) scale(.66)">
            <path d="M64 28 L136 28 L144 178 L110 178 L100 76 L90 178 L56 178 Z" {...body} />
          </g>
        </>
      );
      break;
  }

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <ellipse cx="100" cy="188" rx="58" ry="5" fill="rgba(23,21,18,.08)" />
      {shape}
    </svg>
  );
}
