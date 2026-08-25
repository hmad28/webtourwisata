import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() { return <a className="whatsapp-float" href={whatsappUrl("Hi Lombok Journey, I would like to plan a Lombok trip.")} target="_blank" aria-label="Chat on WhatsApp"><MessageCircle /> <span>Chat on WhatsApp</span></a>; }
