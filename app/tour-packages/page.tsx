import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TourCatalog } from "@/components/tour-catalog";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Lombok Tour Packages", description: "Browse private Lombok island, mountain, beach, and waterfall tours." };
export default function ToursPage() { return <><PageHero eyebrow="TRAVEL YOUR WAY" title="Lombok Tour Packages" text="Private, flexible trips shaped around your time, interests, and travel style." image={images.mountain} /><section className="section shell"><div className="section-heading-left"><span>FIND YOUR EXPERIENCE</span><h2>Start with a route. Make it yours.</h2><p>Choose a theme below, then contact us to confirm current inclusions, availability, and final pricing.</p></div><TourCatalog /></section></>; }
