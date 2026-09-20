import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart, Check, Truck, ShieldCheck, Minus, Plus, ChevronLeft,
} from "lucide-react";
import { PRODUCTS, formatCAD } from "../mock";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <p className="text-lg text-muted-foreground">Pièce introuvable.</p>
        <Link to="/boutique" className="text-brand-blue font-semibold mt-4 inline-block">
          ← Retour à la boutique
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 5);

  const handleAdd = () => {
    addToCart(product, qty);
    toast({ title: "Ajouté au panier", description: `${qty} × ${product.name}` });
  };

  const buyNow = () => {
    addToCart(product, qty);
    navigate("/panier");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-blue mb-6"
      >
        <ChevronLeft className="h-4 w-4" /> Retour
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-secondary/40 rounded-2xl overflow-hidden border border-border">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover aspect-square" />
        </div>

        <div>
          <Link
            to={`/boutique?brand=${encodeURIComponent(product.brand)}`}
            className="text-sm font-semibold uppercase tracking-wide text-brand-orange"
          >
            {product.brand}
          </Link>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Numéro de pièce : <span className="font-semibold text-slate-700">{product.sku}</span></p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-extrabold text-slate-900">{formatCAD(product.price)}</span>
            {product.inStock ? (
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
                <Check className="h-4 w-4" /> En stock
              </span>
            ) : (
              <span className="text-sm font-semibold text-slate-500">Sur commande</span>
            )}
          </div>

          <p className="mt-5 text-slate-600 leading-relaxed">{product.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-border rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-11 w-11 flex items-center justify-center text-slate-600 hover:text-brand-blue">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="h-11 w-11 flex items-center justify-center text-slate-600 hover:text-brand-blue">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button onClick={handleAdd} className="h-11 px-6 rounded-full bg-brand-blue hover:bg-blue-900 gap-2">
              <ShoppingCart className="h-5 w-5" /> Ajouter au panier
            </Button>
            <Button onClick={buyNow} className="h-11 px-6 rounded-full bg-brand-orange hover:bg-orange-600">
              Acheter maintenant
            </Button>
          </div>

          <div className="mt-8 space-y-3 border-t border-border pt-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck className="h-5 w-5 text-brand-blue" /> Pièce d'origine — garantie sur les pièces
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Truck className="h-5 w-5 text-brand-blue" /> Livraison rapide partout au Canada
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Pièces similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
