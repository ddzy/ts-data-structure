/**
 * 链表
 * 特点: 存储有序的元素集合
 * 元素组成: {
 *    存储元素本身的节点
 *    指向下一个元素的引用(指针)
 * }
 * 
 * compare with 数组: {
 *    数组: 直接访问任何位置元素
 *    链表: 从表头迭代列表
 * }
 * 
 * 应用: {
 *    1. 康茄舞队
 *    2. 寻宝游戏
 *    3. 火车
 * }
 */


/**
 * 创建链表
 */
interface ILinkedListProps {

};
interface IPointProps {
  readonly element?: any,
  readonly next?: any,
};


class LinkedList {
  private length: number = 0;

  // 头结点引用
  private head: any = null;

  public constructor(props: ILinkedListProps) {}

  /**
   * 链表尾部添加项
   */
  public append = (point: any): LinkedList => {

    const node: Point = new Point({
      element: point,
      next: null,
    }) as Point;
    // 当前节点引用
    let currentNode: Point;

    // 为空 && 不为空
    if (this.isEmpty()) {
      this.head = node;
      currentNode = node;
    } else {
      currentNode = this.head;

      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;

    return this as LinkedList;
  }

  /**
   * 任意位置插入项
   */
  public insert = (
    index: number,
    point: any,
  ): LinkedList => {
    if(index >= 0 && index < this.length) {

      const node: Point = new Point({
        element: point,
        next: null,
      });
      let currentNode: Point = this.head;
      let previousNode: Point = new Point({});

      // 第一项
      if(index === 0) {
        node.next = currentNode;
        this.head = node;
      }else {
        // 任意位置
        while(index ++ < this.length) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        node.next = currentNode;
        previousNode.next = node;
      }

      this.length ++;
    }

    return this as LinkedList;
  }

  /**
   * 移除特定值的项
   */
  public remove = (point: any): LinkedList => {
    return this as LinkedList;
  }

  /**
   * 元素在链表的索引
   */
  public where = (point: any): number => {
    

    return -1;
  }

  /**
   * 移除特定位置项
   */
  public removeAt = (index: number): any => {
    // 检测越界
    if (index > -1 && index < this.length) {
      let currentNode: any = this.head;
      let previousNode: any = null;
      let currentIndex: number = 0;

      // 移除第一项
      if(index === 0) {
        this.head = currentNode.next;
      }else {
        while(currentIndex ++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        // 移除currentNode
        previousNode.next = currentNode.next;
      }

      this.length --;
    }

    return this as LinkedList;
  }

  /**
   * 链表是否为空
   */
  public isEmpty = (): boolean => {
    return this.length === 0;
  }

  /**
   * 链表元素个数
   */
  public size = (): number => {
    return this.length;
  }
}

/**
 * 链表 单个节点
 */
class Point {
  public element: any = '';

  public next: any = null;

  public constructor(props: IPointProps) {
    this.element = props.element;
    this.next = props.next;
  }
}


const linkedlist = new LinkedList({});

linkedlist.append('duan');
linkedlist.append('zhao');
linkedlist.append('yang');
linkedlist.append('haha').removeAt(1);

console.log(linkedlist.size());
