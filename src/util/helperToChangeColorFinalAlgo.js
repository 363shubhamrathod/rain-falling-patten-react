export default function helperToChangeColorFinalAlgo(z){
    console.log(z);

    let y;
    if(z<=255){
        y=255-z;
        z = z.toString(16).toLocaleUpperCase();
	    if (z.length == 0) z = "00";
	    if (z.length == 1) z = "0" + z;
        y = y.toString(16).toLocaleUpperCase();
	    if (y.length == 0) y = "00";
	    if (y.length == 1) y = "0" + z;
        z='#'+z+y+'00';
    }
    else if(z>255&&z<=510){
        z-=255;
        y=255-z;
        z = z.toString(16).toLocaleUpperCase();
	    if (z.length == 0) z = "00";
	    if (z.length == 1) z = "0" + z;
        y = y.toString(16).toLocaleUpperCase();
	    if (y.length == 0) y = "00";
	    if (y.length == 1) y = "0" + z;
        z='#'+'00'+z+y;
    }
    else{
        z-=510;
        y=255-z;
        z = z.toString(16).toLocaleUpperCase();
	    if (z.length == 0) z = "00";
	    if (z.length == 1) z = "0" + z;
        y = y.toString(16).toLocaleUpperCase();
	    if (y.length == 0) y = "00";
	    if (y.length == 1) y = "0" + z;
        z='#'+y+'00'+z;
    }
    console.log(z);
    return z;
}