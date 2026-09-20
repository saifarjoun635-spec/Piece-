import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { ANNOUNCEMENTS, CATEGORIES, CONTACT, LOGO_URL } from "../mock";
import { useStore } from "../context/StoreContext";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Boutique", to: "/boutique" },
  { label: "Marques", to: "/marques" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { count } = useStore();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/boutique?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement marquee */}
      <div className="bg-brand-blue text-white text-xs overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -ml-2 text-slate-700">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="px-3 py-3 rounded-md text-slate-800 hover:bg-secondary font-medium"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="mt-3 border-t border-border pt-3">
                  <p className="px-3 text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Catégories
                  </p>
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/boutique?category=${c.slug}`}
                      className="px-3 py-2 rounded-md text-slate-700 hover:bg-secondary text-sm block"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="DC Électroménager Pièces"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden sm:block leading-tight">
              <span className="block font-display font-extrabold text-brand-blue text-lg">
                DC Électroménager
              </span>
              <span className="block text-xs font-semibold tracking-[0.2em] text-brand-orange">
                PIÈCES
              </span>
            </span>
          </Link>

          {/* Search */}
          <form
            onSubmit={submitSearch}
            className="hidden md:flex flex-1 max-w-2xl mx-2"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une pièce, un numéro de modèle, une marque…"
                className="w-full h-11 pl-11 pr-28 rounded-full border border-border bg-secondary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 rounded-full bg-brand-orange hover:bg-orange-600"
              >
                Rechercher
              </Button>
            </div>
          </form>

          {/* Contact + Cart */}
          <div className="ml-auto flex items-center gap-2">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-sm text-slate-700 hover:text-brand-blue mr-2"
            >
              <Phone className="h-4 w-4 text-brand-orange" />
              <span className="font-semibold">{CONTACT.phone}</span>
            </a>
            <Link to="/panier" className="relative">
              <Button variant="outline" className="rounded-full h-11 px-4 gap-2 border-slate-300">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Panier</span>
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-brand-orange text-white text-[11px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Category nav row */}
        <div className="border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 h-11 overflow-x-auto no-scrollbar">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm font-semibold text-white bg-brand-blue px-4 h-11 shrink-0">
                  <Menu className="h-4 w-4" /> Toutes les catégories
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {CATEGORIES.map((c) => (
                  <DropdownMenuItem key={c.slug} asChild>
                    <Link to={`/boutique?category=${c.slug}`}>{c.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="hidden lg:block px-4 text-sm font-medium text-slate-700 hover:text-brand-blue whitespace-nowrap"
              >
                {n.label}
              </Link>
            ))}
            <span className="hidden lg:flex items-center gap-1 ml-auto text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand-orange" />
              {CONTACT.address}, {CONTACT.city}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
