/* exported omit */

function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      obj[key] = source[key];
    }
  }

  return obj;
}
