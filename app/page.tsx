import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, Car, Headphones, HeartHandshake, MapPin, MessageCircle, Send, ShieldCheck, Sparkles, Star, Users, Waves } from "lucide-react";
import { TripEnquiry } from "@/components/trip-enquiry";
import { TourCard } from "@/components/tour-card";
import { destinations } from "@/data/destinations";
import { images } from "@/data/site";
import { tours } from "@/data/tours";
import { whatsappUrl } from "@/lib/whatsapp";

const experiences = [
  ["Island Hopping", images.islands, Waves], ["Rinjani Trekking", images.mountain, MapPin], ["Snorkeling", images.snorkel, Waves],
  ["Waterfalls", images.waterfall, Sparkles], ["Sasak Culture", images.culture, Users], ["Private Transfer", images.transfer, Car],
] as const;

export default function Home() {
  return <>
    <section className="home-hero shell">
      <Image src={images.hero} alt="Dramatic Lombok coast and mountain landscape" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-copy"><span className="eyebrow">LOCAL LOMBOK TOUR OPERATOR</span><h1>Discover the Real<br />Beauty of Lombok</h1><p>From hidden beaches and majestic mountains to rich culture and warm local hospitality—experience Lombok with a local point of view.</p><div className="hero-actions"><Link href="/tour-packages" className="button orange"><Waves size={18} /> Explore Tour Packages</Link><a href={whatsappUrl("Hi Lombok Journey, I would like help planning a Lombok trip.")} className="button light" target="_blank"><MessageCircle size={18} /> Plan via WhatsApp</a></div></div>
      <TripEnquiry />
    </section>

    <section className="trust-strip"><div className="shell trust-grid">
      <div><Users /><span><strong>Local Experts</strong><small>Born and based in Lombok</small></span></div>
      <div><HeartHandshake /><span><strong>Private & Custom</strong><small>Tailored to your needs</small></span></div>
      <div><ShieldCheck /><span><strong>Trusted Guides</strong><small>Friendly local support</small></span></div>
      <div><Headphones /><span><strong>Helpful Support</strong><small>Here when you need us</small></span></div>
    </div></section>

    <section id="experiences" className="section shell"><h2 className="section-title">Popular Experiences</h2><div className="experience-grid">{experiences.map(([name, image, Icon]) => <article key={name} className="experience-card"><div><Image src={image} alt={name} fill sizes="180px" /></div><span className="experience-icon"><Icon /></span><h3>{name}</h3></article>)}</div></section>

    <section className="section shell"><h2 className="section-title">Most Loved Tour Packages</h2><p className="section-lede">Flexible starting points for your Lombok adventure. Final pricing and availability are confirmed directly.</p><div className="tour-grid">{tours.slice(0,3).map(tour => <TourCard tour={tour} key={tour.slug} />)}</div><div className="center-action"><Link href="/tour-packages" className="text-link">View all tour packages <ArrowRight size={18} /></Link></div></section>

    <section className="section shell"><h2 className="section-title">Explore Lombok</h2><div className="destination-mosaic">{destinations.slice(0,4).map((d, i) => <Link href={`/destinations/${d.slug}`} className={`destination-tile tile-${i + 1}`} key={d.slug}><Image src={d.image} alt={d.name} fill sizes="(max-width: 720px) 50vw, 25vw" /><div className="tile-shade" /><div><h3>{d.name}</h3><p>{d.tagline}</p></div></Link>)}</div></section>

    <section className="expert-section"><div className="shell expert-grid"><div className="expert-image"><Image src={images.guide} alt="Local Lombok guide placeholder portrait" fill sizes="50vw" /></div><div className="expert-copy"><span className="eyebrow teal">LOCAL KNOWLEDGE, PERSONAL CARE</span><h2>Your Local Lombok Expert</h2><p>We build trips around real conversations: where you want to go, how you like to travel, and what pace feels right. Local guides and drivers help make each day simpler and more meaningful.</p><p className="placeholder-note">Founder image and business story are placeholders pending verified client content.</p><div className="expert-points"><span><CalendarCheck /> Thoughtful planning</span><span><Star /> Personal service</span><span><BadgeCheck /> Local coordination</span><span><Users /> Community minded</span></div></div></div></section>

    <section className="section testimonials shell"><h2 className="section-title">Travel Stories</h2><p className="section-lede">Sample layout only — replace with verified client testimonials before launch.</p><div className="testimonial-grid">{[
      ["Sarah J.", "The itinerary felt easy and personal from the first message to the last transfer."],
      ["Lucas M.", "Our mountain days were well paced and the local support made a real difference."],
      ["Anna K.", "A warm introduction to the island with plenty of time to enjoy each stop."],
    ].map(([name, quote]) => <blockquote key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><footer>{name} <span>· placeholder</span></footer></blockquote>)}</div></section>

    <section className="final-cta shell"><div><MessageCircle /><span><h2>Your Lombok Adventure Starts Here</h2><p>Tell us what kind of trip you have in mind and we’ll help shape the details.</p></span></div><a className="button orange" href={whatsappUrl("Hi Lombok Journey, I would like to start planning my Lombok adventure.")} target="_blank">Chat on WhatsApp <Send size={17} /></a></section>
  </>;
}
