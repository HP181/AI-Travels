import Intro from "@/Components/Intro";
import Destinations from "@/Components/Destinations";
import Trips from "@/Components/Trips";
import Deals from "@/Components/Deals";
import About from "@/Components/About";
import Footer from "@/Components/Footer";

export default function HomePage() {
  return (
    <>
        <Intro />
        <Destinations />
        <Trips />
        <Deals />
        <About />
        <Footer />
    </>
  );
}
