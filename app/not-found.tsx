import Link from "next/link";
export default function NotFound() { return <section className="not-found shell"><span>404</span><h1>This path wandered off the map.</h1><p>Let’s take you back to the main route.</p><Link className="button orange" href="/">Return home</Link></section>; }
