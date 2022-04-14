import Canvas from './Canvas.js';
import Cirlce from './Circle.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();

	const dims = 30;
	const circle1 = new Cirlce(canvas.ctx, 30, 30, 30, '#ff0000');
	circle1.draw();
};
