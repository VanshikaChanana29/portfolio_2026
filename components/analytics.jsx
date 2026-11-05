"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Any element with data-track="event_name" sends that event when clicked.
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest?.("[data-track]");
      if (el) track(el.dataset.track, el.dataset.trackLabel ? { label: el.dataset.trackLabel } : undefined);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
