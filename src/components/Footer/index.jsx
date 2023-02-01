import React from 'react';
import "./style.scss";
const index = () => {
   return (
      <div>
         <footer className='footers'>
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <h3>Company</h3>
                     <ul className='ul'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>Support</h3>
                     <ul className='ul'>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Terms of Service</a></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>Legal</h3>
                     <ul className='ul'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Security</a></li>
                     </ul>
                  </div>
               </div>
               </div>
              

         </footer>
      </div>
   );
};

export default index;