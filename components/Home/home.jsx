
import Navbar from "../navbar/Navbar";
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


const page = ({authtoken}) => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar authtoken={authtoken} />
      <div className="drop-mar" >
        <div className="drop-cont">
          <div className="drop-left">
            <div className="drop-inner">
              <div className="drop-p">Shiksha <span style={{ color: "#1081fc" }}>HUB</span></div>
              <div className="drop-p2"> Collaborating Platform for Educational <span style={{ color: "#1081fc" }}>Experts</span></div>
              {/* <div className="home_free">
                <div className="home_btn_div"><Link href="/ccm"><button className="home_btn">
                  Free Trail
                </button></Link></div>
                <div className="arrow_home"><ArrowForwardIcon className="arrow_home"/></div>
              </div> */}
              <div style={{ height: "372px" }}>
                <Image
                className="img_home"
                  src="/image.svg"
                  width={500}
                  height={350}
                  alt="Picture of the author"
                />
              </div>

              <div className="drop-info">
                Design Curriculum for AICTE with Collaborations.
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="home_data">
        <div className="home_datas">
          <h2>1M+</h2>
          <p>members</p>
        </div>

        <div className="home_datas">
          <h2>150+</h2>
          <p>universities</p>
        </div>

        <div className="home_datas">
          <h2>50+</h2>
          <p>curriculum designed</p>
        </div>
      </div>
      <div id='faq' ref={aboutRef} className="home_faq"><Faqs /></div>
      <Footer />
    </div>
  );
};

export default page;
