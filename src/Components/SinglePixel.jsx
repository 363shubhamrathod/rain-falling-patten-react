import { useState } from "react";
export default function SinglePixel(){
    const [tex,setTex]=useState(Array.from({ length: 5 }, () =>
        Array.from({ length: 3 }, () => 5)
    ));
    function handleclick(){
        console.log('hjhk');
        setTex((pre)=>{
            pre.pop();
            return [...pre];
        });
    }
    return(
        <>
        <h1>{tex}</h1>
        <button onClick={handleclick}>click me</button>
        </>
    );
}