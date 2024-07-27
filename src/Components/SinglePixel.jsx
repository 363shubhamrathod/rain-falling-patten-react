import { useState } from "react";
export default function SinglePixel(){
    const [tex,setTex]=useState("hello");
    function handleclick(){
        setTex((pre)=>{
            pre=pre+'world';
            return pre;
        });
    }
    return(
        <>
        <h1>{tex}</h1>
        <button onClick={handleclick}>click me</button>
        </>
    );
}