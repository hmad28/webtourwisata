import Image from "next/image";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return <section className="page-hero shell"><Image src={image} alt="Lombok landscape" fill priority sizes="100vw" /><div className="hero-shade" /><div className="page-hero-copy"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
