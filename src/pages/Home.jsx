import { useEffect, useState } from "react";
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
import service from "../services/base.service";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Hero />
      <NewsHouses />
      <TrustSection />
      <GroupingSection />
      <WoodSection />
      <BitchCards />
      <HotOffers />
      <Gradient bg={"bg-jungle"} title={"خرید ویلا های جنگلی"} />
      <PopularSpots />
      <Representatives users={users} />
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
