/**
 * 二叉树: 节点最多只能有两个子节点
 * 
 * 二叉搜索树: 二叉树的一种
 *  特点: 左侧节点存储比父节点小的值, 右侧节点存储比父节点大或等的值
 * 
 * 键: 树中对节点的称呼
 * 
 * 中序遍历{
 *    规则: 从最小到最大的顺序访问所有节点  
 *    应用: 树的排序
 * }
 * 
 * 先序遍历{
 *    规则: 先访问节点本身, 然后在访问左侧节点, 最后访问右侧节点
 *    应用: 打印结构化的文档
 * }
 */


/* --------------------------------------------------
-----------------------------------------------------*/



/**
 * 二叉搜索树
 */
interface IBinarySearchTreeProps {};
interface ITreeNodeProps {
  key?: string | number;
};

class TreeNode {
  public readonly key: any = 0

  public left: any = null

  public right: any = null

  public constructor(
    _props: ITreeNodeProps,
  ) {
    this.key = _props.key;
  }
}

class BinarySearchTree {

  /**
   * 递归树
   * @param currentNode 当前节点
   * @param newNode 要插入的节点
   */
  public static _insertNode(
    currentNode: TreeNode,
    newNode: TreeNode,
  ): void {
    // 目标键大于当前键,右插, 反之左插
    if(newNode.key < currentNode.key) {
      if(!currentNode.left) {
        currentNode.left = newNode;
      }else {
        this._insertNode(currentNode.left, newNode);
      }
    }else {
      if(!currentNode.right) {
        currentNode.right = newNode;
      }else {
        this._insertNode(currentNode.right, newNode);
      }
    }
  }


  /**
   * 中序遍历辅助函数
   * @param currentNode 当前节点
   * @param callback 处理函数
   */
  public static _inOrderTraverseNode(
    currentNode: TreeNode,
    callback: (key: any) => void,
  ): void {
    if(currentNode !== null) {
      this._inOrderTraverseNode(currentNode.left, callback);
      callback(currentNode.key);
      this._inOrderTraverseNode(currentNode.right, callback);
    }
  }


  /**
   * 先序遍历辅助函数
   * @param currentNode 当前节点
   * @param callback 处理函数
   */
  public static _preOrderTraverseNode(
    currentNode: TreeNode,
    callback: (key: any) => void,
  ): void {
    if(currentNode) {
      callback(currentNode.key);
      this._preOrderTraverseNode(currentNode.left, callback);
      this._preOrderTraverseNode(currentNode.right, callback);
    }
  } 


  /**
   * 后序遍历辅助函数
   * @param currentNode 当前节点
   * @param callback 处理
   */
  public static _postOrderTraverseNode(
    currentNode: TreeNode,
    callback: (key: any) => void,
  ): void {
    if(currentNode) {
      this._postOrderTraverseNode(currentNode.left, callback);
      this._postOrderTraverseNode(currentNode.right, callback);
      callback(currentNode.key);
    }
  }


  private root: any = null


  public constructor(
    _props: IBinarySearchTreeProps = {},
  ) {}


  /**
   * 二叉树插入新键
   * @param key 插入的键
   * @returns this
   */
  public insert(
    key: string | number,
  ): BinarySearchTree {
    const treeNode: TreeNode = new TreeNode({ key });

    if(!this.root) {
      this.root = treeNode;
    }else {
      BinarySearchTree._insertNode(this.root, treeNode);  
    }

    return this;
  }


  /**
   * 删除二叉树中的某个键
   * @param key 删除的键
   * @returns Boolean
   */
  public delete(
    key: string | number,
  ): boolean {

    return false;
  }


  /**
   * 查找二叉树的键
   * @param key 查找的键
   * @returns Boolean
   */
  public search(
    key: string | number,
  ): boolean {

    return false;
  }


  /**
   * 返回树中最大的键
   */
  public max(): any {

  }


  /**
   * 返回树中最小的键
   */
  public min(): any {

  }

  
  /**
   * 中序遍历
   */
  public inOrderTraverse(
    callback: (key: any) => void,
  ): BinarySearchTree {
    BinarySearchTree._inOrderTraverseNode(this.root, callback);

    return this;
  }


  /**
   * 先序遍历
   */
  public preOrderTraverse(
    callback: (key: any) => void,
  ): BinarySearchTree {
    BinarySearchTree._preOrderTraverseNode(this.root, callback);

    return this;
  }

  
  /**
   * 后序遍历
   */
  public postOrderTraverse(
    callback: (key: any) => void,
  ): BinarySearchTree {
    BinarySearchTree._postOrderTraverseNode(this.root, callback);

    return this;
  }

}


const binarySearchTree = new BinarySearchTree({});

binarySearchTree
  .insert(2)
  .insert(3)
  .insert(1)
  .insert(8)
  .insert(2)
  .inOrderTraverse((key) => {
    console.log(key);
  })  
  .preOrderTraverse((key) => {
    console.log(key);
  })
  .postOrderTraverse((key) => {
    console.log(key);
  }) 

  // 1 2 8 3 2