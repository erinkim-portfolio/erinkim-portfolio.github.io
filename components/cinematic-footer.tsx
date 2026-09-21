import { ArrowUpRight } from "lucide-react";
import { BuildCredit } from "@/components/build-credit";

const resume="https://drive.google.com/file/d/1217wGnPp_2ZPg1xSuei8SWV_cGzKsZ8V/view?usp=sharing";

export function CinematicFooter({ location }: { location: "work_footer" | "project_footer" }){return <><footer className="compact-footer"><div className="compact-footer-grid"/><div className="compact-footer-top"><a href="mailto:eokim002@gmail.com" data-ga-event="email_click" data-ga-location={location}>EOKIM002@GMAIL.COM <ArrowUpRight size={19}/></a></div><div className="compact-footer-bottom"><span>GEORGIA / REMOTE</span><div><a href="https://www.linkedin.com/in/eokim002/" target="_blank" rel="noreferrer" data-ga-event="linkedin_click" data-ga-location={location}>LINKEDIN</a><a href={resume} target="_blank" rel="noreferrer" data-ga-event="resume_click" data-ga-location={location}>RESUME</a></div></div></footer><BuildCredit/></>}
