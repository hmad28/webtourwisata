"use client";

import Link from "next/link";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

const links = [
  ["Home", "/"], ["Tour Packages", "/tour-packages"], ["Destinations", "/destinations"],
  ["Activities", "/#experiences"], ["About Us", "/about"], ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="brand">LOMBOK JOURNEY</Link>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="mobile-plan" href={whatsappUrl("Hi Lombok Journey, I would like help planning my trip.")} target="_blank">Plan My Trip <Send size={16} /></a>
      </nav>
      <a className="button orange desktop-plan" href={whatsappUrl("Hi Lombok Journey, I would like help planning my trip.")} target="_blank">Plan My Trip <Send size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
