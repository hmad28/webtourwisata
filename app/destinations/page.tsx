import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/data/destinations";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Lombok Destinations", description: "Explore islands, mountains, beaches, and villages across Lombok." };
export default function DestinationsPage() { return <><PageHero eyebrow="BEYOND THE GUIDEBOOK" title="Explore Lombok" text="One island, many different landscapes. Find the places that match your pace." image={images.islands} /><section className="section shell"><div className="section-heading-left"><span>DESTINATIONS</span><h2>Follow the coast. Climb into the hills.</h2></div><div className="destination-grid">{destinations.map(d => <Link key={d.slug} href={`/destinations/${d.slug}`}><div><Image src={d.image} alt={d.name} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><span><h3>{d.name}</h3><p>{d.tagline}</p></span><ArrowUpRight /></Link>)}</div></section></>; }
