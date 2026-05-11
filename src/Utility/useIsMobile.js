import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function useIsMobile(){
    const [isMobile,setIsMobile]=useState(window.innerWidth<1024)
    useEffect(()=>{
        const handleResize=()=>{
            setIsMobile(window.innerWidth<1024)
        }
    window.addEventListener("resize",handleResize)
     return () => window.removeEventListener("resize", handleResize)

    },[])
}