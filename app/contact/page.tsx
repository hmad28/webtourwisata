import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { images, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact", description: "Plan your Lombok trip by WhatsApp or send an enquiry." };
export default function ContactPage() { return <><PageHero eyebrow="LET'S PLAN TOGETHER" title="Tell us what you have in mind" text="A date, a place, or just a rough idea is enough to start the conversation." image={images.pink} /><section className="section shell contact-layout"><aside><span className="eyebrow teal">CONTACT</span><h2>Talk to a local trip planner</h2><p>Send your travel dates, group size, and the experiences you’re interested in. We’ll use that to shape a practical first suggestion.</p><div className="contact-list"><a href={whatsappUrl("Hi Lombok Journey, I would like to plan a trip.")} target="_blank"><MessageCircle /><span><small>WhatsApp</small><strong>{site.displayPhone}</strong></span></a><a href={`mailto:${site.email}`}><Mail /><span><small>Email</small><strong>{site.email}</strong></span></a><div><MapPin /><span><small>Area</small><strong>{site.address}</strong></span></div><div><Clock /><span><small>Hours</small><strong>Confirm with the operator</strong></span></div><div><Phone /><span><small>Phone</small><strong>{site.displayPhone}</strong></span></div></div><p className="placeholder-note">{site.note}</p></aside><ContactForm /></section></>; }
