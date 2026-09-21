"use client";
import { useEffect } from "react";

export function MotionSystem(){
  useEffect(()=>{
    const root=document.documentElement;
    let frame=0;
    const update=()=>{root.style.setProperty("--page-progress",String(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)));frame=0};
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
    const move=(event:PointerEvent)=>{root.style.setProperty("--gx",`${event.clientX}px`);root.style.setProperty("--gy",`${event.clientY}px`);root.style.setProperty("--px",String(event.clientX/window.innerWidth-.5));root.style.setProperty("--py",String(event.clientY/window.innerHeight-.5))};
    const targets=document.querySelectorAll("main section, main article, .work-card, .case-block, .timeline-grid article");
    targets.forEach((node,index)=>{node.classList.add("motion-reveal");(node as HTMLElement).style.setProperty("--reveal-delay",`${Math.min(index%4,3)*70}ms`)});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("motion-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -7%"});
    targets.forEach(node=>observer.observe(node));
    update();window.addEventListener("scroll",scroll,{passive:true});window.addEventListener("pointermove",move,{passive:true});
    return()=>{observer.disconnect();window.removeEventListener("scroll",scroll);window.removeEventListener("pointermove",move);if(frame)cancelAnimationFrame(frame)};
  },[]);
  return <><div className="global-light" aria-hidden="true"/><div className="telemetry-progress" aria-hidden="true"><i/></div><div className="speed-traces" aria-hidden="true"><i/><i/><i/><i/></div></>;
}
