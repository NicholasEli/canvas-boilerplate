/**
 * Calcs distance between two points
 **/
export function getDistance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/**
 * Animate elements on a loop
 * @param { class } Canvas class
 **/
export function animate(canvas) {
  const { ctx, dimensions } = canvas;
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, dimensions.width, dimensions.height);
}
