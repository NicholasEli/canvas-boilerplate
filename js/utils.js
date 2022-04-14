/**
 * Calcs distance between two points
 * @param { int } x1 - x coordinate of object 1
 * @param { int } y1 - y coordinate of object 1
 * @param { int } x2 - x coordinate of object 2
 * @param { int } y2 - y coordinate of object 2
 **/
export function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/**
 * Animate elements on a loop
 * @param { class } canvas - Canvas class
 * @param { function } callback - returns true false value to keep animating
 * @param { boolean } stop - tells animation when to stop running
 **/
export function animate(canvas, callback, stop = false) {
  if (!canvas || !callback) return;

  const { ctx, dimensions } = canvas;

  if (stop === false) requestAnimationFrame(() => animate(canvas, callback, stop));

  ctx.clearRect(0, 0, dimensions.width, dimensions.height);

  stop = callback();
}
