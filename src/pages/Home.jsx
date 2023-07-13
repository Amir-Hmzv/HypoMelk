import { useEffect, useState } from "react";
import { HeroSection, NewsestHousesMain } from "../components";
import service from "../services/base.service";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/NewsestHouses/Card";
import WithSwiper from "../components/NewsestHouses/WithSwiper";
const Home = () => {
  const [heroImage, setHeroImage] = useState(``);
  const [cases, setCases] = useState({});
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    service.get(`/real/HomePage/`, (res) => setHeroImage(res.data));
  }, []);

  useEffect(() => {
    service.get(`/real/cases/`, (res) => setCases(res.data));
  }, []);

  return (
    <>
      <HeroSection heroImage={heroImage} />
      <NewsestHousesMain cases={cases} />
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
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
