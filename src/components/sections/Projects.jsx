
export const Projects = () => {
    return <section id="works" className="min-h-screen min-w flex items-center justify-center mt-50 bg-linear-to-t from-[#ff1f6200] to-[#EAE6EA]">
       <div className="w-full">
        <div className="relative flex items-center justify-center w-full h-full">

            {/*White blur bg*/}
            <div className="hidden md:flex z-0 items-center justify-center mt-70 w-100 h-100 bg-white rounded-full blur-[100px]"></div>
            <div className="md:hidden flex items-center justify-center mt-30 w-85 h-85 bg-white rounded-full blur-[100px]"></div>
            
            {/*Header*/}
            <div className="hidden md:flex items-center justify-center">
            <h1 className="absolute left-0 right-0 flex items-center justify-center text-[70px] tracking-[5px] text-[#360C36]">Works</h1>
            </div>

             {/*Section Description*/}
            <div className="hidden md:flex absolute left-0 right-0 items-center justify-center w-full h-full">
                 <h4 className="absolute flex items-center justify-center text-justify mt-40 text-2xl text-[#360c3687] tracking-wider">Websites I developed, designed, and worked on, my illustrations, logos & other media I designed.</h4>
            </div>

            {/*Websites*/}
            <div className="hidden md:flex absolute left-0 right-0 items-center justify-center w-full h-full">
                 <h4 className="absolute flex items-center justify-center text-justify mt-150 text-[50px] tracking-[15px] text-[#360C36]">websites</h4>
            </div>

            {/*Illustrations*/}
            <div className="hidden md:flex absolute left-0 right-0 items-center justify-center w-full h-full">
                 <h4 className="absolute flex items-center justify-center text-justify mt-250 text-[50px] tracking-[15px] text-[#360C36]">illustrations</h4>
            </div>




        </div>
       </div>
    </section>
};
