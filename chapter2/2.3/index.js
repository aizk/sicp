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
// printPoint(midpointSegment(l));

//////////////////////////////

// 第一种 宽高表示
function Rect(width, height) {
  this.width = width;
  this.height = height;
  this.name = 'rect'
}

function makeRect(width, height) {
  return new Rect(width, height)
}

// 第二种 三个点表示
function RectPoint(x, y, z, v) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.v = v;
  this.name = 'rectPoint'
}

function makeRectPoint(x, y, z, v) {
  return new RectPoint(x, y, z, v)
}

function perimeter(r) {
  if (r.name = 'rect') {
    return (r.width + r.height) * 2
  } else if (r.name = 'rectPoint') {
    return ((r.y.x - r.x.x) + (r.x.y - r.v.y)) * 2
  }
}

function area(r) {
  if (r.name = 'rect') {
    return r.width * r.height
  } else if (r.name = 'rectPoint') {
    return (r.y.x - r.x.x) * (r.x.y - r.v.y)
  }
}
