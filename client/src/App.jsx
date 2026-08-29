import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import InfrastructureProblem from "./sections/InfrastructureProblem";
import Services from "./sections/Services";
import LinuxCore from "./sections/LinuxCore";
import Cloud from "./sections/Cloud";
import DevOps from "./sections/DevOps";
import Security from "./sections/Security";
import NOC from "./sections/NOC";
import BackupDR from "./sections/BackupDR";
import Industries from "./sections/Industries";
import WhiteLabel from "./sections/WhiteLabel";
import Process from "./sections/Process";
import Packages from "./sections/Packages";
import Assessment from "./sections/Assessment";
import TechEcosystem from "./sections/TechEcosystem";
import FutureVision from "./sections/FutureVision";
import Academy from "./sections/Academy";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <InfrastructureProblem />
        <Services />
        <LinuxCore />
        <Cloud />
        <DevOps />
        <Security />
        <NOC />
        <BackupDR />
        <Industries />
        <WhiteLabel />
        <Process />
        <Packages />
        <Assessment />
        <TechEcosystem />
        <FutureVision />
        <Academy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
