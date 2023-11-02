import Link from "next/link";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IssTracker from "../components/IssTracker";
import Presentation from "../components/Presentation";
import Socials from "../components/Socials";
import { isMaintenanceMode } from "../utils/utils";
import MaintenancePage from "@/app/maintenance/page";

export default function Home() {
  if (isMaintenanceMode()) {
    return <MaintenancePage />;
  }

  const fakeLinks = {
    Facebook: "http://www.fakefacebook.com",
    Twitter: "http://www.faketwitter.com",
    Instagram: "http://www.fakeinstagram.com",
    LinkedIn: "http://www.fakelinkedin.com",
    YouTube: "http://www.fakeyoutube.com",
  };

  return (
    <main className="mx-auto w-max-[800px]">
      <Link href="/maintenance">This will send you to Maintenance page</Link>
      <Header />
      <div className="flex flex-col md:flex-row">
        <Presentation />
        <IssTracker />
      </div>
      <AboutMe />
      <Socials links={fakeLinks} />
      <Footer />
    </main>
  );
}
