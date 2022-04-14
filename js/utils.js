/**
 * Calcs distance between two points
 **/
export function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/**
 * Animate elements on a loop
 **/
export function animate(ctx, canvas) {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.dimensions.width, canvas.dimensions.height);
}
