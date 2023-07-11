
import { useState } from "react";
import LgSection from "./LgSection";
import MobileSection from "./MobileSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
  <LgSection/>
<MobileSection isOpen={isOpen} setIsOpen={setIsOpen}/>
 
    </>
  );
};

export default Navbar;
