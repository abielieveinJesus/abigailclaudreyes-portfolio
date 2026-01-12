import { Brush, ChevronLeft, ChevronRight, ChevronUp, House, HouseHeart, Pencil, PencilRuler, Scroll, ScrollText, Tablet, X, Send} from "lucide-react";
import { FaArtstation, FaBluesky, FaInstagram } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"
import emailjs from 'emailjs-com';
import Spline from '@splinetool/react-spline';




export const Contact = () => {


//Contact Form logic
      
      const [ContactFormOpen, setContactFormOpen] = useState(false);
      
       const openContactForm = () => {
          setContactFormOpen(true)
      
         
      
      
        }
      
        const closeContactForm = () => {
          setContactFormOpen(false)
          
          
        }
      
       
      
        const [formData, setFormData] = useState({
          name:"",
          email:"",
          message:"",
      
        })
      
      
        const SendEmail = (e) =>{
          e.preventDefault();
      
          const SERVICE_ID = "service_cigyg3w";
        const TEMPLATE_ID = "template_mzdl0pi";
        const PUBLIC_KEY = "cinXgNP7J2P-C2RED";
      
      
          emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
              alert ("Message Sent! ♡ Thank you for your time.", result);
              setFormData({name:"", email:"", message:""});
      
          })
          .catch((error) => alert("Sorry, your message wasn't sent. Please try again.♡", error));
        };
      
       
      


    return <section id="con"  className="hidden z-0 w-screen flex-col items-center justify-center relative py-25">
          {/*C o n t a c t PAGE */}

        <div  className="hidden md:flex absolute  flex-col items-center justify-center w-screen h-screen overflow-hidden">
                
                <div id="contactt"  className="z-3 flex flex-col items-center justify-center bg-white/85 backdrop-blur-md rounded-[70px]  md:rounded-[60px] lg:rounded-[100px] w-screen h-screen overflow-clip shadow-xl">
                    {/*Blush blur bg*/}
                    <div id="abt_blush" className="z-0 flex items-center justify-center text-center w-50 h-70 sm:w-100 sm:h-120 -mt-90 sm:-mt-15  bg-[#ff1f62ac] rounded-full blur-[100px] sm:blur-[150px] animate-[pulse_10s_ease-in-out_infinite]"></div>
                    
                    <div className="absolute flex flex-col items-center justify-center w-screen lg:-mt-20 -mt-70">

                        <h1 className="absolute flex items-center justify-center w-screen mb-35 text-[40px] text-white px-1 tracking-[5px]">Let's Work!</h1>
                         
                        <button onClick={openContactForm} className="z-1 hover:text-white text-[#360C36] rounded-full h-15 w-57 sm:h-13 sm:w-60  px-3.5 bg-white/40 shadow-xl shadow-white/75 drop-shadow-2xl drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:bg-transparent  hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-700 cursor-pointer ">
                            
                        <p className="text-[20px] sm:text-[20px]  px-1 tracking-[3px]">Contact Me</p>
                        </button>

                         <button className="z-0 absolute rounded-full h-10 w-54 sm:h-10 sm:w-35  px-3.5 text-[#ffffff] bg-[#ff1f62ac]/70 blur-[15px] shadow-lg shadow-white  animate-[pulse_3s_ease-in-out_inifinite]">
                            
                        
                        </button>
                       
                       

                       
                    </div>
                </div>

            </div>

    </section>
}