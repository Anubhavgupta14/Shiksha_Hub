import Navbar from "../navbar/Navbar";
import styles from "../../styles/Home.module.css";
// import "@/styles/Home.module.css"
import { Rubik } from "next/font/google";
import { useRef } from "react";
import { toast } from "react-toastify";
// import { AiFillMail } from 'react-icons/ai'
// import PlainButton from '../button/PlainButton'

// import About from "../About/about";
import Faqs from "../Faq/Faq";
import Footer from "../Footer/footer";
// import Cards from "../card/card";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const handlelogout = async () => {
  try {
    const response = await fetch("/api/users/signout/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // If the response status is not in the range 200-299, it's an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // The response is successful
    console.log("Logout successful");
    toast.success("Successfully Logged Out");
    router.push("/");
    window.location.reload();
    localStorage.removeItem("JWT");
  } catch (error) {
    console.error("Error during logout:", error);
    toast.error("Server Error");
  }
};

const page = ({ authtoken }) => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
        {/* <div className={styles.navfooter}>
          <a className={styles.footer} onClick={handlelogout}>
            <p className={rubik.className}>SignOut</p>
          </a>
      </div> */}
        {/* <Footer/> */}
      </div>
      <div className={styles.right}>
        <div className={styles.row}>
          <div className={styles.boox}>Universities/Institute Control</div>
          <div className={styles.boox}>Courses</div>
          <div className={styles.boox}>Curriculum Designers</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
