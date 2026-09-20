import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, CreditCard } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { formatCAD } from "../mock";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", phone: "",
    address: "", city: "", province: "QC", postal: "",
  });

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Votre panier est vide</h1>
        <Link to="/boutique">
          <Button className="mt-6 rounded-full bg-brand-orange hover:bg-orange-600">Magasiner</Button>
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 99 ? 0 : 14.99;
  const taxes = subtotal * 0.14975;
  const total = subtotal + shipping + taxes;
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // MOCK checkout — real Stripe payment will be wired to the backend.
  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      toast({
        title: "Commande simulée",
        description: "Le paiement Stripe sera activé avec le backend.",
      });
      navigate("/");
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Paiement</h1>
      <form onSubmit={handlePay} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white border border-border rounded-xl p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Coordonnées</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="email">Courriel</Label>
                <Input id="email" type="email" required value={form.email} onChange={set("email")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" required value={form.firstName} onChange={set("firstName")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" required value={form.lastName} onChange={set("lastName")} className="mt-1" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" value={form.phone} onChange={set("phone")} className="mt-1" />
              </div>
            </div>
          </section>

          <section className="bg-white border border-border rounded-xl p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Adresse de livraison</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" required value={form.address} onChange={set("address")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input id="city" required value={form.city} onChange={set("city")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="postal">Code postal</Label>
                <Input id="postal" required value={form.postal} onChange={set("postal")} className="mt-1" />
              </div>
            </div>
          </section>

          <section className="bg-white border border-border rounded-xl p-6">
            <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-brand-blue" /> Paiement
            </h2>
            <p className="text-sm text-muted-foreground">
              Le paiement sécurisé par carte (Stripe) sera activé lors de
              l'intégration du backend. Cliquez ci-dessous pour simuler.
            </p>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-border rounded-xl p-6 sticky top-40">
            <h2 className="font-bold text-lg text-slate-900 mb-4">Votre commande</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="h-12 w-12 rounded-md overflow-hidden bg-secondary/40 shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Qté {item.qty}</p>
                  </div>
                  <span className="font-medium">{formatCAD(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{formatCAD(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Livraison</span><span>{shipping === 0 ? "Gratuite" : formatCAD(shipping)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Taxes</span><span>{formatCAD(taxes)}</span></div>
              <div className="flex justify-between text-base font-bold border-t border-border pt-2"><span>Total</span><span>{formatCAD(total)}</span></div>
            </div>
            <Button type="submit" disabled={loading} className="w-full mt-5 h-12 rounded-full bg-brand-orange hover:bg-orange-600 gap-2">
              <Lock className="h-4 w-4" /> {loading ? "Traitement…" : "Payer maintenant"}
            </Button>
            <p className="text-[11px] text-center text-muted-foreground mt-3">
              Paiement chiffré et sécurisé.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
