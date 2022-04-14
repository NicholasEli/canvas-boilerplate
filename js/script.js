import Canvas from './Canvas.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();
	console.log(canvas);
};
