"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

export function InteractionTracking() {
  useEffect(() => {
    const trackLink = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[data-ga-event][data-ga-location]");
      if (!link) return;

      trackEvent(link.dataset.gaEvent!, {
        link_location: link.dataset.gaLocation!,
      });
    };

    document.addEventListener("click", trackLink);
    return () => document.removeEventListener("click", trackLink);
  }, []);

  return null;
}
