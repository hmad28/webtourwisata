import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import type { TourPackage } from "@/data/tours";

export function TourCard({ tour }: { tour: TourPackage }) {
  return <article className="tour-card">
    <div className="card-media"><Image src={tour.image} alt={`${tour.title} scenery`} fill sizes="(max-width: 760px) 92vw, 32vw" />{tour.badge && <span className="badge">{tour.badge}</span>}</div>
    <div className="tour-copy">
      <h3>{tour.title}</h3>
      <div className="tour-meta"><span><Clock size={15} />{tour.duration}</span><span><MapPin size={15} />{tour.location}</span></div>
      <p>{tour.shortDescription}</p>
      <div className="tour-bottom"><div><small>From</small><strong>{tour.startingPrice ? `IDR ${(tour.startingPrice / 1000).toLocaleString("id-ID")}K` : "Ask us"}</strong><span>/pax</span></div><Link href={`/tour-packages/${tour.slug}`} className="button orange small">View Details</Link></div>
    </div>
  </article>;
}
