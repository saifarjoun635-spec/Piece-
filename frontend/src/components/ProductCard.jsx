import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { formatCAD } from "../mock";
import { useStore } from "../context/StoreContext";
import { Button } from "./ui/button";
import { toast } from "../hooks/use-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Ajouté au panier",
      description: product.name,
    });
  };

  return (
    <Link
      to={`/produit/${product.id}`}
      className="group card-lift bg-white border border-border rounded-xl overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square bg-secondary/40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <span className="absolute top-2 left-2 bg-slate-800 text-white text-[11px] px-2 py-1 rounded-md">
            Sur commande
          </span>
        )}
        {product.inStock && (
          <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[11px] px-2 py-1 rounded-md flex items-center gap-1">
            <Check className="h-3 w-3" /> En stock
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-orange">
          {product.brand}
        </span>
        <h3 className="mt-1 text-sm font-medium text-slate-900 leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-brand-blue">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">Réf. {product.sku}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            {formatCAD(product.price)}
          </span>
          <Button
            onClick={handleAdd}
            size="sm"
            className="rounded-full bg-brand-blue hover:bg-blue-900 gap-1"
          >
            <ShoppingCart className="h-4 w-4" />
            Ajouter
          </Button>
        </div>
      </div>
    </Link>
  );
}
