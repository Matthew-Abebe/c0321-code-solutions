/* exported pick */

function pick(source, keys) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      var key = keys[i];
      obj[key] = source[key];
    }
  }
  return obj;
}
