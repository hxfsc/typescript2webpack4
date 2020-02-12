function addnum(a: number, b: number): number
function addnum(a: number, b: number, c: number): number
function addnum(a: number, b: number, c: number, ...d: number[]): number
function addnum(a: number, b: number, ...d: number[]): number
function addnum(a: number, b: number, c?: number, ...d: number[]): number {

  if (c && d.length > 0) {
    return d.reduce((prev, next) => prev + next, a + b + c)
  }

  if (d.length > 0) {
    return d.reduce((prev, next) => prev + next, a + b)
  }

  if (c) {
    return a + b + c
  }
  return a + b
}
console.log(addnum(1, 2))
console.log(addnum(1, 2, 5))
console.log(addnum(1, 2, 6, 7))
console.log(addnum(1, 2, 6, 7, 9, 10))

