"use client";
import { CalendarDays, MapPin, Send, Users } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export function TripEnquiry() {
  const [destination, setDestination] = useState("Gili Islands");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const send = () => window.open(whatsappUrl(`Hi Lombok Journey, I am interested in ${destination}. Travel date: ${date || "flexible"}. Travelers: ${travelers}. Please help me plan the trip.`), "_blank");
  return <div className="trip-enquiry" aria-label="Trip enquiry">
    <strong className="enquiry-title">Where do you want to go?</strong>
    <label><MapPin /><span><small>Where to?</small><select value={destination} onChange={e => setDestination(e.target.value)}><option>Gili Islands</option><option>Mount Rinjani</option><option>North Lombok</option><option>Pink Beach</option></select></span></label>
    <label><CalendarDays /><span><small>When?</small><input type="date" value={date} onChange={e => setDate(e.target.value)} /></span></label>
    <label><Users /><span><small>Travelers</small><select value={travelers} onChange={e => setTravelers(e.target.value)}>{[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}</select></span></label>
    <button onClick={send}>Send Enquiry <Send size={16} /></button>
  </div>;
}
