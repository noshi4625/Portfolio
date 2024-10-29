import React from 'react'
import './About.css';
import { LuMusic4 } from "react-icons/lu";
import { LuBaggageClaim } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { MdOutlineSportsTennis } from "react-icons/md";
export default function About() {
  return (
    <div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="a1"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="a2 my-3 ms-3">
              <p className="mt-5">
                <b style={{ color: "rgb(134, 134, 134)" }}>MY INTRO</b>
              </p>
              <h1 className="fs-2">
                <b>About Me</b>
              </h1>
              <p className="fs-5 mt-3" style={{ color: "rgb(134, 134, 134)" }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="divi my-3">
                <div className="divi1 ">
                  <h5 className="">Name:</h5>
                  <h5 className="mt-3">Date Of Birth:</h5>
                  <h5 className="mt-3">Address:</h5>
                  <h5 className="mt-3">Zip Code:</h5>
                  <h5 className="mt-3">Email:</h5>
                  <h5 className="mt-3">Phone:</h5>
                </div>
                <div
                  className="divi1 ms-4"
                  style={{ color: "rgb(134, 134, 134)" }}>
                  <p>
                    <b>Nosheen BiBi</b>
                  </p>
                  <p>
                    <b>11-12-2006</b>
                  </p>
                  <p>
                    <b>Hasilpur</b>
                  </p>
                  <p>
                    <b>1000</b>
                  </p>
                  <p>
                    <b>i.noshii.iub@gmail.com</b>
                  </p>
                  <p>
                    <b>+92-304-6938667</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="divi2">
              <div className="a3">
                <div className="aa"><LuMusic4 /></div>
                <p>Music</p>
              </div>
              <div className="a3">
                <div className="aa"><LuBaggageClaim /></div>
                <p>Travel</p>
              </div>
              <div className="a3">
                <div className="aa"><MdLocalMovies/></div>
                <p>Movie</p>
              </div>
              <div className="a3">
                <div className="aa"><MdOutlineSportsTennis /></div>
                <p>Sports</p>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
}
