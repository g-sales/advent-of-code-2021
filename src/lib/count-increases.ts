export const countIncreases = (list: number[]): number => {
  return list.reduce((count, current, index) => {
    if (current > list[index - 1]) {
      count++
    }
    return count
  }, 0)
}

const sum = (a: number, b: number) => a + b
export const countGroupIncreases = (
  list: number[],
  groupSize: number,
): number => {
  let prevGroup = list.slice(0, groupSize).reduce(sum, 0)
  return list.reduce((count, current, index) => {
    const currentGroup = list.slice(index, index + groupSize).reduce(sum, 0)
    if (currentGroup > prevGroup) {
      count++
    }
    prevGroup = currentGroup
    return count
  }, 0)
}
