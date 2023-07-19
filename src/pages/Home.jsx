import { useEffect, useState } from "react";
import {
  NewsHouses,
  TrustSection,
  GroupingSection,
  HotOffers,
  
} from "../components";
import service from "../services/base.service";
import AOS from "aos";
import "aos/dist/aos.css";
// import Hero from "../components/Hero/Hero";
import BitchCards from "../components/BitchCards/BitchCards";
// import jungleCards from '../components/jungleCards/jungleCards'
import WoodSection from "../components/Wood/WoodSection";
import Hero from "../components/Hero/Hero";
import Gradient from "../components/GradientSection/Gradient";
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
      {/* <HeroSection heroImage={heroImage} /> */}
      <Hero/>
      <NewsHouses />
      <TrustSection />
      <GroupingSection />
      <WoodSection/>
      <BitchCards />
      <HotOffers/>
      <Gradient bg={'bg-jungle'} title={'خرید ویلا های جنگلی'}/>

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
