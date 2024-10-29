import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { CgBoy } from "react-icons/cg";
import { PiHandbag } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { TbCalendarShare } from "react-icons/tb";
import './Home.css';

// import home from './Home.jpg'

export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >

      <div className="container-fluid"  style={{ backgroundColor: "rgb(199, 195, 195)" }}>
        <div className="container">
        <div className="row " style={{ backgroundColor: "rgb(199, 195, 195)" }}>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="home" data-aos="fade-up" data-aos-duration="800">
            <h2 style={{ color: "rgb(95, 93, 93)" }}>Hi, this is Nosheen</h2>
            <h2 style={{ fontSize: "40px" }}>I'm a Web Designer. This is my Favourite work</h2>
            <div className="butn1 ">
              <button className="btn1"><a href="#"><b>Hire me</b></a></button>
              <button className="btn2 ms-2"><a href="#"><b>Cv Download</b></a></button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="home1"></div>
        </div>
      </div>
      </div>
      </div>

      <div className="container-fluid"  style={{ backgroundColor: "rgb(228, 229, 235)"}}>
        <div className="container">
          <div className="row">
        <div className="col-12 col-sm-6 col-md-12 col-lg-3">
          <div className="ca">
            <div className="ca1">
              <div className="c1"><PiHandbag /></div>
              <div className="c2">
                <h1>750</h1> 
              <p><b>PROJECT COMPLETE</b></p>
              </div>
            </div>
            </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-lg-3">
          <div className="ca">
            <div className="ca1">
              <div className="c1 "><CgBoy /></div>
              <div className="c2">
                <h1>568</h1> 
              <p><b>HAPPY CLIENTS</b></p>
              </div>
            </div>
            </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-lg-3">
          <div className="ca">
            <div className="ca1">
              <div className="c1"><GiCoffeeCup /></div>
              <div className="c2">
                <h1>478</h1> 
              <p><b>CUP OF COFEE</b></p>
              </div>
            </div>
            </div>
            </div>

            <div className="col-12 col-sm-6 col-md-12 col-lg-3">
          <div className="ca">
            <div className="ca1">
              <div className="c1"><TbCalendarShare /></div>
              <div className="c2">
                <h1>780</h1> 
                <p><b>YEARS EXPERIENCED</b></p>
              </div>
            </div>
            </div>
            </div>
        </div>
        </div> 
      </div>
      </div>
  );
}
