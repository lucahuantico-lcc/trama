// Las fotos se sirven ya optimizadas desde el CDN de Unsplash (tamaño, calidad y formato WebP/AVIF),
// así no gastan la cuota de optimización de imágenes de Vercel.
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  return url.toString();
}
