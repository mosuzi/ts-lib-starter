import { describe, expect, test } from '@jest/globals'

import { Fruit, comb } from '../src/util'
import tree from '../src/tree-source'

describe('default module', () => {
  const fruits: Fruit[] = [
    { nodeName: 'first' },
    { nodeName: 'second' },
    { nodeName: 'first-branch' },
    { nodeName: 'second-branch-1' },
    { nodeName: 'second-branch-2' }
  ]
  test('comb tree and get fruits', () => {
    const result: Fruit[] = comb(tree)
    result.forEach((fruit: Fruit, index: number) => {
      expect(fruit.nodeName).toBe(fruits[index].nodeName)
    })
  })
})
