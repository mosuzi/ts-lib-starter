import { TreeNode } from './types/index'

export class Fruit {
  nodeName: string
}

export const comb = function (tree: TreeNode | TreeNode[]): Fruit[] {
  const stack: TreeNode | TreeNode[] = []
  const result: Fruit[] = []
  Array.isArray(tree) ? stack.push(...tree) : stack.push(tree)
  while (stack.length) {
    const node: TreeNode | undefined = stack.shift()
    if (!node) continue
    console.log(node.nodeName)
    const fruit = new Fruit()
    fruit.nodeName = node.nodeName
    result.push(fruit)
    if (node.branches.length) {
      stack.push(...node.branches)
    }
  }
  return result
}
