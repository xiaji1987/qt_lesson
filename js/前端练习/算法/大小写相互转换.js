function caseConvertEasy(str) {
  return str.split('').map(s => {
    if (s.charCodeAt() <= 90) {
      return s.toLowerCase()
    }
    return s.toUpperCase()
  }).join('')
}

console.log(caseConvertEasy('AbCxYz'))
console.log('abcde'.toUpperCase())