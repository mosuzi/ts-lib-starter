import { comb } from './util'
import tree from './tree-source'
import { TreeNode } from './types/index'

console.log('hello world')

export function sayHello() {
  console.log('hello')
}

export { comb }

// now let`s do more complex thing

export class MainApplication {
  starter: string
  tree: TreeNode[] | TreeNode
  constructor() {
    this.starter = 'ts-lib-starter'
    this.tree = tree
  }
  comb() {
    comb(this.tree)
  }
}

const app = new MainApplication()
app.comb()
