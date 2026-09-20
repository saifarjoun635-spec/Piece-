import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Truck, CreditCard, Headphones } from "lucide-react";
import { CATEGORIES, CONTACT, LOGO_URL } from "../mock";

export default function Footer() {
  const badges = [
    { icon: ShieldCheck, title: "Pièces d'origine", desc: "Marques certifiées" },
    { icon: Truck, title: "Livraison rapide", desc: "Partout au Canada" },
    { icon: CreditCard, title: "Paiement sécurisé", desc: "Payez en ligne" },
    { icon: Headphones, title: "Conseils d'experts", desc: "Une équipe pour vous" },
  ];

  return (
    <footer className="mt-16">
      {/* Trust badges */}
      <div className="bg-secondary/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="logo" className="h-14 w-auto bg-white rounded-lg p-1" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Votre distributeur de pièces de rechange d'électroménagers à
              Montréal. Toutes les marques, au meilleur prix.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-orange">Catégories</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {CATEGORIES.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link to={`/boutique?category=${c.slug}`} className="hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-orange">Liens</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/boutique" className="hover:text-white">Boutique</Link></li>
              <li><Link to="/marques" className="hover:text-white">Marques</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/panier" className="hover:text-white">Mon panier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-orange">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-orange shrink-0" />
                <span>{CONTACT.address}<br />{CONTACT.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white break-all">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-orange" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
            <p>© {new Date().getFullYear()} DC Électroménager Pièces. Tous droits réservés.</p>
            <p>Montréal, QC · Vente | Réparation | Accessoires</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
