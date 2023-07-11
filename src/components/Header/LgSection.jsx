import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";
import { LogoSvg } from "../../assets/svg/svg";

const LgSection = () => {
  return (
    <>
      <nav className={`shadow-custom ${style.nav} z-50`}>
        <ul className={`${style.ulNav}`}>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              خانه
            </Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              درباره ما
            </Link>
          </li>
          <li className="lg:px-16">
            <Link to={"#"}>{LogoSvg}</Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              وبلاگ
            </Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LgSection;
