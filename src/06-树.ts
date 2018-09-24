/**
 * 二叉树: 节点最多只能有两个子节点
 * 
 * 二叉搜索树: 二叉树的一种
 *  特点: 左侧节点存储比父节点小的值, 右侧节点存储比父节点大或等的值
 * 
 * 键: 树中对节点的称呼
 */


/* --------------------------------------------------
-----------------------------------------------------*/


/**
 * 二叉搜索树
 */
interface IBinarySearchTreeProps {};
interface ITreeNodeProps {};

class TreeNode {
  public readonly key: any = 0

  public readonly left: any = null

  public readonly right: any = null

  public constructor(
    _props: ITreeNodeProps = {},
  ) {}
}

class BinarySearchTree {

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
  public inOrderTraverse(): void {

  }


  /**
   * 先序遍历
   */
  public preOrderTraverse(): void {

  }

  
  /**
   * 后序遍历
   */
  public postOrderTraverse(): void {

  }

}