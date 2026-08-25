"use client";
import { Send } from "lucide-react";
import { FormEvent } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactForm() {
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const data = new FormData(e.currentTarget); const message = `Hi Lombok Journey,\nName: ${data.get("name")}\nContact: ${data.get("contact")}\nTravel date: ${data.get("date") || "Flexible"}\nTravelers: ${data.get("travelers")}\nInterested in: ${data.get("interest")}\nMessage: ${data.get("message")}`; window.open(whatsappUrl(message), "_blank"); }
  return <form className="contact-form" onSubmit={submit}><div className="field-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>WhatsApp or email<input name="contact" required placeholder="How can we reach you?" /></label></div><div className="field-row"><label>Travel date<input name="date" type="date" /></label><label>Number of travelers<input name="travelers" type="number" min="1" defaultValue="2" required /></label></div><label>Interested package or activity<select name="interest"><option>Custom Lombok trip</option><option>Island hopping</option><option>Rinjani trekking</option><option>Waterfalls</option><option>Private transfer</option></select></label><label>Tell us about your trip<textarea name="message" rows={5} placeholder="Dates, interests, accommodation area, or anything else that helps us plan." /></label><button className="button orange" type="submit">Continue on WhatsApp <Send size={17} /></button></form>;
}
