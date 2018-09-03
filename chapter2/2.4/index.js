// 纯过程表示
function cons(x, y) {
  return function (m) {
    return m(x, y)
  }
}

// 传入一个返回第一个值的过程
function car(z) {
  return z(function (p, q) {
    return p
  })
}

function cdr(z) {
  return z(function (p, q) {
    return q
  })
}

console.log(car(cons(1, 2)));
console.log(cdr(cons(1, 2)));
