import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "@/components/motion-system";
export const metadata: Metadata = { title: { default: "Erin Kim | Business Intelligence & Analytics", template: "%s | Erin Kim" }, description: "Erin Kim's portfolio of business intelligence, data analytics, dashboard, and marketing analytics work.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><MotionSystem/>{children}</body></html>; }
