import csm from "../assets/csm.png"
import { useRef, useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, CodeXml, ExternalLink, Info, Layers, Link} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import data from "./data"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


gsap.registerPlugin(ScrollTrigger)

const tech1 ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png?20170517184425";
const tech2 ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649";
const tech3 ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042";
const tech4 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207";
const tech5 ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/615px-Vitejs-logo.svg.png?20220412224743";

const img1 ="https://media3.giphy.com/media/0kM3axa2wdtgnmXQES/giphy.gif";
const img2 =csm
const img3 ="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmlpdGhhdWIzYmRlMXlodWFvdGt2YTdjbjN2OWtlNDdua3prNnFociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CjQSYDGguCRjz1pUpT/giphy.gif";

const link1 = "https://abielieveinjesus.github.io/milk-hero-ui"
const link2 = "https://sites.google.com/view/deped-val-csm-site/guest";
const link3 = "https://abielieveinjesus.github.io/luv-home/"

const vid1 = null;
const vid2 = null;
const vid3 = "https://youtu.be/ksEgkd_k-hQ";


const cinfo1 =<p>A Hero Section for Milk — A Bible study board web app. (Web App in Planning stage.)</p>;
const cinfo2 =<p>The Client Satisfaction Measuring System for DepEd Valenzuela. I designed the banner too!</p>;
const cinfo3 =<p>A Home page for LUV — An anti-AI mimicry software (A concept.)</p>;

const ctitle1 =<p>SDO Valenzuela Website.</p>;
const ctitle2 =<p>Client Satisfaction Measurement System</p>;
const ctitle3 =<p>Client Satisfaction Measurement Dashboard</p>;


const tech31 ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042";
const tech32 ="https://upload.wikimedia.org/wikipedia/commons/4/47/Google_Sites_%282014-2020%29.svg"
const tech33 ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042";


const tech41 ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/779px-Vitejs-logo.svg.png";
const tech42 ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/960px-Google_Apps_Script.svg.png";
const tech43 ="https://cdn.brandfetch.io/idZHcZ_i7F/w/320/h/320/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B";


const tech51 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207";
const tech52 ="https://www.svgrepo.com/show/354012/looker-icon.svg";
const tech53 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207";

//gsap
const tech61 ="data:image/png;base64,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";
const tech62 ="https://cdn.brandfetch.io/idEX_duTsQ/w/120/h/120/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
const tech63 ="data:image/png;base64,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";


//spline
const tech71 ="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B";
const tech72 =null
const tech73 ="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B";

//motion
const tech81 ="https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B";
const tech82 =null
const tech83 ="https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B";

const tech3array = [tech31,tech32,tech33,]
const tech4array = [tech41,tech42,tech43,]
const tech5array = [tech51,tech52,tech53,]
const tech6array = [tech61,tech62,tech63,]
const tech7array = [tech71,tech72,tech73,]
const tech8array = [tech81,tech82,tech83,]

const linkarray = [link1,link2,link3];

const carouseltitlearray = [ctitle1,ctitle2,ctitle3];

const carouselinfoarray = [cinfo1,cinfo2,cinfo3];

const imgarray = [img1,img2,img3];

const vidarray = [vid1,vid2,vid3];


const techstack1 = [tech1, tech2, tech3, tech4, tech5];
const techstack2 = [tech2, tech2, tech2, tech2, tech5];
const techstack3 = [tech3, tech3, tech3, tech3, tech3];
const techstack4 = [tech4, tech4, tech4, tech4, tech4];
const techstack5 = [tech5, tech5, tech5, tech5, tech5];

const techstack = [techstack1, techstack2, techstack3, techstack4, techstack5];

const WorksCarousel = () => {
   const[Cinfo,setCinfo] = useState(0);
    const[Clink,setClink] = useState(0);
    const[Ctitle,setCtitle] = useState(0);

    const[Ctech3,setTech3] = useState(0);
    const[Ctech4,setTech4] = useState(0);
    const[Ctech5,setTech5] = useState(0);
    const[Ctech6,setTech6] = useState(0);
    const[Ctech7,setTech7] = useState(0);
    const[Ctech8,setTech8] = useState(0);
  
    const[midimage,setMidImage] =useState(0);
    const[rightimage,setRightImage]=useState(1);
    const[leftimage,setLeftImage]=useState(imgarray.length-1);
    const[midvid,setMidVid] =useState(0);

      useGSAP(() => {

            gsap.fromTo('#middleimage', {
                x:0,
                y:300,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                delay:1,
                
                 ease: 'power1.inOut',
                   

                 scrollTrigger:{
                  trigger:"#rightimage",     
                 },
          })

        
            gsap.fromTo('#leftimage', {
                x:0,
                y:300,
                opacity:0,
                
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                  delay:1.5,
                 ease: 'power1.inOut',

                 scrollTrigger:{
                  trigger:"#leftimage"
                 },
          })

          
            gsap.fromTo('#rightimage', {
                x:0,
                y:300,
                opacity:0,
                
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                   delay:1.5,
                 ease: 'power1.inOut',

                 scrollTrigger:{
                  trigger:"#rightimage"
                 },
          })

          
    const tlci = gsap.timeline({
        scrollTrigger: {
            trigger:"#rightimage"
        }
    });

             tlci.fromTo('#carousel_navbtns', {
                x:0,
                y:0,
                z:10,
                opacity:0,
                
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                delay:1.5,
                duration:1,
                 ease: 'power1.inOut',

                 
          })
         

            .fromTo('.carousel_info', {
                x:0,
                y:0,
                opacity:0,
                
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                 ease: 'power1.inOut',

                
          })

          

        
          
    
     }, []);


    useGSAP(()=>{

        if(midimage == 0){
            setLeftImage(imgarray.length-1)
            setRightImage(1);
        }
        else if(midimage == imgarray.length-1)
        {
            setRightImage(0);
            setLeftImage(midimage-1);
        }
        else{
            setRightImage(midimage+1);
            setLeftImage(midimage-1);
        }

        
        
    },[midimage]);

   const Increment=()=>{


        if(midimage == imgarray.length-1){
            setMidImage(0);
            
        }
        else{
            setMidImage(midimage+1);
        }

          if(midvid == vidarray.length-1){
            setMidVid(0);
            
        }
        else{
            setMidVid(midvid+1);
        }


        if(Cinfo == carouselinfoarray.length-1){
            setCinfo(0);
        }
        else{
            setCinfo(Cinfo+1);
        }
        
         if(Ctitle == carouseltitlearray.length-1){
            setCtitle(0);
        }
        else{
            setCtitle(Ctitle+1);
        }

          if(Clink == linkarray.length-1){
            setClink(0);
        }
        else{
            setClink(Clink+1);
        }

      
       


         gsap.fromTo('#middleimage',
            {x:200,opacity:0.3,scale:0.9},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
        gsap.fromTo('#rightimage',
            {x:-200,opacity:0.3,scale:0.9},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
        gsap.fromTo('#leftimage',
            {x:200,opacity:0.3,scale:1.1},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
          gsap.fromTo('.stagger-box',
            {x:-50,opacity:0,scale:1},
            {x:0,opacity:1,scale:1,duration:.3,stagger:.3}
        );
         gsap.fromTo('#projectlink_btn',
            {opacity:0,scale:.3},
            {opacity:1,scale:1,duration:.5}
        );



          //Tech Stack

        if(Ctech3 == tech3array.length-1){
            setTech3(0);
        }
        else{
            setTech3(Ctech3+1);
        }

         if(Ctech4 == tech4array.length-1){
            setTech4(0);
        }
        else{
            setTech4(Ctech4+1);
        }

        if(Ctech5 == tech5array.length-1){
            setTech5(0);
        }
        else{
            setTech5(Ctech5+1);
        }

           if(Ctech6 == tech6array.length-1){
            setTech6(0);
        }
        else{
            setTech6(Ctech6+1);
        }
           
        if(Ctech7 == tech7array.length-1){
            setTech7(0);
        }
        else{
            setTech7(Ctech7+1);
        }
           
        if(Ctech8 == tech8array.length-1){
            setTech8(0);
        }
        else{
            setTech8(Ctech8+1);
        }
    }

    


  const Decrement=()=>{
        if(midimage == 0){
            setMidImage(imgarray.length-1);
        }
        else{
            setMidImage(midimage-1);
        }


         if(midvid == 0){
            setMidVid(vidarray.length-1);
        }
        else{
            setMidVid(midvid-1);
        }


         if(Cinfo == 0){
            setCinfo(carouselinfoarray.length-1);
        }
        else{
            setCinfo(Cinfo-1);
        }
         if(Ctitle == 0){
            setCtitle(carouseltitlearray.length-1);
        }
        else{
            setCtitle(Ctitle-1);
        }

          if(Clink== 0){
            setClink(linkarray.length-1);
        }
        else{
            setClink(Clink-1);
        }

        //Tech Stack
          if(Ctech3== 0){
            setTech3(tech3array.length-1);
        }
        else{
            setTech3(Ctech3-1);
        }
         if(Ctech4== 0){
            setTech4(tech4array.length-1);
        }
        else{
            setTech4(Ctech4-1);
        }
         if(Ctech5== 0){
            setTech5(tech5array.length-1);
        }
        else{
            setTech5(Ctech5-1);
        }
         if(Ctech6== 0){
            setTech6(tech6array.length-1);
        }
        else{
            setTech6(Ctech6-1);
        }
         if(Ctech7== 0){
            setTech7(tech7array.length-1);
        }
        else{
            setTech7(Ctech7-1);
        }
         if(Ctech8== 0){
            setTech8(tech8array.length-1);
        }
        else{
            setTech8(Ctech8-1);
        }


        
        gsap.fromTo('#middleimage',
            {x:-200,opacity:0.3,scale:0.9},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
        
        gsap.fromTo('#rightimage',
            {x:-200,opacity:0.3,scale:1.1},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
        gsap.fromTo('#leftimage',
            {x:200,opacity:0.3,scale:0.9},
            {x:0,opacity:1,scale:1,duration:.5}
            
        );
         gsap.fromTo('.stagger-box',
            {x:-50,opacity:0,scale:1},
            {x:0,opacity:1,scale:1,duration:.3,stagger:.3}
        );

        gsap.fromTo('#projectlink_btn',
            {opacity:0,scale:.3},
            {opacity:1,scale:1,duration:.5}
        );
        

       
      
    }

    return(

        <div className="ImageSlider z-1 flex items-center justify center px-10 py-10  md:scale-90 lg:scale-100">
            {/*Scroll prompt*/}
            <div id="scrollprompt" className="flex absolute flex-col items-center justify-center -mt-70  cursor-context-menu opacity-30 left-0 right-0 scale-90">
                <h6 className="hidden items-center justify-center font-Antic text-xs md:text-[13px] text-[#360C36]/50 tracking-[3px] delay-100">Scroll down</h6>
                <ChevronDown size={25} className="animate-bounce block items-center justify-center mt-3 text-[#360c368d]/50  border rounded-full h-20 w-10"></ChevronDown>
            </div>
            <div className="ImageSliderContainer w-auto h-full sm:pt-10  md:pt-20">
                 <div id="dtrigger" className="z-0 opacity-0 -top-30 absolute flex items-center justify-center h-10 w-full bg-black"></div>
                <div className="Images flex flex-row items-center justify-center">

                    <div id="leftimage" className="leftimage z-1 opacity-70 blur-xs flex  items-center justify-center md:-mt-15 bottom-50 drop-shadow-2xl drop-shadow-[#360c366f]/30 mr-67 md:mr-90">
                        <div className="card-container flex items-center justify-center h-77 w-50 md:h-114 md:w-72  rounded-[40px] md:rounded-[60px]  overflow-clip ">
                           
                        
                            <div className="z-2 flex items-center justify-center h-76 w-49 md:h-113 md:w-71 rounded-[38px] md:rounded-[58px]  bg-[#f7eef2] overflow-clip">
                                <img className="pointer-events-none object-cover h-full w-full mask-b-from-0% mask-b-to-80%" src={imgarray[leftimage]}></img>
                            </div>
                        </div>
                     </div>

                    
                    <div className="flex flex-row items-center justify-center absolute">

                          {/*Tech Stack V*/}
                        <div id="tech_stack" className=" z-10 absolute justify-center items-center flex flex-col gap-2 -ml-77 sm:-ml-80 md:-ml-105  sm:gap-3 sm:-mt-5 md:-mt-50  lg:-mt-50 rounded-full  backdrop-blur-xl bg-[#dfd9df]/50  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 sm:px-2.5 sm:py-5 py-2 px-2 sm:scale-70 md:scale-70 lg:scale-85 scale-90">
                        <Layers className="z-2 text-white h-7 w-7 sm:h-10 sm:w-10 "></Layers>
                            <div className="stagger-box z-2 items-center justify-center w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png?20170517184425" className="px-1 py-1 md:px-2  md:py-2"></img></div>
                            <div className="stagger-box z-2 items-center justify-center w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649" className="px-2 py-1 md:px-3 md:py-2" ></img></div>
                            <div  className="stagger-box z-2 items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1452px-Javascript-shield.svg.png" className="px-2 py-1 md:px-2.5 md:py-1.5"></img></div>
                            <div  className="stagger-box z-2 items-center justify-center w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech3array[Ctech3]}  className="px-1 py-1.5 md:px-2 md:py-3.5"></img></div>
                            <div  className="stagger-box z-2 items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech4array[Ctech4]} className="px-1 py-1 md:px-2 md:py-2"></img></div>
                            <div  className="stagger-box z-2 flex items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech5array[Ctech5]} className="absolute px-1 py-1 md:px-1 md:py-1"></img></div>
                            <div  className="stagger-box z-2 items-center justify-center  w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech6array[Ctech6]} className="px-1 py-1 rounded-full"></img></div>
                            <div  className="stagger-box z-2 flex items-center justify-center  w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech7array[Ctech7]} className="px-1 py-1 md:px-2 md:py-2"></img></div> 
                            <div  className="stagger-box z-2 flex items-center justify-center  w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-115 hover:-mr-10 transition-all duration-500"><img src={tech8array[Ctech8]} className="px-1 py-1 md:px-2 md:py-2"></img></div>   
                        </div>

                         {/*Middle Image*/}
                        <div id="middleimage" className="middleimage z-2  absolute flex  items-center justify-center md:-mt-47  drop-shadow-2xl drop-shadow-[#360c366f]">

                            <div className="card-container flex absolute  items-center justify-center  h-90 w-60  rounded-[40px] md:rounded-[60px]  md:h-127 md:w-80 overflow-clip ">
                                
                                <div className="card-animation flex absolute  items-center justify-center h-200 w-200 animate-[spin_5s_ease-in-out_infinite] bg-conic-180 from-[#401e3980] via-white to-[#401e3980]"></div>
                            
                                <div className="z-2 absolute flex items-center  justify-center h-89 w-59 md:h-126 md:w-79 rounded-[38px] md:rounded-[58px]  bg-[#f7eef2] overflow-clip ">
                                   
                                   
                                    <img className="pointer-events-none object-cover h-full w-full" src={imgarray[midimage]}></img>
                                    <span className="absolute hidden items-center justify-center text-center bottom-15 text-[40px] text-[#360c3e]">{carouseltitlearray[Ctitle]}</span>
                                    
                                </div>
                            </div>
                      </div>

                     {/*Links*/}
                     <a target="_blank" href={linkarray[Clink]} className="z-10 absolute bg-transparent ml-77 -mt-85 sm:-mt-85 md:ml-102 md:-mt-160 border-none focus:outline-none">
                                <button id="projectlink_btn" className="z-10 w-12.5 h-12.5 sm:h-11 sm:w-11 md:w-13.5 md:h-13.5 hover:bg-[#dfd7df]/50 text-[#360C36] hover:text-white bg-[#360C36]/8 rounded-full  backdrop-blur-xl shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 transition-all duration-500 focus:outline-none cursor-pointer">
                                    <ExternalLink className="h-full w-full p-2  drop-shadow-sm "></ExternalLink>
                                </button>
                            </a>


                    </div>

                    
                  



                    <div id="rightimage" className="rightimage z-1 opacity-70 blur-xs flex  items-center justify-center md:-mt-15 drop-shadow-2xl drop-shadow-[#360c366f]/30">
                      
                       <div className="card-container flex items-center justify-center h-77 w-50 md:h-114 md:w-72  rounded-[40px] md:rounded-[00px]  overflow-clip ">
                           
                        
                            <div className="z-2 flex items-center justify-center h-76 w-49 md:h-113 md:w-71 rounded-[58px] md:rounded-[58px]  bg-[#f7eef2] overflow-clip">
                                <img className="object-cover pointer-events-none  h-full w-full mask-b-from-0% mask-b-to-80%" src={imgarray[rightimage]}></img>
                            </div>
                        </div>
                     </div>


                </div>

            <div className="carousel_info z-10 absolute flex-row gap-3 left-0 right-0 flex items-center justify-center h-auto py-5 px-0  mt-10 sm:mt-7 scale-80 md:scale-100 md:mt-0">
              <Info className=" text-[#b88392c2] w-9 h-9 sm:w-6 sm:h-6 "></Info>
              <span className='text-[#360C36]'>{carouselinfoarray[Cinfo]}</span> 
            </div>

            <div className="z-3 flex flex-row justify-center md:mt-17 sm:mt-25 mt-30  left-0 right-0  ">
             <div id="carousel_navbtns" className="buttons z-10 bottom-170 flex left-0 right-0  items-center justify-center rounded-full backdrop-blur-xl bg-[#947E94]/10 md:bg-transparent hover:shadow-xl transition-all duration-200 shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 scale-100 sm:scale-80 md:scale-90">
                <button  onClick={()=>Decrement()} className="leftbutton sm:mr-15 mr-15 items-center justify-center focus:outline-none">
                    <ChevronLeft size={33} className="text-white hover:text-white/50 transition-all duration-500"></ChevronLeft>
                </button>
                

                <button onClick={()=>Increment()}  className="rightbutton items-center justify-center focus:outline-none ">
                    <ChevronRight size={33} className="text-white hover:text-white/50 transition-all duration-500"></ChevronRight>
                </button>
             </div>
            </div>



            </div>

        

        </div>
    )
}



export const Websites = () => {


      useGSAP(() => {
            
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger:"#works"
        }
    });

    const tl2 = gsap.timeline({
        delay:1,
        scrollTrigger: {
            trigger:"#rightimage"
        }
    });
            ``
            tl.fromTo('#wrk_header', {
                x:0.5,
                y:0,
                opacity:0.5
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 1,
                
                 ease: 'power1.inOut',
                  
          })

           gsap.fromTo('#wrk_headline', {
                x:0.5,
                y:0,
                opacity:0.5
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration: 0.5,
            
                 ease: 'power1.inOut',
                   
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
                          duration: 1.5,
                          delay:3,
                           ease: 'power1.inOut',
                           scrollTrigger:{
                         
                            trigger: "#wrk_headline",
                           
                           
                           },
                    })


           gsap.fromTo('.wrk_light', {
              
                opacity:0
          }, 
          {
               
                opacity:1,
                duration: 1,
                delay:1,
            
                 ease: 'power1.inOut',
                  scrollTrigger:{
                  trigger: "#middleimage",
                
                 
                 },
               
                   
          })

       

          gsap.fromTo('#web_title', {
                opacity:0
          }, 
          {
                opacity:1,
                duration: 1,
                
                ease: 'power1.inOut',
                 scrollTrigger:{
                  trigger: "#wrk_headline",
                 },
          })

            
           gsap.fromTo('#projectlink_btn', {
                x:0,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration:0.5,
                delay:1,
                ease: 'power1.inOut',
                 scrollTrigger: {
            trigger:"#rightimage"
        }

                 
          })



          
            tl2.fromTo('#tech_stack', {
                x:-50,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration:1,
                ease: 'power1.inOut',

                 
          })

          
          

             tl2.fromTo('.stagger-box', {
                x:-50,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration:.1,
                ease: 'power1.inOut',
                stagger:.1
                 
          })

           gsap.fromTo('#DraggableCardSlider', {
                x:0,
                y:0,
                opacity:0
          }, 
          {
                x: 0,
                y:0,
                opacity:1,
                duration:1,
                delay:2.5,
                ease: 'power1.inOut',
                 scrollTrigger:{
                  trigger: "#tech_stack",
                
                 
                 },
                
                 
          })

          
 
     }, []);

        const [width, setWidth] = useState(0);
        const slider = useRef();

        useEffect(() => {
            console.log(slider.current.scrollWidth, slider.current.offsetWidth);
            setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
        }, []);

        



    return <section id="websites"   className="w-auto flex flex-col items-center justify-center relative bg-linear-to-t from-[#ff1f6226]   to-[#eae6ea]  via-[#ffffff20]  ">
       <div className="w-screen">
        <div className="flex flex-col items-center justify-center px-5 pt-1 ">

            {/*White blur bg*/}
            <div className="wrk_light z-1 hidden sm:flex absolute items-center top-0 justify-center w-150 h-170 bg-white rounded-full blur-[80px]"></div>
            
            <div className="wrk_light sm:hidden z-1 absolute flex items-center justify-center top-0 w-100 h-120 bg-white rounded-full blur-[40px]"></div>
             
            <div className="wrk_light hidden sm:flex absolute items-center top-100 justify-center w-80 h-100 bg-[#ff1f6285] rounded-full blur-[100px]"></div>
            <div className="wrk_light sm:hidden absolute flex items-center justify-center top-90 w-50 h-50 bg-[#ff1f6285]/95 blur-[100px]"></div>


         
            {/*Websites*/}
             <div id="web_title"   className="z-3 flex flex-row px-5  sm:pb-0 md:pb-10 lg:pb-20 pb-3 left-0 right-0 items-center ">
                <CodeXml id="websites_icon"  className="h-full w-9 rounded-full px-1.5 py-1.5 text-[#360c36fc] drop-shadow-[#360C36]/20 drop-shadow-lg mr-3 backdrop-blur-xl bg-[#dfd9df]/80  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20"></CodeXml>
                <h4 id="websites_title"  className="flex items-center justify-center px-2.5 py-1 pl-4.5 rounded-full text-center text-xl sm:text-[25px] tracking-[10px] text-[#360c36fc]  drop-shadow-[#360C36]/20  drop-shadow-lg backdrop-blur-xl bg-[#dfd9df]/80  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20">Websites</h4>
            </div>
        

            {/*Website previews*/}
             {/*Animated card sample*/}
           <WorksCarousel></WorksCarousel>
            
          
             {/*Tech Stack*/}
             <div id="tech_stac" className=" z-1 hidden justify-center items-center  flex-cols-6 gap-1 sm:gap-3 mt-35  sm:mt-37 rounded-full  backdrop-blur-xl bg-[#dfd9df]/70  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 sm:px-5 sm:py-2 py-2 px-3">
             <Layers className="z-2 text-white h-7 w-7 sm:h-10 sm:w-10 "></Layers>
                <div className="stagger-bo z-2 items-center justify-center w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png?20170517184425" className="px-1 py-1 md:px-2  md:py-2"></img></div>
                 <div className="stagger-bo z-2 items-center justify-center w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649" className="px-2 py-1 md:px-3 md:py-2" ></img></div>
                  <div  className="stagger-bo z-2 items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" className="px-1 py-2.5 md:px-2 md:py-3.5"></img></div>
                   <div  className="stagger-bo z-2 items-center justify-center w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl  backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" className="px-1 py-1.5 md:px-2 md:py-2.5"></img></div>
                    <div  className="stagger-bo z-2 items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/615px-Vitejs-logo.svg.png?20220412224743" className="px-1 py-1 md:px-2 md:py-2"></img></div>
                     <div  className="stagger-bo z-2 flex items-center justify-center  w-9 h-9  rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500">
                        <svg className="flex items-center justify-center px-1 py-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 30">
                             <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
                             <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
                             <path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
                             <path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
                        </svg>
                    </div>
                    <div  className="stagger-bo z-2 items-center justify-center  w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://cdn.brandfetch.io/idZ_aiFAYa/w/128/h/128/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" className="px-1 py-1 md:px-2 md:py-2"></img></div>
                    <div  className="stagger-bo z-2 flex items-center justify-center  w-9 h-9 rounded-[8px]  md:h-13 md:w-13 md:rounded-xl backdrop-blur-xl bg-transparent  shadow-lg shadow-white border-[2px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 hover:scale-110 hover:-mt-10 transition-all duration-500"><img src="https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" className="px-1 py-1 md:px-2 md:py-2"></img></div>
                      
             </div>

             
              <p  id="yay_techstack" className="hidden items-center justify-center mt-3 text-center text-xs text-[#360c36fc] tracking-[5px]">My Tech Stack</p>

              {/*Preview Cards*/}
              <div className="hidden z-4 left-0 right-0 flex-wrap items-center mt-5 justify-center flex-cols-1 gap-3 sm:gap-5 md:grid-cols-5 py-5 ">

                {/*Preview Card 1*/} 
                 <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    <div className="ml-33 py-2 md:ml-39 md:px-2 md:py-2">
                           <a href="https://www.figma.com/design/eweTKVHBX2Jiuh546noMgG/Abie-Pawtfolio?node-id=617-289&m=draw" className="z-1 absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#360C36] hover:text-[#d1a4b1] transition-all duration-500 cursor-pointer"><ExternalLink></ExternalLink></a>
                    <button className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#f9a4bd] text-white blur-sm"></button>
                    </div>
                     
                 </div>

                {/*Preview Card 2*/} 
                <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    <div className="ml-33 py-2 md:ml-39 md:px-2 md:py-2">
                           <a href="https://www.figma.com/design/eweTKVHBX2Jiuh546noMgG/Abie-Pawtfolio?node-id=617-289&m=draw" className="z-1 absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#360C36] hover:text-[#d1a4b1] transition-all duration-500 cursor-pointer"><ExternalLink></ExternalLink></a>
                    <button className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#f9a4bd] text-white blur-sm"></button>
                    </div>
                     
                 </div>


                {/*Preview Card 3*/} 
                   <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    <div className="ml-33 py-2 md:ml-39 md:px-2 md:py-2">
                           <a href="https://www.figma.com/design/eweTKVHBX2Jiuh546noMgG/Abie-Pawtfolio?node-id=617-289&m=draw" className="z-1 absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#360C36] hover:text-[#d1a4b1] transition-all duration-500 cursor-pointer"><ExternalLink></ExternalLink></a>
                    <button className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#f9a4bd] text-white blur-sm"></button>
                    </div>
                     
                 </div>

                 {/*Preview Card 4*/} 
                 <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    <div className="ml-33 py-2 md:ml-39 md:px-2 md:py-2">
                           <a href="https://www.figma.com/design/eweTKVHBX2Jiuh546noMgG/Abie-Pawtfolio?node-id=617-289&m=draw" className="z-1 absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#360C36] hover:text-[#d1a4b1] transition-all duration-500 cursor-pointer"><ExternalLink></ExternalLink></a>
                    <button className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#f9a4bd] text-white blur-sm"></button>
                    </div>
                     
                 </div>
                 
                 {/*Preview Card 5*/} 
                   <div className="stagger-card w-45 h-65  md:h-80 md:w-53 rounded-4xl shadow-white/10  shadow-xs drop-shadow-xl  bg-white  hover:shadow-2xl hover:shadow-white transition-all duration-500">
                    <div className="ml-33 py-2 md:ml-39 md:px-2 md:py-2">
                           <a href="https://www.figma.com/design/eweTKVHBX2Jiuh546noMgG/Abie-Pawtfolio?node-id=617-289&m=draw" className="z-1 absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#360C36] hover:text-[#d1a4b1] transition-all duration-500 cursor-pointer"><ExternalLink></ExternalLink></a>
                    <button className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#f9a4bd] text-white blur-sm"></button>
                    </div>
                     
                 </div>
                 
             </div>
            {/*------------------DRAGGABLE CARD SLIDER------------------------------------------------*/}
             <div id="DraggableCardSlider">
                  <span className="absolute hidden -top-3 px-10">Other Projects</span>
                <motion.div ref={slider} whileTap={{cursor: "grabbing"}} className="mask-x-from-80% mask-x-to-100% flex flex-row mb-20 mt-3 overflow-hidden w-100 sm:w-200 cursor-grab">
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

            



        </div>
       </div>
    </section>
};

