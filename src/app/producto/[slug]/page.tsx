import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PRODUCTS, formatPrice, getCategory, getProduct } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductBuyBox } from "@/components/ProductBuyBox";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/producto/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `#${p.rank} entre las prendas más compradas. ${p.why} Desde ${formatPrice(p.price)}.`,
  };
}

async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const cat = getCategory(p.category)!;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    category: cat.name,
    description: p.why,
    offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="font-mono text-xs text-muted">
        <Link href="/tienda" className="hover:text-accent">
          La lista
        </Link>{" "}
        /{" "}
        <Link href={`/categoria/${cat.id}`} className="hover:text-accent">
          {cat.name}
        </Link>
      </nav>

      <ProductBuyBox product={p} categoryName={cat.name} />

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="border-b border-ink pb-4 font-display text-3xl font-extrabold tracking-tight">
            También en {cat.name.toLowerCase()}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.slug} product={r} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function ProductPage({ params }: PageProps<"/producto/[slug]">) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
      <Suspense fallback={<div className="mt-6 h-[32rem] animate-pulse bg-paper-2" />}>
        <ProductContent params={params} />
      </Suspense>
    </div>
  );
}
