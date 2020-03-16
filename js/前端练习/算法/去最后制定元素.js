function delLast(str, target) {
  return str.split('').reverse().join('').replace(target, '').split('').reverse().join('');
}

const str = delLast('asdfghhj', 'h')

console.log(str)