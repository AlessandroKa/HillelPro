let text = document.querySelector('.text');
let content = text.innerHTML.split((/\s+/));
String.prototype.countWords = function () {
  return content.length;
}
String.prototype.wordCondition = function (content) {
  return content.map(function (word) {
    if (word.length > 8) {
      return '<span>' + word + '</span>';
    } else if (word.endsWith('.')) {
      return word + '<br>';
    } else if (word.endsWith('!')) {
      return word.replace('!', '😲');
    } else if (word.endsWith('?')) {
      return word.replace('?', '🤔');
    } else if (word.endsWith('.') && word.length > 8) {
      return '<span>' + word + '</span><br>';
    } else {
      return word;
    }
  });
}

text.insertAdjacentHTML('beforebegin', `<p>Words: ${text.innerHTML.countWords()}</p>`);
text.insertAdjacentHTML('afterend', `<a href="https://forcemipsum.com/" target=_blank>https://forcemipsum.com/</a>`);
text.innerHTML = text.innerHTML.wordCondition(content).join(' ');