import About from "@/components/About";
import Doctor from "@/components/Doctor";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import LocalMaps from "@/components/LocalMaps";
import Nav from "@/components/Nav";
import Pelayanan from "@/components/Pelayanan";
import Topnav from "@/components/Topnav";
import Whay from "@/components/Whay";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Topnav />
        <Nav />
        <Hero />
        <Whay />
        <About />
        <Doctor />
        <Pelayanan />
        <LocalMaps />
        <Footer />
      </div>
    </main>
  );
}
