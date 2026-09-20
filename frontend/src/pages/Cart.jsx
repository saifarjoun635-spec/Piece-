import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { formatCAD } from "../mock";
import { Button } from "../components/ui/button";

export default function Cart() {
  const { cart, updateQty, removeFromCart, subtotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mx-auto">
          <ShoppingBag className="h-9 w-9 text-muted-foreground" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-slate-900">Votre panier est vide</h1>
        <p className="text-muted-foreground mt-2">Ajoutez des pièces pour commencer.</p>
        <Link to="/boutique">
          <Button className="mt-6 h-12 px-6 rounded-full bg-brand-orange hover:bg-orange-600">
            Magasiner les pièces
          </Button>
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 99 ? 0 : 14.99;
  const taxes = subtotal * 0.14975;
  const total = subtotal + shipping + taxes;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Votre panier</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white border border-border rounded-xl p-4">
              <Link to={`/produit/${item.id}`} className="h-24 w-24 rounded-lg overflow-hidden bg-secondary/40 shrink-0">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase text-brand-orange">{item.brand}</p>
                <Link to={`/produit/${item.id}`} className="font-medium text-slate-900 hover:text-brand-blue line-clamp-2">
                  {item.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">Réf. {item.sku}</p>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-full">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="h-9 w-9 flex items-center justify-center text-slate-600 hover:text-brand-blue">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="h-9 w-9 flex items-center justify-center text-slate-600 hover:text-brand-blue">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:text-red-600 inline-flex items-center gap-1">
                    <Trash2 className="h-4 w-4" /> Retirer
                  </button>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-slate-900">{formatCAD(item.price * item.qty)}</p>
                <p className="text-xs text-muted-foreground">{formatCAD(item.price)} / unité</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-border rounded-xl p-6 sticky top-40">
            <h2 className="font-bold text-lg text-slate-900 mb-4">Résumé</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span className="font-medium">{formatCAD(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Livraison</span><span className="font-medium">{shipping === 0 ? "Gratuite" : formatCAD(shipping)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Taxes (TPS+TVQ)</span><span className="font-medium">{formatCAD(taxes)}</span></div>
              {shipping > 0 && (
                <p className="text-xs text-brand-blue bg-brand-blue/5 rounded-md px-3 py-2">
                  Livraison gratuite dès 99 $ d'achat.
                </p>
              )}
              <div className="border-t border-border pt-3 flex justify-between text-base font-bold">
                <span>Total</span><span>{formatCAD(total)}</span>
              </div>
            </div>
            <Link to="/paiement">
              <Button className="w-full mt-5 h-12 rounded-full bg-brand-orange hover:bg-orange-600 gap-2">
                Passer à la caisse <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/boutique" className="block text-center text-sm text-brand-blue mt-3 hover:underline">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
