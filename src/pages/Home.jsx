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
import PopularSpots from "../components/PopularSpots/PopularSpots";
import Representatives from "../components/Representatives/Representatives";
import Weblog from "../components/Weblog/Weblog";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    service.get(`/real/usersinfo/`, (res) => setUsers(res.data));
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
      <PopularSpots/>
      <Representatives users={users}/>
      <Gradient bg={'bg-beach'} title={'خرید ویلا های ساحلی'} style={'mt-[150px]'}/>
      <Weblog/>
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
