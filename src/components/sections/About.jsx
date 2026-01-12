import abiepic1 from "../../assets/abiepic1.png"
import Logo from "../../assets/Logo.svg"
import { User, InfoIcon, Instagram, Mail, MessageCircleMore, CodeXml, FileText, X, Send, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import emailjs from 'emailjs-com';
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"
import { FaLinkedinIn } from "react-icons/fa6";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

gsap.registerPlugin(ScrollTrigger);


export const About = () => {
  const scrollRef = useRef();

  const abie_pic = abiepic1
  const abie_logo_icon = Logo

   
   useGSAP(() => {

       gsap.fromTo('#abt_blush', {
                x:0,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration:1,
              
                
                 ease: 'power1.inOut',
                  scrollTrigger:{
                  trigger: "#about-abie-info"
                 
                 },
                 
          })

           gsap.fromTo('.profile', {
                x:0,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                 ease: 'power1.inOut',
                 scrollTrigger:{
               
                  trigger: "#abie-logo-round",
                 
                 
                 },
          })

             gsap.fromTo('#scrollprompt', {
                x:0,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                delay:3,
                 ease: 'power1.inOut',
                 scrollTrigger:{
               
                  trigger: "#abie-logo-round",
                 
                 
                 },
          })

           gsap.fromTo('#abie-pic', {
               
                opacity:0
          }, 
          {
               
                opacity:1,
                duration: 1,
                 ease: 'power1.inOut',
                  scrollTrigger:{
                  trigger: "#about-abie-info",
                
                 
                 },
                 
          })

        



          gsap.fromTo('#abie-logo-round', {
                x: -200,
                y:-300,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 2,
                 ease: 'power1.inOut',

                 scrollTrigger:{
                  trigger: "#about-abie-info",
                
                 
                 },
               
               
          })



          gsap.fromTo('#about-abie-info', {
                x: -600,
                y:300,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 2,
                 ease: 'power1.inOut',
                  scrollTrigger:{
                  trigger: "#about-abie-info",
                 
                 
                 },
                 
          })



            gsap.fromTo('#abie-contact', {
                x: 600,
                y:300,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 2,
                 ease: 'power1.inOut',
                  scrollTrigger:{
                  trigger: "#about-abie-info",
                
                 
                 },
                  
          })



             gsap.fromTo('#about-dialogue-info', {
                x:0,
                y:200,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
               
                duration: 2,
                 ease: 'power1.inOut',
                 scrollTrigger:{
                  trigger: "#about-abie-info",
            
                 
                 },
                  
          })

          
     }, []);





  const [Metxt, setInfotxt] = useState("I create UI designs, websites, illustrations, simple animations, logo designs, etc. In general, I like doing anything that enables me to create or put my ideas & reveries into reality. Like, tool or no tool, I w i l l create! Phil. 4:13 typa mindset.");

  
  const MeClick = (useState) =>{
    setInfotxt("I create UI designs, websites, illustrations, simple animations, logo designs, etc. In general, I like doing anything that enables me to create or put my ideas & daydreams into reality. Like, tool or no tool, I w i l l create! Phil. 4:13 typa mindset.");

  }

  const LogoClick = () =>{
    setInfotxt("Oh, this logo? This is how I define Jesus in my life. Peaceful as the sound of a lyre, a Light in my darkest days like a candle, my Vine that I can't do anything without. Can you find the candle?");
  }

    const ResumeClick = () =>{
    setInfotxt("A link just opened! That's my resume. I decided to not put it here publicly as a precautionary measure. Please request access if you want to learn more about me. Thank you!");
  }

   const CodeClick = () =>{
    setInfotxt("My tech stack usually consists of HTML, CSS, Javascript, React + Vite, & Tailwind. I design on either Figma or Canva.");
  }

  const CrossClick = () =>{
    setInfotxt("None of these would have been possible if Jesus didn't save me.");
  }

  
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

 

  

    return <section id="about" ref={scrollRef} className="w-auto flex flex-col items-center justify-center relative bg-[#eae6ea]">
        <div id="smooth-wrapper" className="w-screen">
          
          <div id="smooth-content" className="flex flex-col items-center justify-center py-40 sm:py-40 px-5">
            {/*Blush blur bg*/}
                <div id="abt_blush" className="hidden sm:flex mx-auto  items-center justify-center text-center w-180 h-100   bg-[#ff1f62ac] rounded-full blur-[170px] animate-[pulse_10s_ease-in-out_infinite]"></div>
                <div id="abt_blush" className="sm:hidden flex items-center justify-center w-85 h-85 bg-[#ff1f6285] rounded-full blur-[80px] animate-[pulse_10s_ease-in-out_infinite]"></div>


            {/*Headline*/}
            <div id="profile" className="profile scroll-box hidden sm:flex flex-col z-10 mx-auto text-center -mt-91">
            <h1 className="jacquard-24-regular text-[87px] text-white tracking-[5px]">Hi! I'm Abie.</h1>
           

            <h4 className="text-xl text-white opacity-70 tracking-[2px] -mt-7.5 ">Welcome to my Portfolio. (´｡• ᵕ •｡`)</h4>
            </div>

          

             {/*Headline MOBILE*/}
            <div id="profilee"   className="profile sm:hidden scroll-box flex flex-col items-center z-10 mx-auto text-center -mt-70 mb-7">
            <h2 className="jacquard-24-regular text-[50px] text-white tracking-[3px] ">Hi! I'm Abie.</h2>

            <h4 className="text-md text-white opacity-70 tracking-[3px] ">Welcome to my Portfolio. (´｡• ᵕ •｡`)</h4>
            </div>

             {/*gui layout desktop*/}
            <div className="flex flex-col  items-center justify-center">
              

              {/*Left side*/}
              <div id="abie-logo-round" onClick={LogoClick} className="absolute flex items-center justify-center pr-82 top-97 sm:top-103 sm:pr-140 md:pr-170 cursor-pointer ">
               <div className="z-2 absolute  w-15 h-15 sm:h-30 sm:w-30 rounded-full backdrop-blur-xl bg-transparent  shadow-sm shadow-white border-[1px] border-t-white border-l-white/20 border-r-white/20 border-b-white/0">
                <img src={abie_logo_icon} className="absolute h-full w-full"></img>
                <img src={abie_logo_icon} className="absolute h-full w-full opacity-100 blur-xs transition-all duration-500 animate-pulse"></img>
                <img src={abie_logo_icon} className="absolute h-full w-full opacity-50 blur-md hover:opacity-100 transition-opacity duration-300"></img>
               </div>
               <div className="z-1 absolute  w-15 h-15 sm:h-30 sm:w-30 rounded-full backdrop-blur-xl bg-transparent border-1 sm:border-1 border-t-white border-l-white/20 border-r-white/20 border-b-white/0 blur-[2px] shadow-lg shadow-[#ffffff] drop-shadow-xl drop-shadow-[#3a0b3a51]  "></div>
              </div>
              

              <div id="about-abie-info"  className="z-3 absolute flex flex-col gap-2 items-center justify-center rounded-[20px] mr-82 top-109 w-15 h-50 sm:top-123 sm:w-21 sm:h-66 sm:mr-140 md:mr-170 sm:rounded-[30px] backdrop-blur-lg bg-white/50">

             <button onClick={MeClick} className="w-10 h-10 rounded-[13px]  sm:w-13.5 sm:h-13.5 sm:rounded-[15px] bg-[#fffcff] hover:text-[#d1a4b1] hover:bg-[#360C36] transition-all duration-500 cursor-pointer">
                <User className=" h-full w-full p-2.5 sm:p-3.5 text-[#360C36] hover:text-[#d1a4b1]"></User>
              </button>

              <a target="_blank" href="https://drive.google.com/file/d/19UY-_aktLdPSVJ-b3Od48R3XsM0E8lDR/view?usp=drive_link" className="-mb-1.5 bg-transparent border-none">
                 <button onClick={ResumeClick} className="w-10 h-10 rounded-[13px]  sm:w-13.5 sm:h-13.5 sm:rounded-[15px] bg-[#fffcff] hover:text-[#d1a4b1] hover:bg-[#360C36] transition-all duration-500 cursor-pointer">
                    <FileText className="h-full w-full p-2.5 sm:p-3.5 text-[#360C36] hover:text-[#d1a4b1]"></FileText>
                </button>
              </a>

               

                <button onClick={CodeClick} className="w-10 h-10 rounded-[13px]  sm:w-13.5 sm:h-13.5 sm:rounded-[15px] bg-[#fffcff] hover:text-[#d1a4b1] hover:bg-[#360C36] transition-all duration-500 cursor-pointer">
                  <CodeXml className="h-full w-full p-2.5 sm:p-3.5 text-[#360C36] hover:text-[#d1a4b1]"></CodeXml>
                </button>

               <button onClick={CrossClick} className="w-10 h-10 rounded-[13px]  sm:w-13.5 sm:h-13.5 sm:rounded-[15px] text-white hover:text-[#360C36] text-lg sm:text-[30px] font-semibold hover:bg-transparent hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/50  bg-transparent drop-shadow-xl drop-shadow-[#360c36] shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
                
                <p className=" flex justify-center ">​†​</p>
                
              </button>

              </div>

                {/*Scroll prompt*/}
                <div id="scrollprompt" className="flex absolute flex-col items-center -mt-40 opacity-30 scale-90 cursor-context-menu">
                  <h6 className="hidden items-center justify-center font-Antic text-xs md:text-[13px] text-[#360C36] tracking-[3px] delay-100">Scroll down</h6>
                  <ChevronDown size={25} className="animate-bounce block items-center justify-center mt-3 text-[#360c368d]  border rounded-full h-20 w-10"></ChevronDown>
                </div>

              {/*Middle*/}
              <div id="abie-pic"  className="scroll-box z-1 h-full mx-auto px-4 flex-col pt-3 sm:pt-10 animate-[float_4s_ease-in-out_infinite] pointer-events-none ">

               <div className="z-0 absolute  w-60 h-90  rounded-[40px]  sm:w-73 sm:h-107 sm:rounded-[50px] backdrop-blur-xs bg-transparent border-1 border-t-white border-l-white/5 border-r-white/5 border-b-white blur-[2px] shadow-xl shadow-white drop-shadow-lg drop-shadow-[#360c36a0]  "></div>

              <div className="z-2  w-60 h-90 flex justify-center  rounded-[40px] sm:w-73 sm:h-107 sm:rounded-[50px] backdrop-blur-xs bg-transparent  shadow-sm shadow-white border-1 border-t-white border-l-white/10 border-r-white/10 border-b-white/0 overflow-clip">
                  <div className="z-1 flex-col flex items-center justify-center sm:-mt-10">
                  
                      <div className=" h-50 w-50 rounded-full  bg-transparent shadow-xl shadow-white/70  drop-shadow-xl drop-shadow-[#360C36]/30 overflow-clip"> 
                        <img src={abie_pic} className="object-cover w-full rounded-full -mt-2 pointer-events-none "></img>
                      </div>
                      
                      <span className="z-1 absolute text-white text-2xl tracking-[1px]  mt-50 blur-xs drop-shadow-md drop-shadow-white opacity-10 hover:opacity-100 transition-all duration-400">Abigail C. Reyes</span>
                      <span className="text-white text-2xl tracking-[1px] drop-shadow-xl drop-shadow-[#360C36] mt-5">Abigail C. Reyes</span>
                       <span className="text-white text-xs tracking-[1px] drop-shadow-xl text-center drop-shadow-[#360C36] mt-1 opacity-80 hover:opacity-100 transition-all duration-400 ">Web Developer | Designer |  Artist</span>
                       
                  </div>
                   <div className="z-0 absolute bottom-15 sm:bottom-25 h-7 w-35 sm:h-10 sm:w-30 bg-[#ff1162] rounded-full blur-[30px]"></div>
                  
              </div>
             
              </div>
            

              {/*Right side*/}
              <div id="abie-contact"  className="z-2 scroll-box absolute flex items-center justify-center pl-82 top-135 sm:pl-140 md:pl-167 sm:top-148">
                   <div className="z-3 absolute items-center justify-center w-14 h-50 sm:w-18 sm:h-80 rounded-full  backdrop-blur-xl bg-[#f57e9c]/5  shadow-sm shadow-white border-[1px] border-t-white border-l-white/20 border-r-white/20 border-b-white/0">
              
                    <div className="relative flex items-center justify-center">
                        <div className="z-3 absolute flex items-center justify-center mt-12 w-11 h-11 sm:mt-18 sm:w-18 sm:h-18 rounded-full  bg-[#fffcff]">
                        <MessageCircleMore className="h-7 w-7 sm:h-10 sm:w-10 text-[#360C36]"></MessageCircleMore>
                        </div>

                        <div className="z-0 absolute flex items-center justify-center w-15 h-15 mt-15 sm:mt-20 sm:w-18 sm:h-18 rounded-full bg-[#f57e9c] blur-md"></div>
                        <div className="z-1 absolute flex items-center justify-center w-15 h-15 mt-15  sm:mt-20 sm:w-18 sm:h-18 rounded-full bg-[#ffffff] blur-md animte-pulse duration-700"></div>
                        <div className="z-1 absolute flex items-center justify-center w-15 h-15 mt-15 sm:mt-20 sm:w-18 sm:h-18rounded-full bg-[#ffffff] blur-lg animate-pulse duration"></div>
                    </div>

                <div className="flex flex-col items-center justify-center gap-6 mt-17.5 sm:mt-21">
                    
              
                <button onClick={openContactForm} className="flex items-center justify-center h-5 w-5   sm:w-13.5 sm:h-13.5">
                  <Mail size={23}  className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/50 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></Mail>
                </button>
                
                
                <a target="_blank" href="https://www.instagram.com/the.abiereverie/">
                   <button className="flex items-center justify-center h-5 w-5 sm:w-13.5 sm:h-13.5">
                  <Instagram size={23} className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/40 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></Instagram>
                </button>
                </a>
               
               <a target="_blank" href="https://www.linkedin.com/in/abigail-reyes-6236233a5/">
               <button className="flex items-center justify-center h-4 w-4   sm:w-13.5 sm:h-13.5">
                  <FaLinkedinIn size={20} className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/50 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></FaLinkedinIn>
                </button>
               </a>

                </div>
               </div>

               <div className="z-1 absolute items-center justify-center w-15 h-50 sm:w-18 sm:h-80 rounded-full backdrop-blur-xl bg-transparent border-1  border-t-white border-l-white/50 border-r-white/50 border-b-white/100 blur-[4px] shadow-xl shadow-[#ffffff] drop-shadow-md drop-shadow-[#360c36a0]  "></div>
              </div>

               
             
              {/*C o n t a c t FORM */}
               <AnimatePresence>
                  {ContactFormOpen && ( 
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    id="contact"  className="fixed inset-0  flex flex-col items-center justify-center bg-[#eae6ea]/30 backdrop-blur-lg z-100">  

                      
                      {/*Contact header*/}
                        <p className="sm:top-20 top-30 absolute flex items-center justify-center  text-white sm:drop-shadow-lg sm:text-xl text-2xl ">ꗃ Feature Unlocked</p>
                        <p className="sm:top-30 top-40 absolute flex items-center justify-center text-center   text-white sm:drop-shadow-lg sm:text-sm text-md sm:p-0 sm:py-0 px-15 py-5">Congrats! You are 1 email away from turning reverie into reality with me!</p>

                      {/*3D EMAIL*/}
                        <motion.div
                        initial={{scale:0.9,opacity: 0}}
                        animate={{scale:1,opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1}} 
                      
                        className="absolute flex lg:w-screen h-screen w-350 sm:-mt-0 mt-15 items-center justify-center ">
                            <Spline scene="https://prod.spline.design/vYFOBdJvnux0uihs/scene.splinecode" />
                          </motion.div>    
                        
                        {/*Contact form container*/}
                          <form id="contactform" onSubmit={SendEmail} className=" z-1 sm:mt-60 mt-90 justify-center items-center flex  flex-col">
                          
                        {/*Name, Email, exit Container*/}
                          <div className=" flex items-center sm:flex-row flex-col mb-4"> 

                              {/* -------------------1. Name*/}
                              <div className="left-0 sm:mr-5 sm:mb-0 mb-13" >
                                <label htmlFor="name" className="absolute -mt-5.5 ml-3 tracking-[5px]  text-[#360c3e]/90 text-sm drop-shadow-md drop-shadow-[#270c166a]   ">Name</label>
                              <input 
                              value={formData.name} 
                              onChange={(e) => setFormData({...formData, name: e.target.value})} 
                              id="name" 
                              name="name" 
                              type="text" required placeholder="Jane Doe" 
                              className="lg:w-55 sm:w-53 w-70  sm:h-10 tracking-[5px] rounded-full text-white/100 placeholder-white/90  caret-[#d1a4b1] text-sm bg-[#ff1f6285]/16 active:bg-[#ff1f6285]/15 backdrop-blur-xl  focus:bg-white/20 focus:text-[#360C36]/90 focus:outline-none   shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 px-5 py-2 transition-all duration-300"></input>
                              </div>
                            

                            {/*--------------2. Email*/}
                            <div id="emailcontainer">
                              <label htmlFor="email" className="absolute -mt-5.5 ml-3 tracking-[5px]  text-[#360c3e]/90  text-sm  drop-shadow-md drop-shadow-[#4718294d]">E-mail</label>
                              <input 
                              value={formData.email} 
                              onChange={(e) => setFormData({...formData, email: e.target.value})} 
                              id="email" 
                              name="email" 
                              type="email" 
                              required placeholder="janedoe@email.com" 
                              className="lg:w-70 sm:w-65  sm:h-10 w-70  tracking-[5px] rounded-full text-white/100 placeholder-white/85 caret-[#d1a4b1] text-sm bg-[#ff1f6285]/15 backdrop-blur-xl  focus:bg-white/20 focus:text-[#360C36]/90 focus:outline-none   shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 px-5 py-2 transition-all duration-300"></input>
                            </div>

                            {/*-----E X I T  button (w/ movbile ver.)-----*/} 
                            <div id="exitbtncontainer" className="hidden sm:flex lg:ml-65 sm:ml-20"  >
                              <button type="button" onClick={closeContactForm} className="flex items-center justify-center h-11 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                            </div>

                              <div id="exitbtncontainer" className="sm:hidden absolute flex top-6 right-6"  >
                              <button type="button" onClick={closeContactForm} className="flex items-center justify-center h-11.5 w-11.5 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                            </div>
                              

                            </div>

                              {/*----------------3. Message*/}
                              <div className="flex items-center justify-center sm:mt-0 mt-10">

                              <textarea 
                              value={formData.message} 
                              onChange={(e) => setFormData({...formData, message: e.target.value})} 
                              id="message" 
                              name="message" 
                              type="message"
                              row={5} required placeholder="What can I help you with?"  
                              className=" z-1 flex items-center justify-center lg:w-205 sm:w-153 w-90 h-35 rounded-2xl  backdrop-blur-xl text-[#360C36]/90 bg-white/70 caret-[#d1a4b1] focus:bg-white/85 focus:outline-none  shadow-lg drop-shadow-2xl drop-shadow-[#360c36]/15 shadow-white border-[2px] resize-none border-t-white border-l-white/50 border-r-white/50 border-b-white/20 p-5 transition-all duration-500"></textarea>
                              
                              <div className="hidden sm:flex absolute lg:ml-173 sm:ml-122 sm:mt-57 mt-70 ">
                                <button type="submit" className="flex items-center justify-center h-14 w-50 sm:h-11 sm:w-35 mr-3 text-white/90 sm:text-lg text-2xl rounded-full backdrop-blur-lg bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">Send <Send className="ml-2" size={25}/></button>
                              </div>

                              {/*-----S E N D  button-----*/}
                              <div className="z-2 sm:hidden absolute flex items-center justify-center mt-20 ml-70">
                                <button type="submit" className="flex items-center justify-center h-20 w-20 text-[#d1a4b1] sm:text-lg text-2xl hover:bg-[#d1a4b1] transition-all duration-500 cursor-pointer"><Send className="ml-2" size={35}/></button>
                              </div>
                            
                              </div>

                              
                          
                          </form>

                    </motion.div>
                    
                  )}
               </AnimatePresence>
              
         
           
          


              {/*Info section*/}
            <div id="about-dialogue-info"  className="scroll-box z-3 flex items-center justify-center">
               <div className="flex h-30 w-95 mt-10 sm:mt-7 sm:w-150 sm:h-30 rounded-[30px] sm:rounded-[35px] backdrop-blur-lg bg-white/50">
                <div>
                  
                </div>
                 <InfoIcon className=" absolute flex items-center justify-center ml-3 mt-7.5 w-12 h-12 sm:ml-11 sm:mt-9 sm:w-12 sm:h-12 text-[#d1a4b1c2] stroke-[1.5px]"></InfoIcon>
                  
                 <div className="z-3  flex items-center w-70 ml-19 sm:ml-29 sm:w-110 bg-transparent">
                  <p className="text-justify text-[#360C36] text-[11px] sm:text-[15px] sm:leading-5">{Metxt}</p>
                 </div>

                 



             </div>
            </div>

            
              
             

            

              </div>
            </div>
          </div>   
    </section>

    
};
