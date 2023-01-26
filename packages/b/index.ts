import { isEven } from 'sunrise-pkg-a'
console.log('this is pkg-b')

export const isOdd = (x: number) => !isEven(x)
