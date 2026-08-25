"use client";
import { useState } from "react";
import { TourCard } from "./tour-card";
import { tours } from "@/data/tours";

const filters = ["All", ...Array.from(new Set(tours.map(t => t.category)))];
export function TourCatalog() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? tours : tours.filter(t => t.category === active);
  return <><div className="filter-row" aria-label="Filter tours">{filters.map(f => <button className={f === active ? "active" : ""} onClick={() => setActive(f)} key={f}>{f}</button>)}</div><div className="tour-grid">{visible.map(t => <TourCard key={t.slug} tour={t} />)}</div></>;
}
