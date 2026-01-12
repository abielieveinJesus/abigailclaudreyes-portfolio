
import Logo from "../assets/Logo.svg";
import {useEffect, useState} from "react";


export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText ="Life tip: Today is the day of salvation! (Seek Christ)";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++; 

            if (index > fullText.length){
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 3000);
            }
        }, 30);

        return () => clearInterval(interval);
    },[onComplete]);

   return (
    //logo & loading bar
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-white">
         {/*Blush blur bg*/}
                <div className="z-0 absolute  flex items-center justify-center mb-0 w-40 h-40 sm:w-50 sm:h-50 bg-[#FF1F62]/100 rounded-full blur-[50px]  sm:blur-[70px]"></div>
        <img className="z-1 w-70 h-70 mt-10 mr-1 p-5  from-opacity-0% to-opacity-100% ease-in-out duration-500" src={Logo} alt="Abie"/>
        <div className="z-1 mt-5 mb-4 text-xs font-light text-[#360C36] drop-shadow-lg drop-shadow-rose-950/50 animate-pulse">
            {text} <span className="animate-blink ml-1">†</span>
        </div>

    <div className="z-1 w-[200px] h-[2px] bg-transparent rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#d4a8bf2e] shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>

       </div>
    </div>
   );
};
