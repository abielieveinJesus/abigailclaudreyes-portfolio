import {useState} from "react";
import "./App.css";
import "./index.css";
import {LoadingScreen} from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Works } from "./components/sections/Works";
import { Contact } from "./components/sections/Contact";




function App(){
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}

      <div className={`min-h-screen transition-opacity duration-800
       ${isLoaded ? "opacity-100" : "opacity-0"} `}
      >
      
      <Home></Home>
     <Navbar></Navbar>
      <About></About>
      <Works></Works>
      
      <Contact></Contact>
     
      
     
      
      </div>
    </>
  );
}
export default App;
