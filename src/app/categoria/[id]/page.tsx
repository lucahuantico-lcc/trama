import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CATEGORIES, PRODUCTS, getCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/categoria/[id]">): Promise<Metadata> {
  const { id } = await params;
  const cat = getCategory(id);
  return cat ? { title: cat.name, description: cat.blurb } : {};
}

async function CategoryContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cat = getCategory(id);
  if (!cat) notFound();
  const items = PRODUCTS.filter((p) => p.category === cat.id);

  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        Categoría · {items.length} prendas
      </p>
      <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-tight">
        {cat.name}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{cat.blurb}</p>
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink pt-8 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}

export default function CategoryPage({ params }: PageProps<"/categoria/[id]">) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
      <Suspense fallback={<div className="h-96 animate-pulse bg-paper-2" />}>
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
}
