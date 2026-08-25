import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, MapPin, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() { return tours.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const tour = tours.find(t => t.slug === slug); return { title: tour?.title ?? "Tour", description: tour?.shortDescription }; }

export default async function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const tour = tours.find(t => t.slug === slug); if (!tour) notFound();
  return <>
    <section className="detail-hero shell"><Image src={tour.image} alt={tour.title} fill priority sizes="100vw" /><div className="hero-shade" /><div><span>{tour.category}</span><h1>{tour.title}</h1><p>{tour.shortDescription}</p></div></section>
    <section className="detail-layout shell section"><article className="detail-content"><div className="detail-facts"><span><Clock /> <small>Duration</small><strong>{tour.duration}</strong></span><span><MapPin /> <small>Location</small><strong>{tour.location}</strong></span></div><h2>Overview</h2><p>{tour.shortDescription} Every route can be adjusted after a direct conversation about your group and travel dates.</p><h2>Highlights</h2><ul className="check-list">{tour.highlights.map(h => <li key={h}><Check />{h}</li>)}</ul><h2>Sample itinerary</h2><div className="timeline">{tour.itinerary.map((item, i) => <div key={item.title}><b>{i + 1}</b><span><h3>{item.title}</h3><p>{item.description}</p></span></div>)}</div><div className="info-note"><strong>Before booking</strong><p>Inclusions, pickup point, weather conditions, and final prices must be confirmed through WhatsApp. Published content is editable draft data.</p></div></article><aside className="booking-card"><span>Starting from</span><strong>{tour.startingPrice ? `IDR ${tour.startingPrice.toLocaleString("id-ID")}` : "Ask us"}</strong><small>per person · indicative only</small><a className="button orange" href={whatsappUrl(`Hi Lombok Journey, I would like to ask about availability for ${tour.title}.`)} target="_blank"><MessageCircle /> Ask Availability</a><Link href="/contact" className="button outline">Send an enquiry</Link></aside></section>
  </>;
}
