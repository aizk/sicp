// 用过程表示的零
function zero() {
  return function (f) {
    return function (x) {
      return x
    }
  }
}

// 加一过程
function addOne(n) {
  return function (f) {
    return function (x) {
      return f(n(f), x)
    }
  }
}

console.log(addOne(zero));
