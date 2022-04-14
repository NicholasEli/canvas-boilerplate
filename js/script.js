import Canvas from './Canvas.js';
import Cirlce from './Circle.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();

	const circle1 = new Cirlce(10, 10, 10, '#ff0000');
	circle1.draw();
};
