import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { CONTACT } from "../mock";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "../hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    toast({ title: "Message envoyé", description: "Nous vous répondrons rapidement." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="text-muted-foreground mt-2">
          Une question sur une pièce ou une commande ? Écrivez-nous.
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Adresse", value: `${CONTACT.address}\n${CONTACT.city}` },
            { icon: Phone, title: "Téléphone", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
            { icon: Mail, title: "Courriel", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { icon: Clock, title: "Heures d'ouverture", value: CONTACT.hours },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4 bg-white border border-border rounded-xl p-5">
              <div className="h-11 w-11 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{c.title}</p>
                {c.href ? (
                  <a href={c.href} className="text-slate-600 hover:text-brand-blue break-all">{c.value}</a>
                ) : (
                  <p className="text-slate-600 whitespace-pre-line">{c.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="rounded-xl overflow-hidden border border-border h-64">
            <iframe
              title="carte"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`}
            />
          </div>
        </div>

        <form onSubmit={submit} className="bg-white border border-border rounded-xl p-6 h-fit">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nom *</Label>
              <Input id="name" required value={form.name} onChange={set("name")} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="cemail">Courriel *</Label>
              <Input id="cemail" type="email" required value={form.email} onChange={set("email")} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="cphone">Téléphone</Label>
              <Input id="cphone" value={form.phone} onChange={set("phone")} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="cmsg">Message *</Label>
              <Textarea id="cmsg" required rows={5} value={form.message} onChange={set("message")} className="mt-1" />
            </div>
            <Button type="submit" className="w-full h-12 rounded-full bg-brand-orange hover:bg-orange-600 gap-2">
              <Send className="h-4 w-4" /> Envoyer le message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
