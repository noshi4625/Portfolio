import React from 'react'
import './Blog.css';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Blog() {
    React.useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div>
      <div
        className="container-fluid "
        style={{ backgroundColor: " whitesmoke" }}
      >
        <div className="bl" data-aos="fade-up" data-aos-duration="800">
          <h5 className="pt-5">BLOG</h5>
          <h1>Our Blog</h1>
          <p className=" fs-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
              <div className="bl1"></div>
              <div className="bli pt-3">
                <h6>July 03, 2020 Admin 3</h6>
                <h4 className='py-3'>Why Lead Generation is Key For Business Growth </h4>
                <p className='fs-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="bl2"></div>
               <div className="bli pt-3">
                <h6>July 03, 2020 Admin 3</h6>
                <h4 className='py-3'>Why Lead Generation is Key For Business Growth </h4>
                <p className='fs-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="bl3"></div>
               <div className="bli pt-3">
                <h6>July 03, 2020 Admin 3</h6>
                <h4 className='py-3'>Why Lead Generation is Key For Business Growth </h4>
                <p className='fs-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
