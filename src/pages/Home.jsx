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
    <div className="bg-main-green max-[280px]:mt-[100%]  max-[541px]:mt-[50%] max-[600px]:mt-[80%]  max-[941px]:mt-[30%]  lg:mt-[200px] ">adsccs</div>
    <div>assa</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
  </>;
};

export default Home;
