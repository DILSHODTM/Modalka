import {React, useState,useRef } from 'react';
import modals from '../../assets/images/modals.png';
import "./style.scss";


const index = () => {

   const modalKa=useRef();
   const register=useRef();
   const show=useRef();
   const shows=useRef();

   const quit=()=>{
       modalKa.current.classList.add('d-none')
       register.current.classList.add('d-none')
         show.current.classList.remove('d-none')
         shows.current.classList.remove('d-none')
     
      
   }

   const falfal=()=>{
      setTimeout(() => {
         modalKa.current.classList.remove('d-none')
         register.current.classList.remove('d-none')
         show.current.classList.add('d-none')
         shows.current.classList.add('d-none')
      }, 3000);
   }

   const adds=()=>{
      modalKa.current.classList.remove('d-none')
      register.current.classList.remove('d-none')
      show.current.classList.add('d-none')
      shows.current.classList.add('d-none')
   }


falfal();


   return (
      <div className='home'>
         <div className="container">
            <div className="row">
               <div className="col-md-12 cols">
                  <h2 className='mainss'>One Home, One App</h2>
                  <p className='ps'>Shop By Category</p>
                  <div className="cards d-flex gap-5">
                     <div className="card">
                        <i className="bi bi-lightbulb fss mx-auto"></i>
                        <span className='mx-auto pb-3'>Lighting</span>
                     </div>
                     <div className="card">
                        <i className="bi bi-outlet fss mx-auto"></i>
                        <span className='mx-auto pb-3'>Power & Switches</span>
                     </div>
                     <div className="card">
                        <i className="bi bi-webcam-fill fss mx-auto"></i>
                        <span className='mx-auto pb-3'>Cameras</span>
                     </div>
                     <div className="card">
                        <i className="bi bi-easel-fill fss mx-auto"></i>
                        <span className='mx-auto pb-3'>Sensors</span>
                     </div>
                     <div className="card">
                        <i className="bi bi-life-preserver fss mx-auto"></i>
                        <span className='mx-auto pb-3'>Lifestyle</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div ref={modalKa} className="opacitys d-none ">
           
         </div>

          <div  ref={register} className=" container d-flex  modal d-none  w-50">
            <button   className="btn btn-success quit text-warning" onClick={quit}>x</button>
            <div className="Registration">
               <p className='mai'>Enjoy 10% OFF*

your first order!</p>
               <p className='ps'>Sign up to be the first to know about the latest products and promotions.</p>
               <div className="row">
                  <div className="col-md-6">
                     <form className="form-group ">
                       
                        <input type="text" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                        
                        <input type="email" className="form-control " id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='Email' />
                        <button className="btn btn-success mt-3 w-100">Sign up</button>
                     </form>
                  </div>
               </div>

            </div>
            <img className='imgs' src={modals} alt="" />
         </div>
        <button ref={show} className="btn btn-primary cars  rounded-pill" onClick={adds}>
         Enjoy 10% OFF*
        </button>
        <button ref={shows} className="btn btn-primary carca  rounded-pill" onClick={adds}>
        <i class="bi bi-chat me-2"></i>
         Contact us
        </button>


      </div>
   );
};

export default index;