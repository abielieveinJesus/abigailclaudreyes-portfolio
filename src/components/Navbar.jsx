import { useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { ChevronLeft, CircleUserRound, House, Phone } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';


export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]
);

  return ( 

  <nav className="sticky top-0 w-full z-100 border-none h-[0px] bg-[#eae6ea]">
    <div className=" mx-auto border-none">
      <div className="border-none bg-transparent flex justify-between h-16 pt-3 md:mr-10 md:ml-10 ml-3 mr-3 items-center">


        <div className="md:hidden">
           <a href="#home" >
            <button className=" h-14 w-14 mt-3 rounded-full bg-[#947E94]/5 backdrop-blur-md shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-600 cursor-pointer">
                 <img src={Logo} className="scale-130 p-2 opacity-80 drop-shadow-sm drop-shadow-[#784354e0]/30 hover:opacity-100 hover:drop-shadow-lg hover:drop-shadow-[#6b3749a2] hover:scale-150 transition-all duration-600"></img>
            </button>
        </a>
        </div>
        

        <div className="hidden md:flex">
         <a href="#home" >
            <button className="flex items-center justify-center rounded-full w-22 mt-12 bg-[#947E94]/7 backdrop-blur-md  shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-600 cursor-pointer">
                 <img src={Logo} className="h-full w-full ml-1 mr-1 opacity-80 drop-shadow-sm  drop-shadow-[#784354e0]/20 hover:opacity-100 hover:drop-shadow-lg hover:drop-shadow-[#6b3749a2] hover:scale-110 transition-all duration-600"></img>
            </button>
        </a>
        </div>


        <div className="md:hidden  flex items-center space-x-6 px-3 pt-2 pb-1 mt-1.5 rounded-4xl bg-[#947E94]/5 backdrop-blur-xs  shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-600 cursor-pointer">
          
          <a href="#home">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/40 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
              <House size={25}/>
            </button >
          </a>

           <a href="#profilee">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/40 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
             <CircleUserRound size={25}/>
            </button>
          </a>

           <a href="#works">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/40 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
            <BriefcaseBusiness size={25}/>
            </button >
          </a>

        </div>

         <div className="hidden  flex-col items-center justify-center space-y-6 px-3 pt-2 pb-1 mt-30 rounded-4xl bg-[#947E94]/10 backdrop-blur-xs  shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-600 cursor-pointer">
          
          <a href="#home">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
              <House size={25}/>
            </button >
          </a>

           <a href="#profilee">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
             <CircleUserRound size={25}/>
            </button>
          </a>

           <a href="#works">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/35 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
            <BriefcaseBusiness size={25}/>
            </button >
          </a>

        </div>


        
        <div className="hidden md:flex items-center justify-center px-5 space-x-7 py-3 mt-13 rounded-full bg-[#947E94]/10 hover:bg-[#947E94]/5  backdrop-blur-sm  shadow-xl shadow-white/75  border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 hover:shadow-white  transition-all duration-600 cursor-pointer">
            

           <a href="#home">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/60 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
              <House size={25}/>
            </button >
          </a>

           <a href="#about">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/60 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
               <CircleUserRound size={25}/>
              
            </button >
          </a>

           <a href="#works">
            <button className="text-white/85 drop-shadow-md drop-shadow-[#360c3673]/60 hover:text-white hover:drop-shadow-md hover:drop-shadow-white transition-all duration-400 cursor-pointer"> 
              <BriefcaseBusiness size={25}/>
            </button >
          </a>

          
        </div>

      </div>
    </div>
  </nav>
  );
};

