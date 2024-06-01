
import { useState } from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import { sectionEnum } from "../common/enum";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [currSec, setCurrSec] = useState(sectionEnum.HERO);

  return (
    <section className="relative text-gray-600 bg-white work-sans w-screen min-h-screen h-fit">
      <Header currSec={currSec} setCurrSec={setCurrSec} />
      <Hero />
      <About />
      <Footer />
    </section>
  );
};

export default Home;