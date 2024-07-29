export default function helperToChangeNextPixel(cell) {
	let r = cell.substring(1, 3);
	r = parseInt(r, 16);
	r /= 1.3;
	r = Math.floor(r);
	let g = cell.substring(3, 5);
	g = parseInt(g, 16);
	g /= 1.3;
	g = Math.floor(g);
	let b = cell.substring(5, 7);
	b = parseInt(b, 16);
	b /= 1.3;
	b = Math.floor(b);
	r = r.toString(16).toLocaleUpperCase();
	g = g.toString(16).toLocaleLowerCase();
	b = b.toString(16).toLocaleUpperCase();
	if (r.length == 0) r = "00";
	if (r.length == 1) r = "0" + r;
	if (g.length == 0) g = "00";
	if (g.length == 1) g = "0" + g;
	if (b.length == 0) b = "00";
	if (b.length == 1) b = "0" + b;
    return '#'+r+g+b;
}
