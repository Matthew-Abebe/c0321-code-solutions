/* exported titleCase */

function titleCase(title) {
  var words = title.split(' ');
  var wordArr = [];
  var capitalizedWords = '';

  for (let i = 0; i < words.length; i++) {
    capitalizedWords = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    wordArr.push(capitalizedWords);
  }

  console.log(wordArr);
}
