
import { Websites } from "../Websites";
import { Illustrations } from "../Illustrations";


export const Works = () => {

    return <section id="works"   className="w-auto flex flex-col items-center justify-center relative bg-linear-to-t from-[#ff1f6219]   to-[#eae6ea]  via-[#ffffff20]  ">
       <div className="w-screen">
        <div className="flex flex-col items-center justify-center px-5 pt-10">

            <div className="z-2 mb-13">
             {/*Header*/}
            <div id="wrk_header"  className="wrk_header jacquard-24-regular z-2 flex flex-col items-center justify-center">
            <h1 className=" left-0 right-0 flex items-center justify-center text-[50px] sm:text-[90px] tracking-[5px] text-[#360C36]">Works</h1>
            </div>

             {/*Section Description*/}
            <div id="wrk_headline"  className="wrk_headline z-2 flex w-full items-center justify-center sm:-mt-4">
                 <h4 className="flex items-center justify-center text-center text-lg  text-[#360c3687] tracking-[2px] ">Websites I developed & designed, inlcuding the ones I co-developed. llustrations & other media I designed.</h4>
            </div>
            </div>

           <Websites></Websites>
           <Illustrations></Illustrations>

             

            



        </div>
       </div>
    </section>
};
