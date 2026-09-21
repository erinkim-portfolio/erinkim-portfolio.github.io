"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X } from "lucide-react";

export function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <>
    <button className="lightbox-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Open larger view of ${alt}`}>
      <img src={src} alt={alt}/>
      <span><Maximize2 size={17}/> View larger</span>
    </button>
    {open && createPortal(
      <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
        <button className="lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close image viewer"><X size={24}/></button>
        <img src={src} alt={alt} onClick={event => event.stopPropagation()}/>
      </div>,
      document.body
    )}
  </>;
}
