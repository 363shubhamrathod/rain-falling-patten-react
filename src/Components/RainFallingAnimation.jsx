import React, { useState, useEffect, useRef } from "react";
import helperToChangeColor from "../util/helperToChangeColor";
import helperToChangeNextPixel from "../util/helperToChangeNextPixel";
import helperToChangeColorFinalAlgo from "../util/helperToChangeColorFinalAlgo";
const FrameWidth = 20;
const FrameHeight = 15;
let curr=0;
export default function RainFallingAnimation() {
	const [initalFrame,setInitalFrame] = useState(
		Array.from({ length: FrameHeight }, () =>
			Array.from({ length: FrameWidth }, () => "#000000")
		)
	);

    function handleclick(){
        let top_row=Array.from({ length: FrameWidth }, () => "#000000");
        let y=Math.floor(Math.random()*FrameWidth);
        setInitalFrame((pre)=>{
            pre[0].map((cell,index)=>{
                top_row[index]=helperToChangeNextPixel(cell);
            });
            top_row[y]=helperToChangeColorFinalAlgo(curr);
            curr+=8;
            curr%=765;
            pre.unshift(top_row);
            pre.pop();
            // setTimeout(handleclick,225);
            return  [...pre.map(p=>[...p])];
        })
    }
    useEffect(() => {
        // Your code here (side effect)
        const inter=setInterval(handleclick,225);
        return () => clearInterval(inter);
      }, []);
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
			{/* <button onClick={handleclick}>click me</button> */}
            {}
		</>
	);
}
