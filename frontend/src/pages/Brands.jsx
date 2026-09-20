import React from "react";
import { Link } from "react-router-dom";
import { BRANDS, PRODUCTS } from "../mock";

export default function Brands() {
  const countByBrand = (b) => PRODUCTS.filter((p) => p.brand === b).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Toutes les marques</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Nous distribuons des pièces d'origine et compatibles pour toutes les
        grandes marques d'électroménagers.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {BRANDS.map((b) => (
          <Link
            key={b}
            to={`/boutique?brand=${encodeURIComponent(b)}`}
            className="card-lift bg-white border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="font-display font-extrabold text-xl text-brand-blue">{b}</span>
            <span className="mt-2 text-xs text-muted-foreground">
              {countByBrand(b)} pièces
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
