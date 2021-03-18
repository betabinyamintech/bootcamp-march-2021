import { useEffect, useState } from 'react';
import './FullScreenLoader.css'

function FullScreenLoader({ active }) {
    const [loader,setLoader] = useState(false);
    useEffect(()=>{
        const timeout = setTimeout(()=>{setLoader(active)},10)
        return ()=>clearTimeout(timeout);
    },[active])
    return active && <div class={loader?"loading":''}>Loading&#8230;</div>
}
export default FullScreenLoader;