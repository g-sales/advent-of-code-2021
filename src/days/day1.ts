import { countGroupIncreases, countIncreases } from '../lib/count-increases'
import { readLines } from '../lib/input-reader'

const data = readLines('day1', parseInt)

const partOne = () => {
  console.log(countIncreases(data))
}

const groupSize = 3
const partTwo = () => {
  console.log(countGroupIncreases(data, groupSize))
}

export default function () {
  console.log('Day 1')
  partOne()
  partTwo()
}
