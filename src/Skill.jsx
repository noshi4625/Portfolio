import React from 'react'
import './Skill.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skill() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: "whitesmoke"}}>
      <div className="progres container pt-4" data-aos="fade-up" data-aos-duration="800">
         <div className="bl" data-aos="fade-up" data-aos-duration="800">
          <h5 className='pt-5'>SKILLS</h5>
          <h1>My Skills</h1>
          <p className=' fs-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"330px"}}>
            <div className="sk">
              <h1 className="fs-4 mt-5 my-3">CSS</h1>
              <div className="circle" style={{ "--conic-percentage": "95%" }}>
                <p>95%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                  <h2>28%</h2>
                  <p className="pe-5">Last week</p>
                </div>
                <div className="sk2">
                  <h2>60%</h2>
                  <p className="">Last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"330px"}}>
            <div className="sk">
              <h1 className="fs-4 mt-5 my-3">HTML</h1>
              <div className="circle" style={{ "--conic-percentage": "88%" }}>
                <p>88%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                  <h2>28%</h2>
                  <p className="pe-5">Last week</p>
                </div>
                <div className="sk2">
                  <h2>60%</h2>
                  <p className="">Last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"330px"}}>
            <div className="sk">
              <h1 className='fs-4 mt-5 my-3'>jQuery</h1>
              <div className="circle" style={{ "--conic-percentage": "68%" }}>
                <p>68%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                    <h2>28%</h2>
                    <p className='pe-5'>Last week</p>
                </div>
                <div className="sk2"> 
                    <h2>60%</h2>
                    <p className=''>Last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"350px"}}>
            <div className="sk">
              <h1 className='fs-4 mt-5 my-3'>Photoshop</h1>
              <div className="circle" style={{ "--conic-percentage": "90%" }}>
                <p>90%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                    <h2>28%</h2>
                    <p className='pe-5'>Last week</p>
                </div>
                <div className="sk2"> 
                    <h2>60%</h2>
                    <p className=''>Last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"350px"}}>
            <div className="sk">
              <h1 className='fs-4 mt-5 my-3'>WordPress</h1>
              <div className="circle" style={{ "--conic-percentage": "89%" }}>
                <p>89%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                    <h2>28%</h2>
                    <p className='pe-5'>Last week</p>
                </div>
                <div className="sk2"> 
                    <h2>60%</h2>
                    <p className=''>Last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 circlecontain" style={{height:"350px"}}>
            <div className="sk">
              <h1 className='fs-4 mt-5 my-3'>SEO</h1>
              <div className="circle" style={{ "--conic-percentage": "95%" }}>
                <p>95%</p>
              </div>
              <div className="sk1">
                <div className="sk2">
                    <h2>28%</h2>
                    <p className='pe-5'>Last week</p>
                </div>
                <div className="sk2"> 
                    <h2>60%</h2>
                    <p className=''>Last month</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-6 col-md-4 col-lg-3 circlecontain">
            <div className="circle" style={{ "--conic-percentage": "89%" }}>
              <p>89%</p>
            </div>
            <p>JAVASCRIPT</p>
          </div> */}
          {/* <div className="col-6 col-md-4 col-lg-3 circlecontain">
            <div className="circle" style={{ "--conic-percentage": "90%" }}>
              <p>90%</p>
            </div>
            <p>CSS</p>
          </div> */}

          {/* <div className="col-6 col-md-4 col-lg-3 circlecontain">
            <div className="circle" style={{ "--conic-percentage": "45%" }}>
              <p>45%</p>
            </div>
            <p>REACT</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
