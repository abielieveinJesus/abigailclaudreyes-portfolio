
import { Brush, ChevronDown, CodeXml, LayoutTemplate } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { LazyLoadComponent } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Home = () => {

    return <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center px-40 py-40 relative bg-[#eae6ea]">
           

            <div className="absolute full-landing-image w-full h-100vh bg-[#eae6ea]"></div>
            {/*ContentContainer*/}
            <div  className="w-auto flex flex-col items-center justify-center bg-[#EAE6Ea] ">
                {/*Blush blur bg*/}
                <div className="z-1 absolute flex items-center justify-center mb-35 w-70 h-70 sm:w-120 sm:h-120 xl:w-130 xl:h-130 bg-[#FF1F62]/90 rounded-full blur-[95px]  sm:blur-[130px]">
                         
                </div>
                <span className="z-1 hidden w-screen scale-50 absolute items-center justify-center text-[20px] -mt-55 leading-4.5 text-white/50 drop-shadow-lg drop-shadow-white opacity-70">
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠂⡇⠀⠀⠑⠠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⢀⢣⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢀⡀⢀⠀⣀⠜⠀⠀⠀⠀⠞⢀⠂⠀⠀⣄⢀⡀⠄⠀⠀⣀⣀⣀⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠬⠾⠷⠛⠒⠓⢺⠒⠒⠒⠲⡄⢾⠊⠇⡉⠀⠐⠒⠚⠋⠁⠀⠀⠈⠑⢺⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠘⣏⡏⠸⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡆⠀⠀⠀⠀⠀⣿⠁⠐⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡠⢄⡀⠀⠀⠀⠀⠀⠀⠀⢣⠇⠀⠀⠀⠀⠀⣿⠀⢀⠀⢀⣀⣀⠀⠀⠀⠀⠀⢀⡤⠊⠁⠈⠁⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡠⠛⠀⠀⠀⠀⠘⠘⠧⡀⠀⠀⠀⠀⠀⠀⠜⡄⠀⠀⠀⠀⡇⠀⠀⡠⠃⠀⠘⢇⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⢘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣆⠀⢀⣤⡄⠀⠀⠙⠶⢤⣤⣤⠆⠀⠸⠀⠀⠀⠀⢁⠇⠀⠀⠀⡇⠀⠀⠀⠈⠉⢱⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠦⠿⡻⢉⣲⠠⠀⠀⣀⡀⢀⢃⠀⢐⠠⢢⠀⠀⠁⠀⠀⠀⠀⠡⡀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠃⠀⠐⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡤⣾⡗⢡⣶⡞⠈⡆⣸⣼⣿⢈⢘⡉⡀⠀⠀⠀⢂⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠋⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣦⠛⢻⠜⠛⣅⢸⢹⠘⠉⠉⠘⠱⡀⠀⠀⠀⠤⠠⠀⠐⠈⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣇⠀⠀⢀⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢦⣌⠖⢉⣀⣸⠹⢠⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡒⢆⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣀⠠⢊⡌⠷⣀⢺⡈⠛⠀⢀⣄⢀⠀⣤⡆⠄⠀⠀⠀⠀⠈⠀⢱⣿⠻⠂⠘⣇⡀⠀⠀⠀⠀⠁⠂⠠⠀⠄⠐⠨⠖⣄⠀⠀⣸⠆⢀⡴⢋⡌⠤⢀⣀⠀⠀⠀⠀⠀
⠤⣤⣤⡔⠁⢐⡎⠈⢓⠬⠉⠉⠉⠲⠿⡻⠀⣾⣿⢶⠘⡶⡶⠶⠦⠒⡚⠻⠥⢷⠀⢽⢊⣛⡛⠒⠶⠴⠶⠶⠶⠶⠶⠶⠶⠾⠷⠾⠯⠀⠉⠥⢔⠋⠈⡖⠀⠓⢤⣤⡤⠄⠠
⠀⠀⠀⠚⠲⠌⣑⡄⢁⣤⠶⠒⠒⢲⣶⠃⢀⣿⡟⢻⡖⠛⠛⠛⠗⠒⠫⢀⡘⣮⣖⠈⠩⣐⠤⠒⠒⠛⠛⠛⠛⠛⠛⠛⠛⠛⠓⠒⠒⠒⠲⢦⢄⠁⣄⡡⠔⠛⠂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣤⠋⠀⠀⠀⠀⠈⠁⠁⠀⠀⠀⠜⡳⢀⠀⢈⠀⠀⠀⠀⢹⣇⢋⢀⣼⡾⣉⠉⠁⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠉⠛⢹⠛⠉⢦⡀⢈⢋⠆⢸⠏⠁⢀⡅⠀⣌⠆⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠂⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠸⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠈⣂⠀⠀⠈⠲⢸⢦⠎⠀⠀⠈⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠘⢦⢀⠀⠀⢸⢀⡥⢀⡀⠀⠀⠀⢀⠀⠂⠃⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⠀⠀⣀⣄⡠⢤⢤⣀⠙⠳⣴⢸⠒⠞⠄⠀⠉⠀⠁⠀⠠⠤⠘⡄⡀⠀⠀⣸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠉⠁⠀⠀⠀⠈⠙⡁⣀⠀⢸⢁⡽⢼⠢⣀⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠁⢛⡄⠀⠀⠀⠀⠀⠀⠀⠀⠐⢿⢸⠀⠀⠀⠉⠳⠳⡀⠀⠀⠀⡇⠀⠀⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⢸⣣⠀⠀⠀⢀⣄⠞⠁⢢⠀⠘⢸⠀⠀⠀⠀⠀⣱⢁⠀⠀⠀⡇⠀⠀⠂⠀⢀⠜⠁⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠈⣿⠂⠀⠀⠈⠁⠀⠀⠀⢡⠐⢸⠀⣄⣠⠖⠉⠘⡻⠀⠀⠀⠁⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⢀⣀⢶⠘⠀⣽⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢏⢄⠀⠀⠀⢰⡣⡀⢹⢸⢸⠎⠀⢠⣴⠖⢛⠒⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢶⡀⠀⠀⠘⠖⠃⠘⣨⢸⣀⡼⠋⠀⠀⠀⠉⠀⠁⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡐⢂⢀⢆⠀⣨⣷⡞⠘⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠈⠀⠀⠈⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠶⠀⠷⣿⣿⣻⣿⣜⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢠⡴⡄⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣷⣍⢉⣠⠀⠁⠙⠒⠚⠓⠢⣢⠀⠀⠀⠓⠌⠑⠁⢀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠋⠀⢣⡄⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⢠⢰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⣠⣀⣀⡤⠾⡫⠈⢰⡤⣆⡻⠦⣄⠤⠄⢐⣢⠀⠈⠁⠒⠒⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⣀⠀⠛⢯⡲⡾⡎⣦⢟⣽⣷⡀⠐⠂⠈⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠈⠑⢦⡀⠩⣮⠹⣱⡿⠟⠉⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⠀⠳⡀⠸⣷⡏⠀⠀⠀⠀⢸⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⢁⠀⢻⠀⠀⠀⢶⣲⠞⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠸⡀⠈⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠸⠁⠀⠀⠀⠀⠀⠀⠘⢄⣒⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⡀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠂⠁⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                </span>

                

                 
                 {/* <div className="z-1 -mt-15 w-470 object-cover absolute opacity-7 animate-[pulse_5s_ease-in-out_infinite] ">
                     <Spline className="" scene="https://prod.spline.design/J191iVtZzpBeu0bG/scene.splinecode" />
                 </div>*/}
                     
                   {/*  
                   <LazyLoadComponent>
                
                         <Spline className="absolute -rotate-180 -mt-60  z-1 sm:scale-100 scale-60  w-400 object-cover opacity-1 animate-[pulse_7s_ease-in-out_infinite] " scene="https://prod.spline.design/J191iVtZzpBeu0bG/scene.splinecode" />
                     
                    </LazyLoadComponent>
                     
                



                {/*Content/Overlay*/}
                <div className="z-2  flex flex-col items-center justify-center -mt-30  sm:mt-5">

                 {/*A b i e logo*/}   
                    <div id="abwie-wogo-uwu"  className="flex items-center justify-center w-70 sm:w-120">
                        <img src="src/assets/Logov2.svg" className="flex"></img>
                        <img src="src/assets/Logov2.svg" className="absolute flex w-70 sm:w-120 blur-md animate-[pulse_3s_ease-in-out_infinite]"></img>
                        <img src="src/assets/Logov2.svg" className="absolute flex w-70 sm:w-120 blur-xl animate-[pulse_4s_ease-in-out_infinite]"></img>
                    </div>

                {/*Tagline*/}
                <div className="flex items-center justify-center w-80 sm:w-100 ">
                     <h3 className="items-center justify-center font-Antic text-sm sm:text-2xl text-[#f5f5f5d8] tracking-[11px] cursor-context-menu">Reverie to Reality<span className="text-4xl mb-2">.</span></h3>
                </div>

                

                  {/*Context*/}
                <div className="absolute flex flex-row items-center mt-68 sm:mt-60 lg:mt-60">
                     <h6 className="z-1  mb-2 sm:mb-0 h-full w-27 sm:w-auto flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full bg-transparent shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 py-1 px-1  sm:px-4 sm:py-0.5 mx-1 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10 transition-all duration-700 cursor-context-menu "><CodeXml size={16} className="mr-1.5 text-white/75"></CodeXml>Web Development</h6>
                        <h6 className="z-1 mb-2 sm:mb-0 h-full w-27 sm:w-auto  flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full  bg-transparent shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 py-1 px  sm:px-4 sm:py-0.5 mx-1 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10  transition-all duration-700 cursor-context-menu "><LayoutTemplate size={16}  className="mr-1.5  text-white/75"></LayoutTemplate>UI & UX Design</h6>
                           <h6 className="z-1 mb-2 sm:mb-0 h-full w-27  sm:w-auto  flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full  bg-transparent shadow-xl shadow-white/75 drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 py-1 px  sm:px-4 sm:py-0.5  mx-1 hover:shadow-white hover:drop-shadow-xs hover:drop-shadow-white/10  transition-all duration-700 cursor-context-menu "><Brush size={16}  className="mr-1.5  text-white/75"></Brush>Illustrations</h6>    
                    <div className="absolute flex flex-row items-center blur-[2.5px]">
                             <h6 className="mb-2 sm:mb-0 h-full w-27  sm:w-auto flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full bg-transparent shadow-xs drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/25 py-1 px sm:px-4 sm:py-0.5 mx-1"><CodeXml size={16}  className="mr-1.5 text-white/75"></CodeXml>Web Development</h6>
                        <h6 className="mb-2 sm:mb-0 h-full w-27 sm:w-auto flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full  bg-transparent shadow-xs drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 py-1 px sm:px-4 sm:py-0.5  mx-1"><LayoutTemplate size={16}  className="mr-1.5  text-white/75"></LayoutTemplate>UI & UX Design</h6>
                           <h6 className="mb-2 sm:mb-0 h-full w-27 sm:w-auto  flex items-center justify-center text-center font-Antic text-[10px] sm:text-[16px] text-[#ffffff] rounded-full  bg-transparent shadow-xs drop-shadow-lg drop-shadow-[#350b354f] border-[1.5px] border-t-white border-l-white/50 border-r-white/50 border-b-white/20 py-1 px  sm:px-4 sm:py-0.5  mx-1 "><Brush size={16}  className="mr-1.5  text-white/75"></Brush>Illustrations</h6>      
                                   
                     </div>
                </div>
               
               
               
        
                {/*Scroll prompt*/}
                <div className="hidden sm:flex flex-col items-center mt-30 cursor-context-menu animate-pulse">
                     <h6 className="block items-center justify-center font-Antic text-xs md:text-[13px] text-[#360C36] tracking-[3px] delay-100">Scroll to Start</h6>
                <ChevronDown size={25} className="animate-bounce block items-center justify-center mt-3 text-[#360C36] "></ChevronDown>
                </div>

                 {/*Scroll prompt*/}
                <div className="sm:hidden absolute flex flex-col items-center bottom-15 cursor-context-menu animate-pulse">
                     <h6 className="block items-center justify-center font-Antic text-xs md:text-[13px] text-[#360C36] tracking-[3px] delay-100">Scroll to Start</h6>
                <ChevronDown size={25} className="animate-bounce block items-center justify-center mt-3 text-[#360C36] "></ChevronDown>
                </div>

                {/*N O!*/}
                <div className="hidden sm:flex absolute flex-col items-center bottom-20 md:bottom-40 sm:left-10 cursor-context-menu w-65">
                     <h6 className="block items-center justify-center text-center sm:text-justify font-Antic text-[8px] sm:text-[7px] md:text-[9px] text-[#7a667a]/65 tracking-[3px] delay-100">Please do not use, steal, copy, or edit my works. Please do not use my works to train AI & other related tasks. Thank you.</h6>
                
                </div>
               
                {/*N O! mobile*/}
                <div className="sm:hidden absolute flex flex-col items-center justify-center bottom-40 cursor-context-menu sm:w-55 w-70">
                     <h6 className="block items-center justify-center text-center sm:text-justify font-Antic text-[8px] sm:text-[7px] md:text-[10px] text-[#7a667a]/70 tracking-[3px] delay-100">Please do not use, steal, copy, or edit works. Please do not use my works to train AI & other related tasks. Thank you.</h6>
                
                </div>               


                </div>

                

    
              
            </div>

          </section>
};