"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { EkLogo } from "@/components/ek-logo";
import { BuildCredit } from "@/components/build-credit";

const projects=[
 {index:"01",slug:"pe-license-coverage-dashboard",title:"License Risk & Coverage Intelligence",kind:"Power BI dashboard",note:"An interactive view of license status, renewal timing, and geographic coverage.",impact:"Consolidated hundreds of records so expired, expiring, and unmapped licenses are easier to identify.",metrics:["POWER BI","DATA CLEANING","DATA MODELING"],tone:"blue",image:"/images/pe-license-coverage-dashboard.png",alt:"Power BI dashboard showing randomized professional engineering license data"},
 {index:"02",slug:"digital-marketing-dashboard",title:"Cross-Platform Marketing Performance Hub",kind:"Power BI dashboard",note:"A central reporting view for website and social performance across a platform transition.",impact:"Preserved historical reporting during the move from Sprout Social to HubSpot and reduced recurring spreadsheet work.",metrics:["POWER BI","SHAREPOINT","REPORTING"],tone:"coffee",image:"/images/digital-marketing-performance-dashboard.png",alt:"Power BI dashboard showing randomized social media and website performance data"},
 {index:"03",slug:"asana-marketing-operations",title:"Marketing Workflow & Visibility System",kind:"Business system",note:"An Asana operating system connecting marketing priorities, workflows, and reporting.",impact:"Centralized six marketing workstreams with reusable templates, shared fields, reporting views, and targeted automation.",metrics:["ASANA","AUTOMATION","PROCESS DESIGN"],tone:"blue",image:"/images/asana-marketing-board.png",alt:"Asana marketing project view with custom fields and status tracking"},
];

export function CinematicHome(){
 const root=useRef<HTMLElement>(null);
 const [active,setActive]=useState(0);
 useEffect(()=>{const el=root.current;if(!el)return;const move=(e:PointerEvent)=>{el.style.setProperty("--mx",String((e.clientX/window.innerWidth-.5)*2));el.style.setProperty("--my",String((e.clientY/window.innerHeight-.5)*2))};window.addEventListener("pointermove",move);return()=>window.removeEventListener("pointermove",move)},[]);
 return <main className="cinematic" ref={root}>
  <header className="cinematic-nav">
   <Link href="/" className="cine-brand"><EkLogo className="brand-logo"/><span>ERIN KIM<small>BUSINESS INTELLIGENCE &amp; ANALYTICS</small></span></Link>
   <nav><a href="#work">Work</a><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
  </header>
  <aside className="section-rail" aria-label="Page sections"><a href="#top" aria-label="Go to Hero section">01</a><i/><a href="#identity" aria-label="Go to Tech Stack section">02</a><a href="#work" aria-label="Go to Featured Projects section">03</a><a href="#contact" aria-label="Go to Contact section">04</a></aside>

  <section className="cine-hero" id="top">
   <div className="hero-meta right"><span>AVAILABILITY</span><b>OPEN NOW / GEORGIA + REMOTE</b></div>
   <div className="giant-name" aria-label="Erin Kim"><span>ERIN</span><span>KIM</span></div>
   <div className="data-core" aria-label="Interactive analytics identity graphic">
    <div className="core-ring ring-a"/><div className="core-ring ring-b"/><div className="core-ring ring-c"/>
    <div className="core-center"><EkLogo className="core-logo"/><small aria-label="Data, story, action"><span>DATA /</span><span>STORY /</span><span>ACTION</span></small></div>
    <div className="core-stat stat-a"><small>FOCUS</small><b>BI + UX</b></div>
    <div className="core-stat stat-b"><small>STATUS</small><b>CURIOUS</b></div>
    <div className="core-bars">{[38,55,47,69,83,74,96].map((v,i)=><i key={i} style={{height:v+"%"}}/>)}</div>
   </div>
   <div className="hero-pitch">
    <small>DATA ANALYTICS INTERN</small>
    <p className="hero-statement">Building dashboards and reporting systems that turn scattered data into clear business decisions.</p>
    <div className="hero-primary-actions" aria-label="Professional links">
     <a href="https://drive.google.com/file/d/1217wGnPp_2ZPg1xSuei8SWV_cGzKsZ8V/view?usp=sharing" target="_blank" rel="noreferrer">VIEW RESUME <ArrowUpRight size={14}/></a>
     <a href="https://www.linkedin.com/in/eokim002/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={14}/></a>
    </div>
   </div>
   <a className="scroll-cue" href="#identity"><span>SCROLL TO EXPLORE</span><ArrowDown/></a>
  </section>

  <section className="identity-section" id="identity">
   <div className="stack-intro"><div><div className="stack-section-label">02 / TECH STACK</div><p className="identity-kicker">CORE TOOLKIT / BUILT FOR BUSINESS QUESTIONS</p><h2>Tools behind the work.</h2></div><p>My toolkit connects reporting, data preparation, and workflow design so teams can move from scattered inputs to useful decisions.</p></div>
   <div className="stack-grid">
    <article><span>01</span><small>REPORTING LOGIC</small><h3>Excel formulas</h3><h3>KPI logic</h3><p>Calculations and reporting logic built around the question the business needs answered.</p></article>
    <article><span>02</span><small>DATA VISUALIZATION</small><h3>Power BI</h3><h3>DataRails</h3><h3>Dashboard UX</h3><p>Interactive reporting experiences that make trends, risks, and next steps easier to see.</p></article>
    <article><span>03</span><small>DATA ARCHITECTURE &amp; TOOLS</small><h3>SharePoint</h3><h3>Excel</h3><h3>Data modeling</h3><h3>Asana</h3><p>Connected sources, reusable structures, and workflows designed for reliable reporting.</p></article>
   </div>
  </section>

  <section className="project-stage" id="work">
   <div className="stage-head"><div><span>SELECTED WORK / 03</span><h2>Featured work.</h2></div><div className="stage-counter"><b>0{active+1}</b><span>/ 03</span></div></div>
   <div className="project-selector" role="list">
    {projects.map((p,i)=><Link href={"/projects/"+p.slug} className={"mission "+p.tone+(active===i?" active":"")} onPointerEnter={()=>setActive(i)} onFocus={()=>setActive(i)} key={p.slug} role="listitem">
     <div className="mission-top"><span>{p.index}</span><small>{p.kind}</small><ArrowUpRight/></div>
     <div className="mission-display mission-photo"><img src={p.image} alt={p.alt}/><strong>{p.index}</strong></div>
     <h3>{p.title}</h3><p>{p.note}</p><div className="mission-impact"><small>BUSINESS IMPACT</small><p>{p.impact}</p></div><div className="mission-metrics">{p.metrics.map(m=><span key={m}>{m}</span>)}</div><div className="mission-action">VIEW CASE STUDY <ArrowRight size={14}/></div>
    </Link>)}
   </div>
   <Link href="/work" className="all-work">VIEW ALL WORK <ArrowRight/></Link>
  </section>

  <section className="cine-contact" id="contact">
   <div className="contact-grid"/><p>START A CONVERSATION / 04</p><h2>Have a question<br/>worth exploring?</h2><a href="mailto:eokim002@gmail.com">EOKIM002@GMAIL.COM <ArrowUpRight/></a>
   <div className="contact-bottom"><span>GEORGIA / REMOTE</span><div><a href="https://www.linkedin.com/in/eokim002/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://drive.google.com/file/d/1217wGnPp_2ZPg1xSuei8SWV_cGzKsZ8V/view?usp=sharing" target="_blank" rel="noreferrer">RESUME</a></div></div>
  </section>
  <BuildCredit/>
 </main>
}
