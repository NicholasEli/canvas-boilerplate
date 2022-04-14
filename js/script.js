import Canvas from './Canvas.js';
import Cirlce from './Circle.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();

	const dims = 30;
	const circle1 = new Cirlce(canvas, 30, 30, 30, 'red');
	circle1.draw();

	// const circle2 = new Cirlce(
	// 	canvas.ctx,
	// 	canvas.dimensions.width - 30,
	// 	canvas.dimensions.height - 30,
	// 	30,
	// 	'blue'
	// );
	// circle2.draw();
};
