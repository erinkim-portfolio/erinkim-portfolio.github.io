import { ArrowUpRight } from "lucide-react";
import { BuildCredit } from "@/components/build-credit";

const resume="https://drive.google.com/file/d/1217wGnPp_2ZPg1xSuei8SWV_cGzKsZ8V/view?usp=sharing";

export function CinematicFooter(){return <><footer className="compact-footer"><div className="compact-footer-grid"/><div className="compact-footer-top"><a href="mailto:eokim002@gmail.com">EOKIM002@GMAIL.COM <ArrowUpRight size={19}/></a></div><div className="compact-footer-bottom"><span>GEORGIA / REMOTE</span><div><a href="https://www.linkedin.com/in/eokim002/" target="_blank" rel="noreferrer">LINKEDIN</a><a href={resume} target="_blank" rel="noreferrer">RESUME</a></div></div></footer><BuildCredit/></>}
