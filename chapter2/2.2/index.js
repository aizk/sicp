function Point(x, y) {
  this.x = x;
  this.y = y;
}

function makePoint(x, y) {
  return new Point(x, y)
}

function xPoint(p) {
  return p.x
}

function yPoint(p) {
  return p.y
}

function printPoint(p) {
  console.log("(", p.x, ", ", p.y, ")")
}

function Line(start, end) {
  this.start = start;
  this.end = end;
}

function makeSegment(start, end) {
  return new Line(start, end)
}

function startSegment(l) {
  return l.start
}

function endSegment(l) {
  return l.end
}

function midpointSegment(l) {
  return makePoint((xPoint(startSegment(l)) + xPoint(endSegment(l))) / 2, (yPoint(startSegment(l)) + yPoint(endSegment(l))) / 2)
}

const l = makeSegment(makePoint(1, 1), makePoint(2, 2));

// 1.5 1.5
printPoint(midpointSegment(l));
