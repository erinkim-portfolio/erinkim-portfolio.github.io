import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "@/components/motion-system";
import { InteractionTracking } from "@/components/interaction-tracking";
export const metadata: Metadata = { title: { default: "Erin Kim | Business Intelligence & Analytics", template: "%s | Erin Kim" }, description: "Erin Kim's portfolio of business intelligence, data analytics, dashboard, and marketing analytics work.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLCM1KNKZF"/><script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZLCM1KNKZF');`}}/></head><body><MotionSystem/><InteractionTracking/>{children}</body></html>; }
