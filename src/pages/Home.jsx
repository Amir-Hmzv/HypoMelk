import { useEffect } from "react";
import {
  NewsHouses,
  TrustSection,
  GroupingSection,
  HotOffers,
  BitchCards,
  Gradient,
  Hero,
  PopularSpots,
  Representatives,
  Weblog,
  WoodSection,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  
  return (
    <>
      <Hero />
      <NewsHouses />
      <TrustSection />
      <GroupingSection />
      <WoodSection />
      <BitchCards />
      <HotOffers />
      <Gradient bg={"bg-jungle"} title={"خرید ویلا های جنگلی"} />
      <PopularSpots />
      <Representatives  />
      <Gradient
        bg={"bg-beach"}
        title={"خرید ویلا های ساحلی"}
        style={"mt-[150px]"}
      />
      <Weblog />
    </>
  );
};
export default Home;
