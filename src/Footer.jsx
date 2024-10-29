import React from 'react'
import './Footer.css';
import { RiArrowDropRightLine } from "react-icons/ri";
import { SiWindowsxp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    React.useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className='bg-black'>
      <div className="container">
        <div className="row" >
          <div className="col-12 cokl-sm-12 col-md-6 col-lg-3" > 
            <div className="s1 text-white">
              <h1 className='text-white mt-5'>Lets talk about</h1>
              <p className='fs-5 mt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there  the blind texts.</p>
              <button className='button mt-2'><a href="#">Learn more</a></button>
            </div>
          </div>
          <div className="col-12 cokl-sm-12 col-md-6 col-lg-3" >
            <div className="s1 text-white">
              <h1 className='text-white mt-5'>Links</h1>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Home</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> About</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Services</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Projects</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Contact</p>
            </div>
          </div>
          <div className="col-12 cokl-sm-12 col-md-6 col-lg-3">
            <div className="s1 text-white">
              <h1 className='text-white mt-5'>Links</h1>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Web Design</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Web Development</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b>Business Strategy</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Data Analysis</p>
              <p className='fs-5 '><b className='fs-2'><RiArrowDropRightLine /></b> Graphic Design</p>
            </div>
          </div>
          <div className="col-12 cokl-sm-12 col-md-6 col-lg-3">
             <div className="s1 text-white">
              <h1 className='text-white mt-5'>Links</h1>
              <p className='fs-5 '><b className='fs-2'><SiWindowsxp /></b> 203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p className='fs-5 '><b className=' s2 fs-2'><a href=""><FaPhoneAlt /></a></b> +2 392 3929 210</p>
              <p className='fs-5 '><b className=' s2 fs-2'><a href=""><PiTelegramLogoLight /></a></b> nfo@yourdomain.com</p>

              <div className="s3"data-aos="fade-up" data-aos-duration="800">
                <button><a href="#"><FaTwitter /></a></button>
                <button><a href="#"><FaFacebookF /></a></button>
                <button><a href="#"><IoLogoInstagram /></a></button>
              </div>
          </div>
          </div>
             <div className="container-fluid my-5"><p className='s5 align-items-center mb-5'>Copyright ©2024 All rights reserved  <IoIosHeart /> This template is made with by <a href="#"> Nosheen.</a></p></div>
        </div>
      </div>
    </div>
  );
}
