import { useEffect, useState } from "react";
import {
  HeroSection,
  NewsHouses,
  TrustSection,
  GroupingSection,
  jungleCards
} from "../components";
import service from "../services/base.service";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero/Hero";
import BitchCards from "../components/BitchCards/BitchCards";
const Home = () => {
  const [heroImage, setHeroImage] = useState(``);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    service.get(`/real/HomePage/`, (res) => setHeroImage(res.data));
  }, []);

  return (
    <>
      <HeroSection heroImage={heroImage} />
      {/* <Hero/> */}
      <NewsHouses />
      <TrustSection />
      <GroupingSection />
      <BitchCards />
      <BitchCards />

      {/* <jungleCards/> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
