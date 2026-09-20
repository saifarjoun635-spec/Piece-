import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, Wrench } from "lucide-react";
import {
  CATEGORIES,
  BRANDS,
  FEATURED,
  NEW_ITEMS,
  HERO_IMAGE,
} from "../mock";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-blue bg-white border border-border rounded-full px-3 py-1.5">
              <Wrench className="h-3.5 w-3.5 text-brand-orange" />
              Distributeur de pièces · Montréal
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Les pièces de rechange,
              <span className="text-brand-blue"> de A à Z.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Réfrigérateurs, laveuses, sécheuses, lave-vaisselle, cuisinières
              et plus. Pièces d'origine pour toutes les grandes marques, au
              meilleur prix.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/boutique">
                <Button className="h-12 px-6 rounded-full bg-brand-orange hover:bg-orange-600 text-base gap-2">
                  Magasiner les pièces <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marques">
                <Button
                  variant="outline"
                  className="h-12 px-6 rounded-full text-base border-slate-300"
                >
                  Toutes les marques
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Pièces d'origine
              </span>
              <span className="flex items-center gap-1.5">
                <Search className="h-4 w-4 text-brand-blue" /> Recherche par n° de modèle
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white">
              <img
                src={HERO_IMAGE}
                alt="Réparation et pièces d'électroménager"
                className="w-full h-[340px] md:h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-border px-5 py-4 hidden sm:block">
              <p className="text-2xl font-extrabold text-brand-blue">24+</p>
              <p className="text-xs text-muted-foreground">marques disponibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Nos catégories
            </h2>
            <p className="text-muted-foreground mt-1">
              Trouvez la pièce exacte pour votre appareil.
            </p>
          </div>
          <Link
            to="/boutique"
            className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap"
          >
            Tout voir →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/boutique?category=${c.slug}`}
              className="group card-lift bg-white border border-border rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-semibold text-slate-900 text-sm">
                  {c.name}
                </span>
                <ArrowRight className="h-4 w-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              En vedette
            </h2>
            <Link to="/boutique" className="text-sm font-semibold text-brand-blue hover:underline">
              Voir plus →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FEATURED.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
          Nous couvrons toutes les grandes marques
        </h2>
        <p className="text-muted-foreground text-center mt-1">
          Pièces d'origine et compatibles pour votre électroménager.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {BRANDS.map((b) => (
            <Link
              key={b}
              to={`/boutique?brand=${encodeURIComponent(b)}`}
              className="px-5 py-2.5 rounded-full border border-border bg-white text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {b}
            </Link>
          ))}
        </div>
      </section>

      {/* New items */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Nouveautés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NEW_ITEMS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-brand-blue text-white px-8 py-12 md:py-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Une pièce à trouver ?
            </h2>
            <p className="mt-3 text-white/80 text-lg">
              Parcourez notre catalogue complet ou contactez notre équipe
              montréalaise pour un conseil personnalisé.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/boutique">
                <Button className="h-12 px-6 rounded-full bg-brand-orange hover:bg-orange-600 text-base">
                  Magasiner tout
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="h-12 px-6 rounded-full text-base bg-transparent border-white/40 text-white hover:bg-white hover:text-brand-blue"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-orange/20" />
          <div className="absolute -left-10 -bottom-20 h-56 w-56 rounded-full bg-white/5" />
        </div>
      </section>
    </div>
  );
}
