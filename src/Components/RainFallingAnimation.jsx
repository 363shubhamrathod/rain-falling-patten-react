import React, { useState, useEffect, useRef } from "react";
const FrameWidth = 20;
const FrameHeight = 15;
let curr="#FFFFFF";
export default function RainFallingAnimation() {
	const [initalFrame,setInitalFrame] = useState(
		Array.from({ length: FrameHeight }, () =>
			Array.from({ length: FrameWidth }, () => "#000000")
		)
	);
    
    function handleclick(){
        let t=Array.from({ length: FrameWidth }, () => "#000000");
        let y=Math.floor(Math.random()*FrameWidth);
        let w=Math.floor(Math.random()*3);
        let z;
        if(w==0){
            z=curr.substring(1,3);
            z=parseInt(z,16);
            z+=10;
            z%=255;
            z=Math.floor(z);
            z=z.toString(16).toLocaleUpperCase();
            if(z.length==0)z='00';
            if(z.length==1)z='0'+z;
            z='#'+z+curr.substring(3,7);
            console.log(w);
            console.log(z);
        }
        else if(w==1){
            z=curr.substring(3,5);
            z=parseInt(z,16);
            z+=10;
            z%=255;
            z=Math.floor(z);
            z=z.toString(16).toLocaleUpperCase();
            if(z.length==0)z='00';
            if(z.length==1)z='0'+z;
            z=curr.substring(0,3)+z+curr.substring(5,7);
            console.log(w);
            console.log(z);
        }
        else if(w==2){
            z=curr.substring(5,7);
            z=parseInt(z,16);
            z+=10;
            z%=255;
            z=Math.floor(z);
            z=z.toString(16).toLocaleUpperCase();
            if(z.length==0)z='00';
            if(z.length==1)z='0'+z;
            z=curr.substring(0,5)+z;
            console.log(w);
            console.log(z);
        }
        setInitalFrame((pre)=>{
            pre[0].map((cell,index)=>{
                let r=cell.substring(1,3);
                r=parseInt(r,16);
                r/=1.2;
                r=Math.floor(r);
                let g=cell.substring(3,5);
                g=parseInt(g,16);
                g/=1.2;
                g=Math.floor(g);
                let b=cell.substring(5,7);
                b=parseInt(b,16);
                b/=1.2;
                b=Math.floor(b);
                r=r.toString(16).toLocaleUpperCase();
                g=g.toString(16).toLocaleLowerCase();
                b=b.toString(16).toLocaleUpperCase();
                if(r.length==0)r='00';
                if(r.length==1)r='0'+r;
                if(g.length==0)g='00';
                if(g.length==1)g='0'+g;
                if(b.length==0)b='00';
                if(b.length==1)b='0'+b;
                t[index]='#'+r+g+b;
            });
            curr=z;
            t[y]=curr;
            pre.unshift(t);
            pre.pop();
            return  [...pre];
        })
    }
	return (
		<>  
			{initalFrame.map((row, rowIndex) => (
				<>
					{row.map((cell, colIndex) => (
						
							<div
								key={`${rowIndex}-${colIndex}`}
								className={
									colIndex == FrameWidth-1  ? "divpixelnew" : "divpixel"
								}
								style={{ backgroundColor: cell }}
							></div>
						
					))}
				</>
			))}
			<button onClick={handleclick}>click me</button>
		</>
	);
}
