import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, BRANDS } from "../mock";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const PER_PAGE = 24;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const category = params.get("category") || "";
  const brandParam = params.get("brand") || "";
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState(
    brandParam ? [brandParam] : []
  );

  const toggleBrand = (b) => {
    setPage(1);
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    );
  };

  const setCategory = (slug) => {
    setPage(1);
    const next = new URLSearchParams(params);
    if (slug) next.set("category", slug);
    else next.delete("category");
    setParams(next);
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (category) list = list.filter((p) => p.category === category);
    if (selectedBrands.length)
      list = list.filter((p) => selectedBrands.includes(p.brand));
    if (q)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, selectedBrands, q, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const activeCat = CATEGORIES.find((c) => c.slug === category);
  const availableBrands = category
    ? [...new Set(PRODUCTS.filter((p) => p.category === category).map((p) => p.brand))]
    : BRANDS;

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Catégories</h3>
        <div className="space-y-1">
          <button
            onClick={() => setCategory("")}
            className={`block text-sm w-full text-left px-2 py-1.5 rounded ${
              !category ? "bg-brand-blue text-white" : "text-slate-700 hover:bg-secondary"
            }`}
          >
            Toutes les catégories
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={`block text-sm w-full text-left px-2 py-1.5 rounded ${
                category === c.slug
                  ? "bg-brand-blue text-white"
                  : "text-slate-700 hover:bg-secondary"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Marques</h3>
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {availableBrands.map((b) => (
            <label key={b} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(b)}
                onCheckedChange={() => toggleBrand(b)}
              />
              <span className="text-slate-700">{b}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb + title */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground flex items-center gap-1">
          <Link to="/" className="hover:text-brand-blue">Accueil</Link>
          <span>/</span>
          <span className="text-slate-800">Boutique</span>
          {activeCat && (
            <>
              <span>/</span>
              <span className="text-slate-800">{activeCat.name}</span>
            </>
          )}
        </div>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          {activeCat ? activeCat.name : q ? `Résultats pour « ${params.get("q")} »` : "Toutes les pièces"}
        </h1>
        <p className="text-muted-foreground mt-1">{filtered.length} pièces trouvées</p>
      </div>

      {/* Active brand chips */}
      {selectedBrands.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedBrands.map((b) => (
            <button
              key={b}
              onClick={() => toggleBrand(b)}
              className="inline-flex items-center gap-1 text-xs bg-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-full"
            >
              {b} <X className="h-3 w-3" />
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-40 bg-white border border-border rounded-xl p-5">
            <FilterPanel />
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4 gap-3">
            <details className="lg:hidden">
              <summary className="list-none">
                <Button variant="outline" className="gap-2 rounded-full">
                  <SlidersHorizontal className="h-4 w-4" /> Filtres
                </Button>
              </summary>
              <div className="mt-4 bg-white border border-border rounded-xl p-5">
                <FilterPanel />
              </div>
            </details>
            <div className="ml-auto w-48">
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Trier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Populaires</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                  <SelectItem value="name">Nom (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {pageItems.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              Aucune pièce trouvée. Essayez d'ajuster vos filtres.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {pageItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                disabled={current === 1}
                onClick={() => setPage(current - 1)}
              >
                Précédent
              </Button>
              <span className="text-sm text-muted-foreground px-3">
                Page {current} / {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={current === totalPages}
                onClick={() => setPage(current + 1)}
              >
                Suivant
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
