import React from 'react';
import Logo from '../../assets/images/logo.avif';
import "./style.scss";
const index = () => {
   return (
      <div className=''>
            <button className="btn btn-primary w-100">Free shipping  on orders over $59*</button>

            <div className="container d-flex justify-content-around ">
               <img src={Logo} alt="" />
               <ul className='d-flex gap-5 my-auto ls  '>
                  <li>Deals</li>
                  <li>Products</li>
                  <li> Support</li>
                  <li>About Us</li>
                  <hr />
                  <i className="bi bi-search"></i>
                  <i className="bi bi-person-fill"></i>
                  <i className="bi bi-cart"></i>
               </ul>
               </div>
        

      </div>
   );
};

export default index;