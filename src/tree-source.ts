// import { TreeNode } from './util'
import { TreeNode } from './types/index'
const tree: TreeNode[] | TreeNode = [
  {
    nodeName: 'first',
    data: undefined,
    branches: [
      {
        nodeName: 'first-branch',
        data: undefined,
        branches: []
      }
    ]
  },
  {
    nodeName: 'second',
    data: undefined,
    branches: [
      {
        nodeName: 'second-branch-1',
        data: undefined,
        branches: []
      },
      {
        nodeName: 'second-branch-2',
        data: undefined,
        branches: []
      }
    ]
  }
]

export default tree
