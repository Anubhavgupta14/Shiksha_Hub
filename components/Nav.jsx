
import Navbar from "../navbar/Navbar";
// import styles from "../styles/Home.module.css";
import { Rubik } from "next/font/google";
import "@/styles/Home.module.css"
import { useRef } from 'react';
// import { AiFillMail } from 'react-icons/ai'
// import PlainButton from '../button/PlainButton'

// import About from "../About/about";
import Faqs from "../Faq/Faq";
import Footer from "../Footer/footer";
// import Cards from "../card/card";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const rubik = Rubik({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin", "cyrillic"],
    display: "swap",
  });

const page = ({authtoken}) => {
  

  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar authtoken={authtoken} />
      <div className={styles.sidenavcontainer}>
        {/* <Navbar/> */}
      <div className={styles.navupper}>
        <div className={styles.navmenu}>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Dashboard</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Approval Application</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Join/Create a meet</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Complaints/Issue</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Important Links</p>
          </a>
        </div>
      </div>
      <div className={styles.navfooter}>
          <a className={styles.footer}>
            <p className={rubik.className}>SignOut</p>
          </a>
      </div>
      {/* <Footer/> */}
    </div>
      <Footer />
    </div>
  );
};

export default page;
