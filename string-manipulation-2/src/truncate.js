/* exported truncate */

function truncate(length, string) {
  if (string.length > length) {
    return string.substring(0, length) + '...';
  } else if
  (string.length === 0) {
    return string + '...';
  } else return string + '...';
}
