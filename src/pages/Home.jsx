import { useEffect, useState } from "react";
import {HeroSection} from "../components";
import service from '../services/base.service'
const Home = () => {
  const [heroImage, setHeroImage] = useState(``)
  useEffect(() => {
    service.get(`/real/HomePage/`,(res) => setHeroImage(res.data))
  }, [])

  console.log(heroImage[0]?.homePage_pic);
  
  return <>
    <HeroSection heroImage={heroImage}/>

    
  </>;
};

export default Home;
