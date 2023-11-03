import React from "react";
import Link from "next/link";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IssTracker from "../components/IssTracker";
import Presentation from "../components/Presentation";
import Socials from "../components/Socials";
import { isMaintenanceMode } from "../utils/utils";
import MaintenancePage from "./maintenance/page";

export default function Home() {
  if (isMaintenanceMode()) {
    return <MaintenancePage />;
  }

  return (
    <main className="h-screen pt-5">
      <Header />
      <div className="flex flex-col md:flex-row gap-5 py-[40px]">
        <Presentation />
        <IssTracker />
      </div>
      <AboutMe />
      <Socials />
      <Footer />
      <Link href="/maintenance">This will send you to Maintenance page</Link>
    </main>
  );
}
