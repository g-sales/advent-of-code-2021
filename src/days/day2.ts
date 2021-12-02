import { readLines } from '../lib/input-reader'

enum Direction {
  forward = 'forward',
  down = 'down',
  up = 'up',
}

type Instruction = {
  direction: Direction
  value: number
}

const data = readLines<Instruction>('day2', (line) => {
  const parts = line.split(' ')
  const direction = parts[0] as Direction
  const value = parseInt(parts[1])
  return {
    direction,
    value,
  }
})

const partOne = () => {
  let horizontalPosition = 0
  let verticalPosition = 0
  data.forEach(({ direction, value }) => {
    switch (direction) {
      case Direction.forward:
        horizontalPosition += value
        return
      case Direction.down:
        verticalPosition += value
        return
      case Direction.up:
        verticalPosition -= value
        return
    }
  })
  console.log(horizontalPosition * verticalPosition)
}

const partTwo = () => {
  let horizontalPosition = 0
  let verticalPosition = 0
  let aim = 0
  data.forEach(({ direction, value }) => {
    switch (direction) {
      case Direction.forward:
        horizontalPosition += value
        verticalPosition += value * aim
        return
      case Direction.down:
        aim += value
        return
      case Direction.up:
        aim -= value
        return
    }
  })
  console.log(horizontalPosition * verticalPosition)
}

export default function () {
  console.log('Day 2')
  partOne()
  partTwo()
}
