
import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import $ from "jquery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";



// import '../styles/navbar.css'

const Navbar = ({ authtoken }) => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [drop_ham, setdrop_ham] = useState(false);


  const handleClick = () => {
    setClick(!click);
  };
  const handleClick2 = () => {
    setClick(!click2);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleClickdrop = () => {
    setdrop_ham(!drop_ham);
    setOpen(!open);
  };

  const excludedDivRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest('.body') &&
        !excludedDivRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  const open_menu = () => {
    event.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("scroll", changeColor);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className="body">
      <div className={color ? (open ? "navbar" : "navbar scrolled-navbar") : "navbar"} id="navbar">
        <div className="navbar-left normal">
          <div><Link href={"/"}>
            <h2 className="logo">The Design Engg</h2>
          </Link>
          </div>

          <div className="navrel pos-rel">
            <Link href={"/"}>
              <div className="nav nav1">Home</div>
            </Link>

            <Link href={"/"}>
              <div className="nav nav1">Product</div>
            </Link>


            <Link href={"/pricing"}>
              <div className="nav nav3">Pricing</div>
            </Link>

            <Link href={"/contact"}>
              <div className="nav nav2">Contact</div>
            </Link>
          </div>

          <div className="navbar_button">
            <div className="menu-btn">
              <Link href="/ccm">
                <button className="nav_login2">
                  Get Started Its - Free
                </button>
              </Link>
            </div>
            <div className={authtoken != '' ? "menu-btn dis_none" : "menu-btn"}>
              <Link href="/signin">
                <button className="nav_login">
                  Login / Signup
                </button>
              </Link>
            </div>
            {/* <div className={authtoken != '' ? "menu-btn" : "menu-btn dis_none"}>
              <Profile />
              
            </div> */}
          </div>
        </div>





        <div className={click ? "navbar-right" : "navbar-right display-none"}>
          <div className="navrel pos-rel res" style={{backgroundColor:'#f9fbfc', width:'100%'}}>
            <Link href={"/"}>
              <div className="nav nav1" style={{backgroundColor:'#f9fbfc'}}>Home</div>
            </Link>

            <Link href={"/"}>
              <div className="nav nav1">Product</div>
            </Link>


            <Link href={"/pricing"}>
              <div className="nav nav3" style={{backgroundColor:'#f9fbfc'}}>Pricing</div>
            </Link>

            <Link href={"/contact"}>
              <div className="nav nav2" style={{backgroundColor:'#f9fbfc'}}>Contact</div>
            </Link>

            <div className="mobile_btn">
              <div className="menu-btn">
                <Link href="/ccm">
                  <button className="nav_login2">
                    Get Started Its - Free
                  </button>
                </Link>
              </div>
              <div className={authtoken != '' ? "menu-btn dis_none" : "menu-btn"}>
                <Link href="/signin">
                  <button className="nav_login">
                    Login / Signup
                  </button>
                </Link>
              </div>
              {/* <div className={authtoken != '' ? "menu-btn" : "menu-btn dis_none"}>
                <Profile />
              </div> */}

            </div>

          </div>

          <div className="navrel pos-rel normal flex-all">

          </div>
        </div>
        <div className="hamburger">
          <div>
            <Link href={"/"}>
              <h2 className="logo">The Design Engg</h2>
            </Link>
          </div>
          <div onClick={handleClick} className={open ? "ham-pos res-nav" : "ham-pos"}>
            {click ? (
              <CloseIcon size={20} style={{ color: "black" }} />
            ) : (
              <MenuIcon size={20} style={{ color: "black" }} />
            )}
          </div>
        </div>
      </div>

      <div
        className={
          open
            ? "drop-menu drop-display-none"
            : "drop-menu"
        }
      >

        <div onClick={handleClickdrop} className="ham-pos d_none ham_2">
          {click ? (
            <CloseIcon size={20} style={{ color: "black" }} />
          ) : (
            <MenuIcon size={20} style={{ color: "black" }} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
