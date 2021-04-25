/* exported drop */

function drop(array, count) {
  return array.slice(Math.max(array.length - count, 0));
}
