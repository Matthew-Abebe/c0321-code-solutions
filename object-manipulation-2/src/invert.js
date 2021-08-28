/* exported invert */

function invert(source) {
  var obj = {};
  for (const key in source) {
    obj[source[key]] = key;
  }

  return obj;
}
