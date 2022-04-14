import Canvas from './Canvas.js';
import Cirlce from './Circle.js';
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

	/**
	 * Animate circles for collision
		let reverse = false;
		animate(
			canvas,
			() => {
				const d = distance(circle1.x, circle1.y, circle2.x, circle2.y);

				if (collision(d, circle1.radius, circle2.radius)) {
					reverse = true;
				}

				if (circle1.x <= 0 || (circle1.x > 0 && !reverse)) {
					reverse = false;
					circle1.x = circle1.x + 1;
					circle1.y = circle1.y + 1;

					circle2.x = circle2.x - 1;
					circle2.y = circle2.y - 1;
				}

				if (reverse) {
					circle1.x = circle1.x - 1;
					circle1.y = circle1.y - 1;

					circle2.x = circle2.x + 1;
					circle2.y = circle2.y + 1;
				}

				circle1.update();
				circle2.update();
			},
			false
		);
	**/
};
