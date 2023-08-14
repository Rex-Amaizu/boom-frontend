import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMedia } from "../../hooks/useResponsive";
import styles from "../../styles/Navbar.module.css";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";

const iconStyle = { cursor: "pointer", width: "50px", height: "50px" };

function NavBar({ open }) {
  const [navbar, setNavbar] = useState(false);
  const mobileDevice = useMedia("(max-width: 600px)");

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.body}>
          <div className={styles.hamburgerDiv}>
            <Link href="/">
              <Image src={LogoImg} alt="logo" />
            </Link>
            <div className={styles.hamburger} onClick={toggleNavbar}>
              <GiHamburgerMenu style={iconStyle} />
            </div>
          </div>
          {mobileDevice && !navbar ? null : (
            <div className={styles.linksDiv}>
              <ul>
                <li>
                  <Link href="">
                    <b>Home</b>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <b>About Us</b>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <b>How It Works</b>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <b>Investment Plan</b>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <b>FAQ</b>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <b>Contact</b>
                  </Link>
                </li>
              </ul>
              <button onClick={open}>
                <b>Sign up/Log in</b>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
