import React from 'react'
import './Projects.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    React.useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div>
      <div className="container-fluid pb-4">
<div className="bl" data-aos="fade-up" data-aos-duration="800">
          <h5 className='pt-5'>ACOMMPLISHMENT</h5>
          <h1>Our Projects</h1>
          <p className=' fs-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="row">
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p1">
                    <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p2">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}> 
                <div className="p3">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>

                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p4">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p5">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p6">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>

            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p7">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3" style={{height:"330px"}}>
                <div className="p8">
                     <div className="pa2">
                        <h3>Brading $ </h3>
                        <h3>Illustration Design</h3>
                        <h4>Web Design</h4>
                        </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}
