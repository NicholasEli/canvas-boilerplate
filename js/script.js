import Canvas from './Canvas.js';
import Cirlce from './Circle.js';
import Rectangle from './Rectangle.js';
import Image from './Image.js';
import { animate, distance, collision } from './utils.js';

window.onload = function () {
	console.log('--Loading Javascript');
	const canvas = new Canvas();
	canvas.init();

	const circle1 = new Cirlce(canvas, 30, 30, 30, 'red');
	circle1.draw();

	const circle2 = new Cirlce(
		canvas,
		canvas.dimensions.width - 60,
		canvas.dimensions.height - 60,
		60,
		'blue'
	);
	circle2.draw();

	const rectangle = new Rectangle(canvas, 0, canvas.dimensions.height - 30, 60, 30, 'green');
	rectangle.draw();

	const character = {
		width: 860,
		height: 625,
		el: document.getElementById('character'),
	};
	const image1 = new Image(
		canvas,
		null,
		null,
		null,
		null,
		canvas.dimensions.width / 2,
		canvas.dimensions.height / 2,
		50,
		50,
		character.el
	);
	image1.draw();

	const image2 = new Image(
		canvas,
		0,
		0,
		character.width / 2,
		character.height / 2,
		canvas.dimensions.width / 2,
		canvas.dimensions.height / 2 + 50,
		50,
		50,
		character.el
	);
	image2.draw();
};
