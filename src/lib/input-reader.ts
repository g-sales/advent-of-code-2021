import { readFileSync } from 'fs'

function readLines(prefix: string): string[]
function readLines<T>(prefix: string, parser: (item: string) => T): T[]

function readLines<T>(prefix: string, parser?: (item: string) => T) {
  const data = readFileSync(`inputs/${prefix}-input.txt`, 'utf8')
  const lines = data.split('\n')
  if (parser) {
    return lines.map((item) => parser(item))
  }
  return lines
}

export { readLines }
