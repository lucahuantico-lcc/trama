import Link from "next/link";
import { CATEGORIES } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-5xl font-extrabold tracking-tight">
            TRAMA<span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-paper/70">
            Vendemos solo lo que la gente de verdad compra. La lista se arma con rankings públicos de
            ventas y tendencias de búsqueda, y se revisa cada temporada.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Categorías</p>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link href={`/categoria/${c.id}`} className="hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Ayuda</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>Envío gratis desde $60</li>
            <li>Cambios en 30 días</li>
            <li>Pago seguro</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-paper/15 px-4 py-5 text-center font-mono text-[11px] text-paper/40">
        Proyecto de demostración · precios y reseñas de ejemplo
      </p>
    </footer>
  );
}
