import avl_wip from "../assets/avl_wip.png"
import LiliesOfTheField from "../assets/LiliesOfTheField.webp"
import Psalm8_4 from "../assets/Psalm8_4.webp"
import NowISee from "../assets/NowISee.webp"
import { Brush, ChevronLeft, ChevronRight, ChevronUp, House, HouseHeart, Pencil, PencilRuler, Scroll, ScrollText, Tablet, X, Send, ChevronDown} from "lucide-react";
import { FaArtstation, FaBluesky, FaInstagram, FaPinterest } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TfiWrite } from "react-icons/tfi";
import { AiFillPicture } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"
import emailjs from 'emailjs-com';
import Spline from '@splinetool/react-spline';
import data from "./data"
import characterillust from "./characterillust"
import other from "./other"
import { TbBrandBluesky } from "react-icons/tb";
import { RiPinterestLine } from "react-icons/ri";
import { LuGalleryHorizontal } from "react-icons/lu";



gsap.registerPlugin(ScrollTrigger)

const art1 =avl_wip;
const art2 =LiliesOfTheField;
const art3 =Psalm8_4;
const art4=NowISee;

const artarray = [art1,art2,art3,art4];


export const Illustrations = () => {

     const [width, setWidth] = useState(0);
        const slider = useRef();

        useEffect(() => {
            console.log(slider.current.scrollWidth, slider.current.offsetWidth);
            setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
        }, []);
       

    
   useGSAP(() => {

    //TITLE ANIMATIONS------------------------
            gsap.fromTo('#illust_icon', {
             
               opacity:0
          }, 
          {
                opacity:1,
                duration: 1,
                delay:1,
                 ease: 'power1.inOut',
                 scrollTrigger:{
                  trigger: "#center_displaysetup",
                
                 
                 },
               
               })

               gsap.fromTo('#illust_title', {
                opacity:0
          }, 
          {
                opacity:1,
                duration: 1,
                delay:1,
                 ease: 'power1.inOut',
                 scrollTrigger:{
                  trigger: "#center_displaysetup",
                
                 
                 },
               
               })


    //Main ART----------------------------
            const art_tl = gsap.timeline({
                scrollTrigger: {
                    trigger:"#center_displaysetup"
                }
            });


            art_tl.fromTo('#centerpiece', {
                x: 0,
                y:0,
                opacity:0
                
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                delay:1.5,
                 ease: 'power1.inOut',
            })

           
         art_tl.fromTo('#illust_blush',{
            
                opacity:0
            },
            {
                opacity:1,
                duration:1,
                 ease: 'power1.inOut'
            

           })

 //Left side----------------------------
            const arttl2 = gsap.timeline({
              scrollTrigger: {
              trigger:"#centerpiece"
             }
            });


            arttl2.fromTo('#illust_left',{
                
                x:-100,
                opacity:0

            },
            {

                x:0,
                opacity:1,
                delay:2,
                duration:1,
                ease: 'power1.inOut'


            })

               gsap.fromTo('.circularstack',{
               y:20,
                opacity:0

            },
            {

                y:0,
                opacity:1,
                delay:2,
                duration:1.5,
                ease: 'power1.inOut',
                  scrollTrigger: {
              trigger:"#centerpiece"
             }


            })

             gsap.fromTo('.art_socials_m',{
                opacity:0

            },
            {
                 y:0,
                opacity:1,
                delay:2,
                duration:1.5,
                ease: 'power1.inOut',
                  scrollTrigger: {
              trigger:"#centerpiece"
             }


            })
            
//right-----------------------------------------
             const arttl3 = gsap.timeline({
              scrollTrigger: {
              trigger:"#centerpiece"
             }
            });

            
            arttl3.fromTo('#illust_right',{
               x:100,
                opacity:0

            },
            {

                x:0,
                opacity:1,
                delay:2,
                duration:1,
                ease: 'power1.inOut'
                
            })

             arttl3.fromTo('#vgen_btn',{
                opacity:0

            },
            {
                opacity:1,
                duration:2,
                ease: 'power1.inOut'


            })

//mobile----------------------------------------
             const arttl4 = gsap.timeline({
              scrollTrigger: {
              trigger:"#centerpiece"
             }
            });

            
            gsap.fromTo('#illust_nav_m',{
               x:100,
                opacity:0

            },
            {

                x:0,
                opacity:1,
                delay:2,
                duration:1,
                ease: 'power1.inOut',
                 scrollTrigger: {
              trigger:"#centerpiece"
             }


            })


           gsap.to("#contact", {
            y:-500,
            ease: 'power1.inOut',
            duration:1,
            scrollTrigger:{
                trigger: "#to_pin",
                start: "top -60px",
                end:"+=120px",
                scrub:3,
                pin:"#contact",
                pinSpacing:false,

            }
           })

            gsap.to("#contactmobile", {
            y:-500,
            ease: 'power1.inOut',
            duration:1,
            scrollTrigger:{
                trigger: "#to_pin",
                start: "top -60px",
                end:"+=110px",
                scrub:3,
                pin:"#contact",
                pinSpacing:false,

            }
           })

     }, []);



   const[mainart,setMainArt] = useState(0);


   const IncrementArt=()=>{
      
      if(mainart == artarray.length-1){
            setMainArt(0);
        }
        else{
            setMainArt(mainart+1);
        }

            gsap.fromTo('#centerpiece',
            {x:0,y:0,opacity:0,scale:1},
            {x:0,y:0,opacity:1,scale:1,duration:1}
            
        );

    }


  const DecrementArt=()=>{
        
    if(mainart == 0){
            setMainArt(artarray.length-1);
        }
        else{
            setMainArt(mainart-1);
        }

        gsap.fromTo('#centerpiece',
                {x:0,y:0,opacity:0,scale:1},
                {x:0,y:0,opacity:1,scale:1,duration:1}
                    
        );

        
       
    }

  
   

 //Gallerybtn
    
    const [GalleryOpen, setGalleryOpen] = useState(false);
    
     const openGallery = () => {
      
        setGalleryOpen(true)

      }
    
      const closeGallery = () => {
        setGalleryOpen(false)
        
      }

//Adoptablesbtn

      const [AdoptablesOpen, setAdoptablesOpen] = useState(false);
    
     const openAdoptables = () => {
        setAdoptablesOpen(true)

      }
    
      const closeAdoptables = () => {
        setAdoptablesOpen(false)
        
      }

//TermsofServicebtn

      const [TOSOpen, setTOSOpen] = useState(false);
    
     const openTOS = () => {
        setTOSOpen(true)

      }
    
      const closeTOS = () => {
        setTOSOpen(false)
        
      }

    

  //Open Full Screen

    const openFullscreen =  () => {
    document.getElementById('img')?.requestFullscreen()
  }

  //Contact Form logic
      
    const [ContactFormOpen, setContactFormOpen] = useState(false);
      
    const openContactForm = () => {
          setContactFormOpen(true)
        }
      
        const closeContactForm = () => {
          setContactFormOpen(false)
        }

         const closeContactpage = () => {
          
            gsap.to('#contact',
                {x:0,y:317, ease: 'power1.inOut',
            duration:1,}
                
               
                    
        );

        
          
          
        }

         const closeContactpagem = () => {
          
            gsap.to('#contactmobile',
                {x:0,y:350, ease: 'power1.inOut',
            duration:1,}
                
               
                    
        );

        
          
          
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

       

        
     

    return <section id="Illustrations"   className="w-auto flex items-center justify-center relative bg-linear-to-t from-[#eae6ea]  to-[#ff1f7926]  via-[#eae6ea] pt-20 py-10">
       <div id="to_pin" className="w-screen">

          {/*Title: Illustrations*/}
            <div  className="z-3 items-center justify-center flex px-5 mt-20 pb-30 left-0 right-0">
                <Brush id="illust_icon" size={35} className=" rounded-full p-1 text-white drop-shadow-[#360C36]/20 drop-shadow-lg mr-3 backdrop-blur-xl bg-[#947E94]/5  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20"></Brush>
                <h4 id="illust_title"  className="flex items-center justify-center px-2.5 py-1 pl-4.5 text-center text-sm sm:text-[25px] tracking-[10px] text-white rounded-full backdrop-blur-xl bg-[#947E94]/5  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20  ">Illustrations</h4>
            </div> 

            
        

          {/*left side*/}
            <div id="illust_left"  className="z-3 absolute flex flex-col gap-30 ml-6 sm:ml-0 lg:ml-15">

                <div className="flex flex-col gap-5 sm:gap-10 lg:mt-20">
            
                  {/*Gallery*/}
                    <div id="gallery" className="z-3 stagger-scls w-100  ">
                    <button id="abiereverie" className="flex items-center px-1  text-center text-[1px] md:tracking-[5px] sm:tracking-[3px]  sm:text-[10px] md:text-xs lg:text-sm lg:tracking-[7px] text-[#360C36]/0 sm:text-[#360C36]">
                    
                        <div onClick={openGallery}  className="flex items-center justify-center text-white sm:h-11.5 sm:w-11.5 md:h-13 md:w-13 h-13 w-13 rounded-full backdrop-blur-sm hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md  b drop-shadow-xl hover:drop-shadow-[#360c36]/30 drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
                        <LuGalleryHorizontal size={30} className="text-white drop-shadow-xl drop-shadow-[#ff1f6285]/50"></LuGalleryHorizontal>
                        </div>
                    
                        <p className="hidden md:flex ml-5 text-md tracking-[5px] text-[#360C36] drop-shadow-lg">View More</p>
                        </button>
                    </div>



                 {/*Adoptables*/}
                    <div id="Adoptables" className="z-3 stagger-scls">
                    <button id="abiereverie" className="flex items-center  px-1   text-center text-[1px] md:tracking-[5px] sm:tracking-[3px]  sm:text-[10px] md:text-xs  lg:text-sm lg:tracking-[7px] text-[#360C36]/0 sm:text-[#360C36]">

                        
                        <div onClick={openAdoptables}   className="flex items-center justify-center text-white sm:h-11.5 sm:w-11.5 md:h-13 md:w-13 h-13 w-13 rounded-full backdrop-blur-sm hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md  bg-transparent drop-shadow-xl hover:drop-shadow-[#360c36]/30 drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
                        <HouseHeart size={30} className="text-white drop-shadow-xl drop-shadow-[#ff1f6285]/50"></HouseHeart>
                        </div>
                        

                        <p className="hidden md:flex ml-5 text-md tracking-[5px] text-[#360C36] drop-shadow-lg">Adoptables</p>

                        </button>
                    </div>



                {/*Terms of Service*/}
                
                    <div id="TOSbtn" className="z-3 stagger-scls flex flex-row items-center hidden ">
                    <button id="abiereverie"  className="flex items-center px-1 text-center text-[1px] md:tracking-[5px] sm:tracking-[3px] sm:text-[10px] md:text-xs lg:text-sm lg:tracking-[7px] text-[#360C36]/0 sm:text-[#360C36]">
                        
                    
                        <div onClick={openTOS}  className="flex items-center justify-center text-white sm:h-11.5 sm:w-11.5 md:h-13 md:w-13 h-13 w-13 rounded-full backdrop-blur-sm hover:shadow-xs hover:drop-shadow-md  bg-transparent drop-shadow-xl hover:drop-shadow-[#360c36]/30 drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
                        <ScrollText size={30} className="drop-shadow-xl drop-shadow-[#ff1f6285]/50 text-white/85 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></ScrollText>
                        </div>
                        

                        <p className="hidden lg:flex ml-5 text-md tracking-[5px] text-[#360C36] drop-shadow-lg">Terms of Service</p>
                        <p className="hidden md:flex lg:hidden ml-5 text-md tracking-[5px] text-[#360C36] drop-shadow-lg">ToS</p>
                        

                        </button>
                    </div>
                </div>

                

               
                 {/*LEFT Art preview EXPANDS oval bottom left*/}
                    <div id="smol_artpreview" className=" z-1 hidden  flex-row items-center justify-center mt-57 lg:mt-10 ">
                    <div id="artpreview_container"  className="flex flex-row  justify-center items-center ">

                        {/*Art Preview Cards*/}
                        <div className="w-full ml-3 mt-1 sm:-ml-3 md:-ml-0 lg:-ml-10 sm:mt-5 md:mt-3 z-4 items-center justify-center grid grid-cols-3 gap-1 sm:hover:w-100 sm:hover:ml-2  hover:gap-3 transition-all duration-700">
                            
                        {/*ARTPreview Card 1*/} 
                        <div className="stagger-artcrd-m z-2 h-23 w-18  sm:w-25 sm:h-40 md:w-35 md:h-50 lg:w-30 lg:h-40    rounded-full bg-white shadow-md">
                        <img src="src/assets/avl_wip.png" className="rounded-full h-full w-full object-cover pointer-events-none "></img>
                     
                        </div>

                         {/*ARTPreview Card 1*/} 
                        <div className="stagger-artcrd-m z-2 h-23 w-18  sm:w-25 sm:h-40 md:w-35 md:h-50 lg:w-30 lg:h-40     rounded-full bg-white shadow-md">
                        <img src="src/assets/avl_wip.png" className="rounded-full h-full w-full object-cover pointer-events-none "></img>
                     
                        </div>

                         {/*ARTPreview Card 1*/} 
                        <div className="stagger-artcrd-m z-2 h-23 w-18  sm:w-25 sm:h-40 md:w-35 md:h-50 lg:w-30 lg:h-40    rounded-full bg-white shadow-md">
                        <img src="src/assets/avl_wip.png" className="rounded-full h-full w-full object-cover pointer-events-none "></img>
                     
                        </div>

                     </div>

                    </div>
                    </div>

                {/*ART SOCIALS Desktop*/}
                    <div id="art_socials" className="hidden  items-center">
                    <div id="art_more" className=" flex flex-row gap-5 items-center justify-center w-60 h-15 sm:w-43 sm:h-15 rounded-full  backdrop-blur-xl bg-[#dfd9df]/5  shadow-lg shadow-white border-[2px] border-t-white/90 border-l-white/50 border-r-white/50 border-b-white/20 ">
                        
                        <a target="_blank" href="https://bsky.app/profile/abiereverie.bsky.social"  className="cursor-pointer">
                            <TbBrandBluesky size={28} className=" text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></TbBrandBluesky>
                        </a>

                        <a target="_blank" href="https://ph.pinterest.com/abiereverie/" className="cursor-pointer">
                            <RiPinterestLine size={28} className=" text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></RiPinterestLine>
                        </a>

                         <a target="_blank" href="https://www.instagram.com/abiereverie/">
                            <FaInstagram size={28}  className=" text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></FaInstagram>
                        </a>

                      
                    </div>
                    </div>

                       {/*ART SOCIALS MOBILE*/}
             <div id="art_socials_m" className="art_socials_m flex sm:hidden absolute items-center justify-center -bottom-85 -left-3 hidden">
                <div id="art_more" className=" flex flex-row gap-7 items-center justify-center w-50 h-13 sm:w-80 sm:h-17 rounded-full backdrop-blur-xl bg-[#dfd9df]/30  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 ">
                    <a target="_blank" href="https://bsky.app/profile/abiereverie.bsky.social"  className="cursor-pointer">
                            <TbBrandBluesky size={30} className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></TbBrandBluesky>
                        </a>
                        
                        <a target="_blank" href="https://ph.pinterest.com/abiereverie/" className="cursor-pointer">
                            <RiPinterestLine size={30} className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></RiPinterestLine>
                        </a>

                         <a target="_blank" href="https://www.instagram.com/abiereverie/">
                            <FaInstagram size={30} className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"></FaInstagram>
                        </a>

                    </div>
                </div>
            

               
            </div>

             

                {/*------------------------------------------GALLERY-----------------------------------*/}
                <AnimatePresence>
                {GalleryOpen && ( 
                        <motion.div
                      
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        id="gallery"  className="fixed inset-0 flex flex-col gap-0 items-center justify-center bg-[#ffff]/30 backdrop-blur-[90px] z-100">  
                

                                    
                {/*-----E X I T  button (w/ movbile ver.)-----*/} 
                        <div id="exitbtncontainer" className="z-50 hidden sm:flex absolute top-10 right-10"  >
                        <button type="button" onClick={closeGallery} className="flex items-center justify-center h-11.5 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>
                                        
                        <div id="exitbtncontainer" className="sm:hidden z-50 absolute flex top-6 right-6"  >
                        <button type="button" onClick={closeGallery} className="flex items-center justify-center h-11.5 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>

                        
                     

                    
                     {/*------------------KYARA ILLUST DRAGGABLE SLIDER------------------------------------------------*/}
                            <div id="DraggableCardSlider" className="scale-95 mt-25 mb-10">
                             
                                <span className="absolute px-5 -mt-7 text-[20px] md:text-[20px] tracking-[3px] bg-white rounded-full">Character Illustrations</span>
                               <motion.div ref={slider} whileTap={{cursor: "grabbing"}} className="mask-x-from-80% mask-x-to-100% flex flex-row  overflow-hidden w-screen lg:w-250 xl:w-300  cursor-grab">
                                   <motion.div 
                                   drag="x" 
                                   dragConstraints={{right: 0, left:-width}} 
                                   className="inner_slider flex flex-row gap-5 bg-transparent px-5 py-5 rounded-4xl ">
                                       {characterillust.map((c) => {
                                       
                                           return(
                                                 
                                               <motion.div key={c.img}  className="item flex items-center justify-center w-50 h-70  md:h-75 md:w-48 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500 overflow-clip">
                                               
                                                   <LazyLoadImage loading="lazy" src={c.img} id="img" className="w-full h-full object-cover pointer-events-none"></LazyLoadImage>
                                               </motion.div>
                                           );
                                       })}
                                   </motion.div>
                               </motion.div>
                            </div>
               {/*------------------OTHER ILLUST DRAGGABLE SLIDER------------------------------------------------*/}
                            <div id="DraggableCardSlider" className="scale-95">
                             
                                <span className="absolute px-5 -mt-7 text-[20px] md:text-[20px] tracking-[3px] bg-white rounded-full">Others</span>
                               <motion.div ref={slider} whileTap={{cursor: "grabbing"}} className="mask-x-from-80% mask-x-to-100% flex flex-row  overflow-hidden  w-screen lg:w-250 xl:w-300 cursor-grab">
                                   <motion.div 
                                   drag="x" 
                                   dragConstraints={{right: 0, left:-width}} 
                                   className="inner_slider flex flex-row gap-5 bg-transparent py-5 rounded-4xl ">
                                       {other.map((i) => {
                                       
                                           return(
                                                 
                                               <motion.div key={i.img}  className="item flex items-center justify-center w-50 h-70  md:h-75 md:w-48 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500 overflow-clip">
                                       
                                                   <LazyLoadImage loading="lazy" src={i.img} id="img" className="w-full h-full object-cover pointer-events-none"></LazyLoadImage>
                                               </motion.div>
                                           );
                                       })}
                                   </motion.div>
                               </motion.div>
                            </div>
                    </motion.div>
                                    
                                )}
                </AnimatePresence>
                {/*------------------------------------------GALLERY END-----------------------------------*/}

                {/*------------------------------------------Adoptables-----------------------------------*/}
                <AnimatePresence>
                {AdoptablesOpen && ( 
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        id="gallery"  className="fixed inset-0  flex flex-col items-center justify-center bg-[#ffff]/30 backdrop-blur-[90px] z-100">  
                
                                    
                {/*-----E X I T  button (w/ movbile ver.)-----*/} 
                        <div id="exitbtncontainer" className="hidden sm:flex absolute top-10 right-10"  >
                        <button type="button" onClick={closeAdoptables} className="flex items-center justify-center h-11 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>
                                        
                        <div id="exitbtncontainer" className="sm:hidden absolute flex top-6 right-6"  >
                        <button type="button" onClick={closeAdoptables} className="flex items-center justify-center h-11 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>

                <p className="z-10 absolute flex items-center justify-center text-[#360C36] text-center text-3xl">Prettier, cuter designs are coming soon!</p>

                                 {/*Preview Cards*/}
              <div className="opacity-50 left-0 right-0 flex-wrap items-center mt-5 justify-center flex flex-cols-1 gap-3 sm:gap-5 md:grid-cols-5 py-5 blur-lg ">

                {/*Preview Card 1*/} 
                 <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                   
                 </div>

                {/*Preview Card 2*/} 
                <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                   
                 </div>


                {/*Preview Card 3*/} 
                   <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    
                     
                 </div>

                 {/*Preview Card 4*/} 
                 <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                  
                     
                 </div>
                 
                 {/*Preview Card 5*/} 
                   <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                   
                     
                 </div>
                 

               
                   
                
             </div>

                                    
                    
                
                    </motion.div>
                                    
                                )}
                </AnimatePresence>
                {/*------------------------------------------Adoptables-----------------------------------*/}

                {/*------------------------------------------Terms of Service-----------------------------------*/}
                <AnimatePresence>
                {TOSOpen && ( 
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        id="gallery"  className="fixed inset-0  flex flex-col items-center justify-center bg-[#ffff]/30 backdrop-blur-[90px]  z-100">  
                
                                    
                {/*-----E X I T  button (w/ movbile ver.)-----*/} 
                        <div id="exitbtncontainer" className="hidden sm:flex absolute top-10 right-10"  >
                        <button type="button" onClick={closeTOS} className="flex items-center justify-center h-11 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>

                 {/*-----C O N T E N T-----*/} 

                        <ScrollText size={90} className=" text-white drop-shadow-sm drop-shadow-[#360c36]/40"></ScrollText>
                        <h4 className=" text-[#360c36]/90 mb-10 text-2xl drop-shadow-sm drop-shadow-[#360c36]/40">Terms of Service</h4>

                        <div className="bg-white/85 w-90 h-150 lg:h-125 lg:w-1/2 md:w-135 md:h-125 sm:w-120 sm:h-125 rounded-xl overflow-y-auto">
                        <p className="overflow-y-auto text-[#360c36] p-10 sm:p-15 text-justify">

                            Thank you for your interest in my work! These Terms of Service (TOS) are here to ensure that both you (the client) and I (the artist) are on the same page from start to finish. <br></br><br></br> By commissioning me, you agree to the following terms.


                            Please read them carefully. If you have any questions, feel free to reach out before placing an order.
                            <br></br><br></br>

                            <span className="text-bold text-xl tracking-[3px] ">GENERAL</span><br></br>
                            When you commission me, you're purchasing a digital art service—not the rights to the artwork itself.


                            I reserve the right to accept or decline commissions based on availability, content, or comfort level.


                            I will share the completed work on my portfolio or social media.


                            If you need your commission to stay private or under NDA, please let me know in advance.

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">PAYMENTS</span><br></br>
                            Full payment (100%) is required upfront to secure your spot on my commission queue.


                            Payment methods will be clearly communicated. Any transfer or processing fees are your responsibility.


                            Some elements—such as complex armor, weapons, detailed designs, or intricate effects—will incur an additional charge when I finally create a form for add ons. We’ll discuss this before you pay.


                            Rush orders are available when my schedule allows and require a +15% fee.

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">REVISIONS</span><br></br>
                            Note: This is a "Surprise Me"
                            No WIP updates + minor mistake fixes only.



                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">DEADLINES & DELIVERY</span><br></br>
                            Completion times vary based on complexity and current workload. I’ll give you an estimated delivery timeframe when you book.


                            If you need your piece done by a specific date (like a birthday or event), please let me know before payment.


                            Rush delivery is only possible if pre-arranged and confirmed.


                            All artwork is delivered digitally in high resolution via email or a shared drive link. No physical products are sent.

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">USE</span><br></br>


                            <span className="text-bold text-xl tracking-[3px] text-[#ff1f62ac]  ">You MAY:</span><br></br>
            
                            ✔ Use the artwork for personal, non-commercial purposes like profile pictures, wallpapers, or posting with credit.
                            <br></br>
                            ✔ Share the artwork on social media, provided you credit me clearly as the artist.
                            <br></br>
                            <br></br>
                            <span className="text-bold text-xl tracking-[3px] text-[#da1550]">You MAY NOT:</span><br></br>
                            ✖ Claim the artwork as your own or remove my signature
                            <br></br>
                            ✖ Alter, trace, or heavily edit the work without permission
                            <br></br>
                            ✖ Use the artwork for commercial, promotional, or monetary purposes without a proper license
                            <br></br>
                            ✖ Use the artwork in AI datasets, NFT projects, or blockchain-related content—this is strictly prohibited

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">INTELLECTUAL PROPERTY RIGHTS</span><br></br>
                            I retain full copyright and ownership of all commissioned artwork.


                            A commercial license is required for any use that earns you revenue or promotes a business, brand, or product.


                            Commercial usage fees are as follows:


                            +75% for streaming, branding, or content creation


                            +100% for merchandise, prints, advertising, or resale


                            Unauthorized commercial use of my work may result in termination of our agreement and legal action.

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">REFUNDS</span><br></br>
                            If I’m unable to complete your commission, I’ll issue a full or partial refund depending on the stage of progress.


                            If you choose to cancel before I begin working, you may receive a refund.


                            Once work has started, refunds are generally not available unless I’m unable to continue.


                            Refunds will not be granted due to personal dissatisfaction if clear instructions were not given.

                            <br></br><br></br>
                            <span className="text-bold text-xl tracking-[3px] ">COMMUNICATION</span><br></br>
                            Please be prepared to provide clear references and detailed instructions from the start.

                            <br></br><br></br>
                            Note: My services are a "Surprise Me" type
                            No WIP updates + minor mistake fixes only.

                            <br></br><br></br>
                            If I don’t hear back from you within 7 days during the process, your commission may be delayed or canceled without refund.<br></br><br></br>


                            I aim to treat all clients with respect, and I ask the same in return. Abusive or inappropriate behavior will result in your commission being canceled.<br></br><br></br>


                            By commissioning me, you confirm that you’ve read and accepted all the terms listed above. These terms are in place to ensure a smooth, respectful, and fair creative process for both of us.

                        </p>
                        </div>
                                        
                        <div id="exitbtncontainer" className="sm:hidden absolute flex top-6 right-6"  >
                        <button type="button" onClick={closeTOS} className="flex items-center justify-center h-11.5 w-11.5 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/10 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                        </div>
                                    
                    
                
                    </motion.div>
                                    
                                )}
                </AnimatePresence>
                {/*------------------------------------------Terms Of Service-----------------------------------*/}
                            

                
        
                <div className="z-0 absolute w-50 h-50 sm:w-90 sm:h-90 bg-[#ff1f62ac]/50 blur-[150px] rounded-full -left-10 top-130"></div>
                <div className="z-0 absolute w-30 h-40 sm:w-50 sm:h-50 bg-[#ff1f6285]/45 blur-[120px] rounded-full right-0 -bottom-20"></div>

             {/*M A I N & Center piece*/}
            <div id="center_displaysetup" className="z-1 flex flex-col items-center justify-center sm:pb-0 pb-47">
             

            {/*blush & light bg*/}
                <div id="" className="z-0 absolute hidden flex-col items-center justify-center">
                    <div id="illust_light" className="z-0 hidden  absolute  items-center -top-75 justify-center w-130 h-130 bg-white/70 rounded-full blur-[15px] "></div>
                    <div id="illust_light"  className="hidden z-0 absolute  items-center justify-center -top-70 w-80 h-80 bg-white rounded-full blur-[70px] animate-[pulse_7s_ease-in-out_infinite] "></div>

                    <div id="illust_blush" className="hidden sm:flex z-0 absolute items-center top-0 sm:-mt-5 md:-mt-20 sm:h-70 sm:w-25 justify-center md:w-83 md:h-90 bg-[#ff1f62ac] rounded-full blur-[70px] animate-[pulse_4s_ease-in-out_infinite]  "></div>
                    <div id="illust_blush"  className="sm:hidden flex  absolute items-center justify-center top-15 w-70 h-23 bg-[#ff1f62ac] blur-[50px]"></div>

                 </div>


                {/*Main Art*/}
                <div id="centerpiece"  className=" z-1 flex items-center justify-center  -mt-0 sm:mt-5 md:mt-13">
                    <div id="main_art_container"  className="flex items-center justify-center animate-float w-80 h-80 md:h-90 md:w-100  rounded-[50px] backdrop-blur-xl bg-[#ffff]/40  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 ">
                        <LazyLoadImage id="main_art" src={artarray[mainart]} className="z-10 flex items-center justify-center left-0 right-0 -mt-20 md:-mt-30 rounded-[50px]  w-80 h-100 md:h-120 md:w-100  object-cover pointer-events-none"></LazyLoadImage>
                    </div>
                    <div id="illust_shadow" className="z-0 flex absolute items-center -bottom-15 sm:-bottom-16 md:-bottom-10 lg:-bottom-10 justify-center w-60 h-3 sm:w-67 sm:h-5 md:w-90 md:h-5 bg-[#573957]  rounded-full blur-[20px] animate-[pulse_4s_ease-in-out_infinite]"></div>
                </div>

            
              {/*⭐NEW test*/}
        
                <div className="circularstack z-1 absolute flex items-center justify-center w-screen h-65 overflow-clip bottom-25 sm:-bottom-30 md:-bottom-25 ">
                    <div className="flex items-center justify-center">
              
                {/*layer 1*/}
                    <div  className="z-3 absolute flex flex-row items-center justify-center mt-125 sm:mt-145 animate-[spin_20s_ease-in-out_infinite] hover:[animation-play-state:paused]">
                    <button  className="z-1 flex items-center justify-center h-15 w-15 rounded-xl sm:mr-155 mr-125 rotate-90 backdrop-blur-2xl  hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                     <img src="https://cdn.brandfetch.io/idScVNrJGS/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" className="opacity-90 px-1 py-1 rounded-xl rotate-180 "></img>
                    </button>

                    <button  className="z-1 flex items-center justify-center h-15 w-15 rounded-xl backdrop-blur-2xl -rotate-90   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent   shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                    <img src="https://cdn.brandfetch.io/idScVNrJGS/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" className="opacity-90 px-1 py-1 rounded-xl -rotate-180 "></img>
                    </button>

                {/*layer 2*/}
                    <div  className="z-3 absolute flex flex-row items-center justify-center sm:-mt-115 -mt-100">
                    <button className="z-1 flex items-center justify-center h-15 w-15 rounded-xl sm:mr-110 mr-80 -rotate-225 backdrop-blur-2xl  hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                    <img src="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" className="opacity-90 px-2 py-2 -rotate-195"></img>
                    </button>

                    <button  className="z-1 flex items-center justify-center h-15 w-15 rounded-xl backdrop-blur-2xl rotate-225   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                    <TfiWrite className="z-2 text-[#e2547f85] h-9 w-9 md:h-10 md:w-10 opacity-90 rotate-180"></TfiWrite>
                    </button>
                    </div>

                {/*layer 3*/}
                    <div  className="z-3 absolute flex flex-row items-center justify-center sm:mt-115 mt-100">
                    <button  className="z-1 flex items-center justify-center h-15 w-15 rounded-xl sm:mr-110 mr-80 rotate-45 backdrop-blur-2xl  hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                    <TfiWrite className="z-2 text-[#e2547f85] h-9 w-9 md:h-10 md:w-10 rotate-180 opacity-90"></TfiWrite>
                    </button>

                    <button  className="z-1 flex items-center justify-center h-15 w-15 rounded-xl backdrop-blur-2xl -rotate-45   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                     
                      <img src="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" className="opacity-90 px-2 py-2 rotate-180"></img>
                    </button>
                    </div>


                    <div className="absolute flex flex-col items-center justify-center">
                        <button className="z-1 absolute flex items-center justify-center h-15 w-15 rounded-xl backdrop-blur-2xl sm:-mt-170 -mt-140 rotate-180 hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                        <img src="https://assets.procreate.art/img/procreate-icon-search-display.png" className="opacity-90 object-cover -rotate-180"></img>
                        </button>


                        <button className="z-1 absolute flex items-center justify-center h-15 w-15 rounded-xl backdrop-blur-2xl sm:-mb-170 -mb-140   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
                            <img src="https://assets.procreate.art/img/procreate-icon-search-display.png" className="opacity-90 object-cover rotate-180"></img>
                        </button>

                        <div className="z-0 absolute flex items-center justify-center h-140 w-140 sm:h-170 sm:w-170 border-1 border-white/90 rounded-full"> </div>
                   </div>
                   </div>

                    </div>
               </div>

                {/*⭐NEW test*/}
               <a id="vgen_btn" href="https://vgen.co/abiereverie" target="_blank" className="z-3 absolute flex items-center justify-center bottom-40 sm:-bottom-17 md:-bottom-8 cursor-pointer left-0 right-0 lg:scale-110 ]">
                    <button className="z-1 absolute flex items-center justify-center text-[#360C36] hover:text-white rounded-full h-15 w-57.5 sm:h-13 sm:w-60  px-3.5 bg-white/20 shadow-xl shadow-white/75 drop-shadow-2xl drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:bg-transparent  hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-700 cursor-pointer">
                        <img src="https://help.vgen.co/hc/article_attachments/13004231445911" className="sm:h-10  h-10 mr-1"></img>
                        <p className="text-[15px] sm:text-[15px]  px-1 tracking-[3px]">Visit my VGen!</p>
                    </button>

                    <button className="z-0 absolute flex items-center justify-center rounded-full h-10 w-54 sm:h-10 sm:w-35 md:h-9 md:w-40 lg:h-10 lg:w-50  px-3.5 text-[#ffffff] bg-[#ff1f62ac]/50 blur-md shadow-lg shadow-white border-[5px] border-white animate-[pulse_3s_ease-in-out_inifinite]">
                    </button>
               </a>

 
            

        
       

          
            </div>

  
            
             {/*------------------DRAGGABLE CARD SLIDER------------------------------------------------*/}
                                 <div id="DraggableCardSlider" className="absolute top-0 opacity-0">
                                      <span className="absolute opacity-0">Other Projects</span>
                                    <motion.div ref={slider} whileTap={{cursor: "grabbing"}} className="opacity-0 mask-x-from-80% mask-x-to-100% flex flex-row overflow-hidden  w-screen lg:w-250 xl:w-300  cursor-grab">
                                        <motion.div 
                                        drag="x" 
                                        dragConstraints={{right: 0, left: -width}} 
                                        className="inner_slider flex flex-row gap-5 bg-transparent px-5 py-5 rounded-4xl ">
                                            {data.map((d) => {
                                                return(
                                                      
                                                    <motion.div key={d.img} className="item flex items-center justify-center w-50 h-70  md:h-85 md:w-58 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500 overflow-clip">
                                                          
                                                            <div className="absolute bottom-15 sm:bottom-17 left-0 m-4 pl-1 pointer-events-none ">
                                                       
                                                            <span className="text-white/90 tracking-[3px] text text-2xl md:text-[30px] ">{d.title}</span>
                                                             
                                                            <br></br>
                                                            <div className="flex items-center text-white/60 text-xs sm:text-sm  md:text-[16px] -mt-1 md:-mt-1 "><p>{d.desc}</p></div>
                                                           
                                                        </div>
                                                         <span className="z-10 absolute left-0 bottom-9.5 sm:bottom-10.5 m-4 px-1.5 h-5.5 flex items-center justify-center text-[9px] md:text-xs transition-all duration-400 rounded-full text-[#ff9dc1]">
                                                            {d.stack}
                                                           
                                                        </span>
                    
                                                         <div className="absolute flex items-center justify-center bottom-5 scale-130 sm:scale-100">
                                                            <a href={d.link} target="_blank" className="z-10 w-30 sm:w-40 md:w-47 sm:py-1 flex items-center justify-center bg-white/80 hover:bg-transparent text-sm tracking-[3px] transition-all duration-400 rounded-full border-1 border-transparent hover:border-white/80 hover:text-white text-[#360e3e] cursor-pointer">
                                                            {d.btnlbl}
                                                            </a>
                                                         </div>
                                                         
                                                        <img src={d.img} className="w-full h-full object-cover pointer-events-none "></img>
                                                    </motion.div>
                                                );
                                            })}
                                        </motion.div>
                                    </motion.div>
                                 </div>


         {/*Right side*/}
        <div id="illust_right"  className="z-3 absolute hidden sm:flex flex-col  items-center justify-center sm:right-5 md:right-15">

          {/*Controls*/}
            <div className="z-3 flex items-center justify-center sm:-mt-10 md:-mt-24 lg:-mt-3">
             <div id="illust_nav" className=" flex flex-row lg:gap-3 items-center justify-center">

            <button onClick={()=>DecrementArt()} className="z-1 flex items-center justify-center h-11 w-11 rounded-full  backdrop-blur-2xl  hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent drop-shadow-xl drop-shadow-[#360c36]/70 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
               <ChevronLeft className=" text-white h-full w-full px-1.5 font-extrabold"></ChevronLeft>
            </button>

             {/*Left*/}
            <button  className="z-1 flex items-center justify-center h-17 w-17 drop-shadow-lg">
               <AiFillPicture className=" text-white h-full w-full px-2 font-extrabold"></AiFillPicture>
            </button>

             <button onClick={()=>IncrementArt()}  className="z-1 flex items-center justify-center h-11 w-11 rounded-full backdrop-blur-2xl   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent drop-shadow-xl drop-shadow-[#360c36]/70 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">
               <ChevronRight className=" text-white h-full w-full px-1.5 font-extrabold"></ChevronRight>
             </button>
      


        <div className="z-0 absolute h-30 w-30 lg:h-33 lg:w-33 border-1 border-white rounded-full"></div>
        </div>
        </div>

        </div>


         

        
        {/*Controls mobile*/}
        <div id="illust_nav_m" className="z-3 sm:hidden absolute flex flex-row items-center justify-center right-3 -bottom-8 pb-10">
            <button onClick={()=>DecrementArt()} className="z-1 flex items-center justify-center h-11 w-11 rounded-full  backdrop-blur-2xl  hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent drop-shadow-xl drop-shadow-[#360c36]/70 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
               <ChevronLeft className=" text-white h-full w-full px-1.5 font-extrabold"></ChevronLeft>
            </button>

             {/*Left*/}
            <button  className="z-1 flex items-center justify-center h-17 w-17 drop-shadow-lg">
               <AiFillPicture className=" text-white h-full w-full px-2 font-extrabold"></AiFillPicture>
            </button>

             <button onClick={()=>IncrementArt()}  className="z-1 flex items-center justify-center h-11 w-11 rounded-full backdrop-blur-2xl   hover:bg-white/20 hover:shadow-xs hover:drop-shadow-md hover:drop-shadow-[#360c36]/30  bg-transparent drop-shadow-xl drop-shadow-[#360c36]/70 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500">
               <ChevronRight className=" text-white h-full w-full px-1.5 font-extrabold"></ChevronRight>
             </button>
        
              <div className="z-0 absolute h-25 w-25 border-1 border-white rounded-full"> </div>

        </div>

       </div>

        {/*C o n t a c t PAGE */}

        <div id="contactpg"  className="hidden sm:flex absolute  flex-col items-center justify-center w-screen lg:h-screen xl:h-screen sm:h-screen md:h-screen overflow-hidden xl:mt-100 lg:mt-100 md:mt-185 sm:mt-115">
                
                <div id="contact"  className="z-3  absolute flex flex-col items-center justify-center bg-white/85 backdrop-blur-md rounded-[70px]  md:rounded-[60px] lg:rounded-[100px] w-screen sm:h-screen md:h-3/4 md:mt-270 lg:mt-280 xl:mt-270 sm:mt-290  mt-0 overflow-clip shadow-xl">
                    {/*Blush blur bg*/}
                    <div id="contact_blush" className="z-0 absolute flex items-center justify-center top-15 w-50 h-70 sm:w-75 sm:h-95 lg:w-100 lg:h-120   bg-[#ff1f62ac] rounded-full blur-[100px] sm:blur-[150px] "></div>
                    
                    <div className="absolute flex flex-col items-center justify-center w-screen top-55">
                        
                        <button onClick={closeContactpage}   className="hidden absolute items-center justify-center -top-55 animate-pulse cursor-pointer">
                          <ChevronDown size={70} className=" text-white stroke-1 hover:text-[#360C36] transition-all duration-400"></ChevronDown>
                        </button>
                        
                        <h1 className="absolute flex items-center justify-center w-screen mb-45 text-[90px] text-white jacquard-24-regular px-1 tracking-[5px]">Let's Work!</h1>
                         
                        <button onClick={openContactForm} className="z-1 hover:text-white text-[#360C36] rounded-full h-15 w-57 sm:h-13 sm:w-60  px-3.5 bg-white/40 shadow-xl shadow-white/75 drop-shadow-2xl drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:bg-transparent  hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-700 cursor-pointer ">
                            
                        <p className="text-[20px] sm:text-[20px]  px-1 tracking-[3px]">Contact Me</p>
                        </button>

                     

                         <button className="z-0 absolute rounded-full h-10 w-54 sm:h-10 sm:w-35  px-3.5 text-[#ffffff] bg-[#ff1f62ac]/70 blur-[15px] shadow-lg shadow-white  animate-[pulse_3s_ease-in-out_inifinite]">
                            
                        
                        </button>
                         <span className='mt-65 absolute text-sm text-white text-center'>©2026 Abigail Claud Reyes. All rights reserved.</span>
                       
                       

                       
                    </div>
                </div>

            </div>


              {/*C o n t a c t page MOBILE -----------------------------------------------------------------------------------*/}

        <div  className="absolute sm:hidden flex flex-col items-center justify-center w-screen h-screen overflow-hidden  -bottom-65">
                
                <div id="contactmobile"  className="z-3  absolute flex flex-col items-center justify-center bg-white/85 backdrop-blur-md rounded-[70px]  md:rounded-[60px] lg:rounded-[100px] w-screen h-screen  mt-350 overflow-clip shadow-xl">
                    {/*Blush blur bg*/}
                    <div id="abt_blush" className="z-0 flex items-center justify-center text-center w-50 h-70 sm:w-100 sm:h-120 -mt-90 sm:-mt-15  bg-[#ff1f62ac] rounded-full blur-[100px] sm:blur-[150px] "></div>
                    
                    <div className="absolute flex flex-col items-center justify-center w-screen lg:-mt-30 -mt-70">
                        
                        <button onClick={closeContactpagem}   className="absolute hidden items-center justify-center -top-55 animate-pulse cursor-pointer">
                          <ChevronDown size={70} className=" text-white stroke-1 hover:text-[#360C36] transition-all duration-400"></ChevronDown>
                        </button>

                        <h1 className="absolute flex items-center justify-center w-screen mb-35 text-[60px] text-white jacquard-24-regular px-1 tracking-[5px]">Let's Work!</h1>
                         
                        <button onClick={openContactForm} className="z-1 hover:text-white text-[#360C36] rounded-full h-15 w-57 sm:h-13 sm:w-60  px-3.5 bg-white/40 shadow-xl shadow-white/75 drop-shadow-2xl drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:bg-transparent  hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-700 cursor-pointer ">
                          <p className="text-[20px] sm:text-[20px]  px-1 tracking-[3px]">Contact Me</p>
                        </button>


                         <button className="z-0 absolute rounded-full h-10 w-54 sm:h-10 sm:w-35  px-3.5 text-[#ffffff] bg-[#ff1f62ac]/70 blur-[15px] shadow-lg shadow-white  animate-[pulse_3s_ease-in-out_inifinite]"></button>
                         <span className='mt-45 absolute text-xs text-white text-center'>©2026 Abigail Claud Reyes. All rights reserved.</span>
                       
                    </div>
                </div>

            </div>


             {/*C o n t a c t FORM */}
               <AnimatePresence>
                  {ContactFormOpen && ( 
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    id="contact"  className="fixed inset-0  flex flex-col items-center justify-center bg-[#eae6ea]/50 backdrop-blur-2xl z-100">  

                      
                      {/*Contact header*/}
                        <p className="sm:top-20 top-30 absolute flex items-center justify-center  text-[#360C36] sm:drop-shadow-xs sm:text-xl text-2xl drop-shadow-[#270c166a] ">ꗃ Feature Unlocked</p>
                        <p className="sm:top-30 top-40 absolute flex items-center justify-center text-center  text-[#360C36] sm:drop-shadow-xs  drop-shadow-[#270c166a] sm:text-sm text-md sm:p-0 sm:py-0 px-15 py-5">Congrats! You are 1 email away from turning reverie into reality with me!</p>

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
                              className="lg:w-55 sm:w-53 w-70  sm:h-10 tracking-[5px] rounded-full text-white/100 placeholder-white/100  caret-[#d1a4b1] text-sm bg-[#ff1f6285]/16 active:bg-[#ff1f6285]/15 backdrop-blur-xl  focus:bg-white/20 focus:text-[#360C36]/90 focus:outline-none   shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 px-5 py-2 transition-all duration-300"></input>
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
                              className="lg:w-70 sm:w-65  sm:h-10 w-70  tracking-[5px] rounded-full text-white/100 placeholder-white/100 caret-[#d1a4b1] text-sm bg-[#ff1f6285]/16 backdrop-blur-xl  focus:bg-white/20 focus:text-[#360C36]/90 focus:outline-none   shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 px-5 py-2 transition-all duration-300"></input>
                            </div>

                            {/*-----E X I T  button (w/ movbile ver.)-----*/} 
                            <div id="exitbtncontainer" className="hidden sm:flex lg:ml-65 sm:ml-20"  >
                              <button type="button" onClick={closeContactForm} className="flex items-center justify-center h-11 w-11 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#360C36]/8 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
                            </div>

                              <div id="exitbtncontainer" className="sm:hidden absolute flex top-6 right-6"  >
                              <button type="button" onClick={closeContactForm} className="flex items-center justify-center h-11.5 w-11.5 text-white/90 text-lg rounded-full backdrop-blur-sm bg-[#c10840]/1 hover:bg-[#da1550]/10 hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#c10840]/60  drop-shadow-xl  shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer"><X size={25}/></button>
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
                                <button type="submit" className="flex items-center justify-center h-14 w-50 sm:h-11 sm:w-35 mr-3 text-white/90 sm:text-lg text-2xl rounded-full backdrop-blur-lg bg-[#360C36]/8 hover:bg-transparent hover:shadow-xs hover:drop-shadow-sm hover:drop-shadow-[#360c36]/30  drop-shadow-xl drop-shadow-[#360c36]/20 shadow-xl shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 cursor-pointer">Send <Send className="ml-2" size={25}/></button>
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

       
              
    </section>
};
