"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, UserRound } from "lucide-react";
import { SiteHeader } from "@/components/site-shell";
import { BuildCredit } from "@/components/build-credit";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText("eokim002@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return <main>
    <SiteHeader hideEmailLink/>
    <section className="contact-page wrap">
      <div className="contact-intro">
        <p className="section-index">CONTACT / SAY HELLO</p>
        <h1>Let’s make the numbers mean something.</h1>
        <p>I’m available now for business intelligence, data analytics, and marketing analytics opportunities in Georgia or remotely.</p>
      </div>
      <div className="contact-panel">
        <div className="contact-status"><span><i/> AVAILABLE NOW</span><b>GEORGIA / REMOTE</b></div>
        <small>BEST WAY TO REACH ME</small>
        <a href="mailto:eokim002@gmail.com" className="email-big" data-ga-event="email_click" data-ga-location="contact_panel">eokim002@gmail.com <ArrowUpRight/></a>
        <button onClick={copy} className="copy-button">{copied ? <><Check size={16}/> Copied!</> : <><Copy size={16}/> Copy email</>}</button>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/eokim002/" target="_blank" rel="noreferrer" data-ga-event="linkedin_click" data-ga-location="contact_panel"><UserRound/><span>LinkedIn<small>Connect professionally</small></span><ArrowUpRight/></a>
          <a href="https://drive.google.com/file/d/1217wGnPp_2ZPg1xSuei8SWV_cGzKsZ8V/view?usp=sharing" target="_blank" rel="noreferrer" data-ga-event="resume_click" data-ga-location="contact_panel"><FileText/><span>Resume<small>View experience &amp; skills</small></span><ArrowUpRight/></a>
        </div>
      </div>
    </section>
    <BuildCredit/>
  </main>;
}
