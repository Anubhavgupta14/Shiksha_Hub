
import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
// import { FaLinkedin } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { AiFillMail } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import Link from 'next/link';
import PlainButton from '../PlainButton/plainbutton'



const Footer = () => {
    const icons = [
        {
            svg: <BsTwitter />,
        },
        {
            svg: <RiInstagramFill />,
        },
        {
            svg: <IoLogoLinkedin />,
        },
        {
            svg: <BsYoutube />,
        },
        {
            svg: <SiDiscord />,
        },

    ]
    return (
        <>
            <div className="footer-cont">
                <div className="email-cont">

                    
                </div>
                <div className="h-box-cont">
                    <div className="h-box">
                        <div className="footer-logo-cont">
                            <Link href={"/"}><h2>Shiksha HUB</h2></Link>
                        </div>

                        <div className="icons-cont">

                            {
                                icons.map((icon, index) => {
                                    return (
                                        <div className="icons" key={index}>{icon.svg}</div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className='footer_subline'>
                        <div>
                            <p className="p_sign">
                                © <span data-year>2023</span> Shiksha HUB. All rights reserved.
                            </p>
                        </div>
                        <div className="terms-cont">
                            <div className="terms">Terms Of Use</div>
                            <div className="terms">Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer