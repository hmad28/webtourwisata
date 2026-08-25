import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="footer">
    <div className="footer-grid shell">
      <div><div className="footer-brand">LOMBOK JOURNEY</div><p>Local trip planning for beaches, mountains, islands, and cultural experiences across Lombok.</p><small>{site.note}</small></div>
      <div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/tour-packages">Tour Packages</Link><Link href="/destinations">Destinations</Link><Link href="/about">About Us</Link></div>
      <div><h3>Popular Tours</h3><Link href="/tour-packages/secret-gili-islands">Secret Gili Islands</Link><Link href="/tour-packages/mount-rinjani-adventure">Mount Rinjani Adventure</Link><Link href="/tour-packages/north-lombok-waterfalls">North Lombok Waterfalls</Link></div>
      <div><h3>Contact</h3><p><Phone size={15} /> {site.displayPhone}</p><p><Mail size={15} /> {site.email}</p><p><MapPin size={15} /> {site.address}</p></div>
    </div>
    <div className="footer-bottom shell"><span>© 2026 Lombok Journey. Demo build.</span><span>Terms & Conditions · Privacy Policy</span></div>
  </footer>;
}
