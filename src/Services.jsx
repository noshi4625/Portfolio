import React from 'react'
import './Services.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { RiWebhookFill } from "react-icons/ri";
import { BiSolidCity } from "react-icons/bi";
import { PiDevices } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { TbHeartRateMonitor } from "react-icons/tb";
import { GiRobotAntennas } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

export default function Services() {
   React.useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div>
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <div className="bl" data-aos="fade-up" data-aos-duration="800">
          <h5 className="pt-5">I AM GRAT At</h5>
          <h1>We do awesome services for our clients</h1>
          <p className=" fs-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <RiWebhookFill />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Web Design</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <BiSolidCity />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Web Application</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <PiDevices />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Web Develoment</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <FaComputer />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Banner Design</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <TbHeartRateMonitor />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Branding</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <GiRobotAntennas />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Icon Design</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <GiRobotAntennas />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Graphic Design</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" style={{ height: "300PX" }}>
            <div className="divii">
              <div className="se2">
                <h2>
                  <IoSearch />
                </h2>
              </div>
              <div className="se3 ms-5 ">
                <h4>Web Seo</h4>
                <p className=" pt-3">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
