import Image from "next/image";
import { COLOR_HEX, type Product } from "@/data/products";
import { Garment } from "./Garment";

/** Foto del producto, o su dibujo si no tiene foto. Rellena el contenedor (que debe ser relative). */
export function ProductImage({
  product,
  sizes,
  color,
  preload = false,
  className = "",
}: {
  product: Product;
  sizes: string;
  color?: string;
  preload?: boolean;
  className?: string;
}) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <Garment
      type={product.garment}
      color={COLOR_HEX[color ?? product.colors[0]]}
      className={`absolute inset-[12%] ${className}`}
    />
  );
}
