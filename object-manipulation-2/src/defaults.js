/* exported defaults */

function defaults(target, source) {
  for (var property in source) {
    if (target[property] === undefined) {
      target[property] = source[property];
    }

  }
}
