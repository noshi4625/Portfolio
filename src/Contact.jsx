import React from 'react';
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdGlobe } from "react-icons/io";





export default function Contact() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 }); // Customize animation duration if needed
  }, []);

  return (
    <div>
      <div className="container">
        <div className="bl" data-aos="fade-up" data-aos-duration="800">
          <h5 className='pt-5'>CONTACT US</h5>
          <h1>Have a Project?</h1>
          <p className=' fs-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="row my-5">
            <div className=" col-12 col-md-12 col-lg-6 " style={{backgroundColor:"whitesmoke"}}>
                <form className='formm'>
                  <div class=" ab mb-3 d-flex">
                     <input type="text" class="form-control" id="text" aria-describedby="namelHelp" placeholder='Name'/>
                     <input type="email" class="form-control ms-4" id="email" aria-describedby="emailHelp"  placeholder='Email'/>
                  </div>
                  <div class=" ab1 mb-3">
                     <input type="text" class="form-control" id="text"  placeholder='Subject'/>
                  </div>
 
                   <div class=" ab2 mb-3">
                       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                  </div>

                  <button type="submit" class="button ">Message Send</button>
               </form>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
               <div className="d2 ms-3 pb-5">
                 <div className="d3 mb-3 ms-4">
                     <div className="da1 ms-2 me-3"><FaLocationDot /></div>
                     <div className="da2">
                        <h3>Address</h3>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                     </div>
                 </div>

                 <div className="d3 mb-4 ms-4">
                     <div className="da1 ms-2 me-3"><FaPhone /></div>
                     <div className="da2">
                        <h3>Phone</h3>
                        <p>+92-304-6938667</p>
                     </div>
                 </div>

                 <div className="d3 mb-4 ms-4">
                     <div className="da1 ms-2 me-3"><PiTelegramLogoLight /></div>
                     <div className="da2">
                        <h3>Email</h3>
                        <p>i.noshii.iub@gmail.com</p>
                     </div>
                 </div>

                 <div className="d3 mb-4 ms-4">
                     <div className="da1 ms-2 me-3"><IoMdGlobe /></div>
                     <div className="da2">
                        <h3>Website</h3>
                        <p>yoursite.com</p>
                     </div>
                 </div>
               </div>    
           </div>
       </div>
   </div>
   </div> 
  );
}
