/* exported includes */

function includes(array, value) {

  if (Math.sign(array.indexOf(value)) > 0) {
    return true;
  } else if (Math.sign(array.indexOf(value)) < 0) {
    return false;
  } else if (Math.sign(array.indexOf(value)) === 0) {
    return true;
  }

  console.log(array.indexOf(value));
}
