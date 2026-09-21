import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CinematicFooter } from "@/components/cinematic-footer";
import { ImageLightbox } from "@/components/image-lightbox";
import { SiteHeader } from "@/components/site-shell";

const projects = {
  "pe-license-coverage-dashboard": {
    index:"01", category:"DASHBOARDS", title:"PE License Coverage Dashboard", subtitle:"Turning professional engineering license records into a clear view of renewal risk and geographic coverage.", tools:["Power BI","Data Modeling","Data Cleaning","Dashboard Design","Data Visualization"],
    brief:[{label:"ROLE",value:"Data Analyst & Dashboard Designer"},{label:"ORGANIZATION",value:"Carroll Daniel"},{label:"FOCUS",value:"License compliance and geographic coverage"},{label:"DATA",value:"Professional engineering license records"},{label:"DELIVERABLE",value:"Interactive Power BI dashboard"}],
    challenge:"Hundreds of professional engineering license records were spread across multiple states. Spreadsheet-based tracking made it difficult to quickly identify expired licenses, upcoming renewals, unmapped records, and states where coverage was missing.",
    approach:["Cleaned and organized the license data into a consistent reporting structure for analysis.","Built interactive filters for employee, state, certification, and license status, supported by KPI cards for active, expired, expiring, and unmapped licenses.","Created an unmapped-license breakdown, dynamic narrative insights, tooltips, and drill-through paths so users could move from a high-level coverage view into individual records."],
    outcome:"Consolidated hundreds of records into one reporting tool, improved visibility into renewal status and geographic coverage, and made coverage gaps and expiring licenses easier to identify.",
    takeaway:"Operational dashboards need to direct attention toward action. Status counts become more useful when users can identify which records need attention, understand where coverage is missing, and move directly into the supporting detail.",
    heroImage:"/images/pe-license-coverage-dashboard.png",
    heroAlt:"Anonymized Power BI dashboard showing synthetic professional license coverage data",
    confidentiality:"Employee identifiers, certification details, states, dates, totals, and map data have been changed or obscured to protect company confidentiality. The visual preserves the original reporting structure and functionality."
  },
  "digital-marketing-dashboard": {
    index:"02", category:"DASHBOARDS", title:"Digital Marketing Performance Hub", subtitle:"Preserving historical performance while marketing reporting moved between platforms.", tools:["Power BI","SharePoint","Data Modeling","Marketing Analytics","Reporting Automation"],
    brief:[{label:"ROLE",value:"Marketing Analyst & Dashboard Designer"},{label:"ORGANIZATION",value:"Carroll Daniel"},{label:"FOCUS",value:"Cross-platform marketing performance"},{label:"DATA",value:"Sprout Social, HubSpot, and website exports"},{label:"DELIVERABLE",value:"Power BI reporting hub"}],
    challenge:"Historical website and social media performance lived across Sprout Social, HubSpot, and spreadsheet-based reporting processes. The platform transition created a risk that earlier performance data would become difficult to compare or use.",
    approach:["Exported historical reporting data from Sprout Social and HubSpot, then organized the source files in SharePoint.","Connected SharePoint directly to Power BI and transformed the data into a consistent reporting structure.","Built an interactive dashboard for quarterly social media audience, engagement, website traffic, top pages, key insights, and follow-up actions."],
    outcome:"Preserved historical marketing performance through the platform transition, reduced recurring spreadsheet work, and established a reporting framework later adapted for other Carroll Daniel entities.",
    takeaway:"Reporting continuity matters during a platform change. Building the dashboard required connecting older and newer sources without losing the historical context the marketing team needed to interpret current performance.",
    heroImage:"/images/digital-marketing-performance-dashboard.png",
    heroAlt:"Anonymized Power BI dashboard showing synthetic social media and website performance data",
    confidentiality:"Company name, reporting dates, figures, and narrative insights have been changed to protect company confidentiality. The visual preserves the original reporting structure and functionality."
  },
  "max-verstappen-performance-analysis": {
    index:"04", category:"PERSONAL EXPLORATIONS", title:"Max Verstappen Performance Analysis", subtitle:"Exploring Formula 1 performance trends through my first Power BI dashboard.", tools:["Power BI","Data Analysis","Data Visualization","Dashboard Design","Sports Analytics","Data Storytelling"],
    brief:[{label:"ROLE",value:"Power BI Analyst"},{label:"ORGANIZATION",value:"Personal Project"},{label:"FOCUS",value:"Season and teammate performance"},{label:"DATA",value:"Historical Formula 1 race statistics"},{label:"DELIVERABLE",value:"Interactive Power BI dashboard"}],
    challenge:"As my first Power BI project, the goal was to learn the platform while turning historical Formula 1 statistics into a clear performance story. The dashboard needed to explain Verstappen’s progression and competitive advantage through meaningful comparisons instead of disconnected charts.",
    approach:["Imported and organized historical Formula 1 race data for season-level analysis.","Built KPI cards and visualizations for wins, points, average finish position, and share of team points.","Compared Verstappen with leading competitors and teammate Sergio Pérez, then added narrative insights to explain performance gaps across seasons."],
    outcome:"Created an interactive sports analytics dashboard that established my foundation in Power BI, trend analysis, dashboard design, and data storytelling.",
    takeaway:"This project showed me how the framing of a comparison shapes the insight. Season totals, teammate gaps, and share of team points each reveal a different part of the same performance story.",
    heroImage:"/images/max-verstappen-performance-dashboard.png",
    heroAlt:"Power BI dashboard analyzing Max Verstappen season and teammate performance",
    organization:"PERSONAL PROJECT",
    contain:true
  },
  "asana-marketing-operations": {
    index:"03", category:"SYSTEMS & OPERATIONS", title:"Marketing Operations System", subtitle:"Building a clearer operating system for marketing work in Asana.", tools:["Asana","Workflow Design","Process Improvement","Automation Rules"],
    brief:[{label:"ROLE",value:"Marketing Operations Designer"},{label:"ORGANIZATION",value:"Carroll Daniel"},{label:"FOCUS",value:"Workflow visibility and automation"},{label:"DATA",value:"Campaigns, events, pursuits, and team initiatives"},{label:"DELIVERABLE",value:"Connected Asana operations system"}],
    challenge:"Marketing initiatives were spread across separate projects and tracking methods, limiting visibility into priorities, workload, ownership, and current status.",
    approach:["Organized campaigns, events, pursuits, awards, rankings, resources, and team initiatives into a connected portfolio structure.","Created reusable project templates, custom fields, and reporting views to make work easier to categorize and monitor.","Configured workflow rules, including overdue-task escalation, to reduce repetitive follow-up and help the team surface work that needed attention."],
    outcome:"Centralized marketing project tracking, improved visibility across initiatives, and created a reusable framework that could support future team growth with less manual follow-up.",
    takeaway:"A project-management platform becomes valuable when its structure reflects how the team works. Clear naming, shared fields, useful views, and targeted automation turned separate projects into a more consistent marketing operations system.",
    heroImage:"/images/asana-marketing-board.png",
    heroAlt:"Anonymized Asana content workflow board from the Carroll Daniel marketing portfolio",
    confidentiality:"Names, task details, and organizational information have been changed to protect company confidentiality. The image preserves the original Asana workflow structure and functionality."
  },
  "quality-content-series": {
    index:"05", category:"MARKETING & CONTENT", title:"Quality Is a Mindset", subtitle:"Translating construction quality practices into clear, useful industry content.", tools:["Technical Writing","SEO","Research","Content Strategy"],
    brief:[{label:"ROLE",value:"Technical Content Writer"},{label:"ORGANIZATION",value:"Carroll Daniel"},{label:"FOCUS",value:"Construction quality education"},{label:"SOURCES",value:"Industry research and subject expertise"},{label:"DELIVERABLE",value:"Published long-form article"}],
    challenge:"Construction quality involves technical processes, changing field conditions, and operational risks. The article needed to explain those ideas accurately while remaining useful to readers beyond the Quality team.",
    approach:["Researched how weather can affect jobsite access, materials, schedules, drainage, soil conditions, and major construction activities.","Collaborated with quality leadership to confirm technical accuracy and connect the topic to practical field decisions.","Reworked the draft so it would be easy to read online. I added clear headings, kept SEO in mind, and organized the article around preparing for severe weather and responding afterward."],
    outcome:"The article was published on Carroll Daniel’s website and gave readers a practical explanation of how weather can affect construction work, including schedules, materials, site conditions, and communication after a delay.",
    takeaway:"I learned that getting the facts right was only part of the job. I also had to understand the Quality team’s perspective well enough to explain the topic clearly and show why it mattered on a real jobsite.",
    heroImage:"/images/quality-weather-planning.png", heroAlt:"Steel erection underway on a Carroll Daniel construction site",
    articleUrl:"https://www.carrolldaniel.com/planning-for-weather/"
  },
  "marketing-analytics-reporting-suite": {
    index:"06", category:"ANALYTICS & BI", title:"Marketing Analytics Reporting Suite", subtitle:"A collection of Power BI dashboards built around different marketing questions and reporting needs.", tools:["Power BI","Marketing Analytics","KPI Reporting","Dashboard Design"],
    brief:[{label:"ROLE",value:"Marketing Analyst & Dashboard Designer"},{label:"ORGANIZATION",value:"Carroll Daniel"},{label:"FOCUS",value:"Campaign and executive marketing reporting"},{label:"DATA",value:"Social, email, website, campaign, and project exports"},{label:"DELIVERABLE",value:"Reusable Power BI dashboard collection"}],
    challenge:"Marketing reporting covered several audiences and business questions. Campaign results, subsidiary performance, quarterly content, events, pursuits, and awards could not all be explained through the same dashboard view.",
    approach:["Created consistent dashboard layouts and KPI structures so the collection felt connected while each report remained focused on its own purpose.","Combined available exports and sample data from social media, email, website, campaign, and project-management sources.","Built separate views for cross-channel campaigns, Market Report performance, subsidiary reporting, and a high-level look at marketing department activity."],
    outcome:"The finished collection provided a reusable reporting framework for several marketing use cases and showed how the same core design system could support both campaign-level analysis and executive reporting.",
    takeaway:"This project showed me that a dashboard should start with the question it needs to answer. The reports shared a common structure, but the measures and level of detail changed depending on who would use the information and what they needed to understand.",
    heroImage:"/images/marketing-analytics-reporting-suite.png",
    heroAlt:"Power BI dashboard showing sample cross-channel campaign performance data",
    confidentiality:"Dashboard names, dates, and figures have been changed for confidentiality. The visuals preserve the original reporting structure and functionality.",
    gallery:[
      {src:"/images/market-report-dashboard.png",alt:"Power BI dashboard showing sample quarterly Market Report performance",label:"MARKET REPORT PERFORMANCE"},
      {src:"/images/marketing-department-dashboard.png",alt:"Power BI dashboard showing sample marketing department activity",label:"MARKETING DEPARTMENT OVERVIEW"}
    ]
  }
} as const;

export function generateStaticParams(){return Object.keys(projects).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects[slug as keyof typeof projects];return p?{title:p.title}:{title:"Project"}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects[slug as keyof typeof projects];if(!p)notFound();return <main><SiteHeader/><article className="case">
  <header className="case-hero wrap"><Link href="/work" className="back-link"><ArrowLeft size={15}/> All work</Link><div className="case-title"><div><p>{p.index} / {p.category}</p><h1>{p.title}</h1><span>{p.subtitle}</span></div><div className="case-tools">{p.tools.map(t=><span key={t}>{t}</span>)}</div></div>{"confidentiality" in p&&<p className="confidentiality-note">{p.confidentiality}</p>}</header>
  <section className="project-brief wrap" aria-label="Project summary">{p.brief.map(item=><div key={item.label}><small>{item.label}</small><p>{item.value}</p></div>)}</section>
  <figure className={`case-image wrap ${"confidentiality" in p||"contain" in p?"contain":""}`}><ImageLightbox src={p.heroImage} alt={p.heroAlt}/><figcaption><span>{"organization" in p?p.organization:"CARROLL DANIEL"}</span><span>{p.category} / {p.index}</span></figcaption></figure>
  <section className="case-body wrap"><div className="case-block"><p className="section-index">THE QUESTION</p><h2>{p.challenge}</h2></div><div className="case-block approach"><p className="section-index">THE APPROACH</p><div>{p.approach.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></div>{"gallery" in p&&<div className="project-gallery">{p.gallery.map(image=><figure key={image.src}><ImageLightbox src={image.src} alt={image.alt}/><figcaption>{image.label}</figcaption></figure>)}</div>}<div className="case-block result-block"><p className="section-index">THE RESULT</p><h2>{p.outcome}</h2></div><div className="takeaway"><p className="section-index">WHAT IT TAUGHT ME</p><blockquote>{p.takeaway}</blockquote></div>{"articleUrl" in p&&<a className="published-link" href={p.articleUrl} target="_blank" rel="noreferrer">Read the published article <ArrowUpRight size={18}/></a>}</section>
  </article><CinematicFooter/></main>}
