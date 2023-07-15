import { useEffect, useState } from "react";
import { HeroSection, NewsHouses ,TrustSection,GroupingSection } from "../components";
import service from "../services/base.service";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <NewsHouses />
      <TrustSection/>
      <GroupingSection/>
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
