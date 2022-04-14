import Canvas from './Canvas.js';
import Cirlce from './Circle.js';
import { animate, distance } from './utils.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();

	const dims = 30;
	const circle1 = new Cirlce(canvas, 30, 30, 30, 'red');
	circle1.draw();

	const circle2 = new Cirlce(
		canvas,
		canvas.dimensions.width - 30,
		canvas.dimensions.height - 30,
		30,
		'blue'
	);
	circle2.draw();
};
