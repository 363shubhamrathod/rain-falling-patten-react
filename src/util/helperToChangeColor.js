const p=20;
function helperForCalculation(z) {
	z = parseInt(z, 16);
    z+=p;
    z%=255;
    if(z<100)z+=100;
	z = Math.floor(z);
	z = z.toString(16).toLocaleUpperCase();
	if (z.length == 0) z = "00";
	if (z.length == 1) z = "0" + z;
	return z;
}

export default function helperToChangeColor(curr) {
	let w = Math.floor(Math.random() * 3);
	let z;
	if (w == 0) {
		z = curr.substring(1, 3);
		z = helperForCalculation(z);
		z = "#" + z + curr.substring(3, 7);
	} else if (w == 1) {
		z = curr.substring(3, 5);
		z = helperForCalculation(z);
		z = curr.substring(0, 3) + z + curr.substring(5, 7);
	} else if (w == 2) {
		z = curr.substring(5, 7);
		z = helperForCalculation(z);
		z = curr.substring(0, 5) + z;
	}
	return z;
}
