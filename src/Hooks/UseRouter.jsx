import { useState, useEffect } from "react";

export default function useRouter (){
 const [currentPath, setCurrentPath] = useState(window.location.pathname)

 useEffect(() => {
    const HandleLocationChange = () =>{
        setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', HandleLocationChange)

    return () => {
        window.removeEventListener('popstate', HandleLocationChange)
    }
 }, [])
 function navigateTo (path) {
  window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
 }
 return {
    currentPath,
    navigateTo
 }
}