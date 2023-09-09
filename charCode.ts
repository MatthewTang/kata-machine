//

const zero = "a".charCodeAt(0);

function idx(str: string) {
  return str.charCodeAt(0) - zero;
}

console.log(idx("a"));
console.log(idx("b"));
