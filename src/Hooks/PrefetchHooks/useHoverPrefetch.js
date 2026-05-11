import { useRef } from "react"

const useHoverPrefetch=(recipePrefetch)=>{
const timeoutRef=useRef(null)

const handleHover=(data)=>{
    clearTimeout(timeoutRef.current)
 timeoutRef.current=setTimeout(() => {
    recipePrefetch(data)
}, 250);
}
return {handleHover}
}
export default useHoverPrefetch