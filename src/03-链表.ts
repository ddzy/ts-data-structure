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
 * 实例一: 单链表
 */
interface ILinkedListProps { };
interface IPointProps {
  readonly element?: any,
  readonly next?: any,
};

class Point {
  public element: any = '';

  public next: any = null;

  public constructor(props: IPointProps) {
    this.element = props.element;
  }
}

class LinkedList {
  private length: number = 0;

  // 头结点引用
  private head: any = null;

  public constructor(props: ILinkedListProps) { }

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
    if (index >= 0 && index < this.length) {

      const node: Point = new Point({
        element: point,
        next: null,
      });
      let currentNode: Point = this.head;
      let previousNode: Point = new Point({});
      let currentIndex: number = 0;

      // 第一项
      if (index === 0) {
        node.next = currentNode;
        this.head = node;
      } else {
        // 任意位置
        while (currentIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        node.next = currentNode;
        previousNode.next = node;
      }

      this.length++;
    }

    return this as LinkedList;
  }

  /**
   * 移除特定值的项
   */
  public remove = (point: any): LinkedList => {
    const temp = this.where(point)

    temp !== -1
      && this.removeAt(temp);

    return this as LinkedList;
  }

  /**
   * 元素在链表的索引
   */
  public where = (point: any): number => {
    let currentNode: Point = this.head;
    let currentIndex: number = 0;

    while (currentNode && currentNode.element !== point) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentIndex === this.length
      ? -1
      : currentIndex;
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
      if (index === 0) {
        this.head = currentNode.next;
      } else {
        while (currentIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        // 移除currentNode
        previousNode.next = currentNode.next;
      }

      this.length--;
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

  /**
   * 打印链表元素
   */
  public print = (): string => {
    let currentNode: Point = this.head;
    let result: string = '';

    while (currentNode) {
      result += `${currentNode.element}、`;
      currentNode = currentNode.next;
    }

    return result;
  }
}





/**
 * 实例二: 双向链表
 */
interface IDoublyLinkedListProps { };
interface IDoublyPointProps {
  element?: any;
};

class DoublyPoint {
  public element: any = null;

  public next: any = null;

  public prev: any = null;

  public constructor(
    props: IDoublyPointProps = {},
  ) {
    this.element = props.element;
  }
}

class DoublyLinkedList {

  private length: number = 0

  private head: any = null

  private tail: any = null

  public constructor(
    props: IDoublyLinkedListProps = {},
  ) { }

  /**
   * 链表大小
   * @returns number 
   */
  public size = (): number => {
    return this.length;
  }

  /**
   * 链表是否为空
   * @returns boolean 
   */
  public isEmpty = (): boolean => {
    return this.length === 0;
  }

  /**
   * 正向打印链表
   * @returns string 链表值组合
   */
  public print = (): string => {
    let currentNode: any = this.head;
    let result: string = '';

    while (currentNode) {
      result += `${currentNode.element}、`;
      currentNode = currentNode.next;
    }

    return result;
  }

  /**
   * 反向打印链表
   * @returns string 链表值组合
   */
  public printReverse = (): string => {
    let currentNode: DoublyPoint = this.tail;
    let result: string = '';

    while (currentNode) {
      result += `${currentNode.element}、`;
      currentNode = currentNode.prev;
    }

    return result;
  }

  /**
   * 指定值的索引
   * @param point 指定的值
   * @returns number 值对应索引
   */
  public where = (
    point: any,
  ): number => {
    const len: number = this.length;
    let currentNode: DoublyPoint = this.head;
    let currentIndex: number = 0;

    while (currentIndex++ < len) {
      if (currentNode.element === point) {
        return currentIndex - 1;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  /**
   * 链表尾部添加
   * @param point 添加的值
   * @returns this
   */
  public append = (
    point: any
  ): DoublyLinkedList => {
    const node: DoublyPoint = new DoublyPoint({
      element: point,
    });
    let currentNode: any = this.head;

    // 为空
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      currentNode = node;
    } else {
      // 不为空
      currentNode = this.head;

      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      node.prev = currentNode;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  /**
   * 链表首部添加
   * @param point 添加的值
   * @returns this
   */
  public prepend = (
    point: any
  ): DoublyLinkedList => {
    const node: DoublyPoint = new DoublyPoint({
      element: point,
    });
    let currentNode: any = this.tail;

    // 链表为空
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      currentNode = node;
    } else {
      currentNode = this.tail;
      // 不为空
      while (currentNode && currentNode.prev) {
        currentNode = currentNode.prev;
      }

      currentNode.prev = node;
      this.head = node;
      node.next = currentNode;
    }

    this.length++;

    return this;
  }

  /**
   * 任意位置添加
   * @param index 插入的位置
   * @param point 对应的值
   * @returns this
   */
  public insert = (
    index: number,
    point: any,
  ): DoublyLinkedList => {
    const node: DoublyPoint = new DoublyPoint({
      element: point,
    });
    // 作优化, 正序or逆序遍历
    let halfLength: number = this.length / 2;
    let currentIndex: number = index > halfLength
      ? this.length - 1
      : 0;
    let currentNode: any = index > halfLength
      ? this.tail
      : this.head;
    let previousNode: any = null;

    if (index > -1 && index < this.length) {
      if (index > halfLength) {
        // 逆序
        while (currentIndex-- > index) {
          currentNode = currentNode.prev;
          previousNode = currentNode.prev;
        }

        currentNode.prev = node;
        node.next = currentNode;
        node.prev = previousNode;
        previousNode.next = node;

      } else {
        // 正序
        while (currentIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        currentNode.prev = node;
        previousNode.next = node;
        node.next = currentNode;
        node.prev = previousNode;
      }

      this.length++;
    }

    return this;
  }

  /**
   * 指定值删除
   * @param point 指定值
   * @returns this
   */
  public remove = (
    point: any,
  ): DoublyLinkedList => {
    let currentNode: DoublyPoint = this.head;
    let previousNode: any = null;

    while (
      currentNode
      && currentNode.next
    ) {
      if (currentNode.element === point) {
        previousNode.next = currentNode.next;
        currentNode.prev = previousNode;
      }

      currentNode = currentNode.next;
      previousNode = currentNode.prev;
    }

    return this;
  }

  /**
   * 任意位置删除
   */
  public removeAt = (
    index: number,
  ): DoublyLinkedList => {
    if (index > -1 && index < this.length) {
      let halfLength: number = this.length / 2;
      let currentIndex: number = index < halfLength
        ? 0
        : this.length - 1;
      let currentNode: any = index < halfLength
        ? this.head
        : this.tail;
      let previousNode: any = null;

      if (index === 0) {
        this.head = currentNode.next;
      }else if(index === this.length - 1) {
        this.tail = currentNode.prev;
        this.tail.next = null;
      }else {
        if(index < halfLength) {
          // 正序
          while(
            currentIndex++ < index
          ) {
            currentNode = currentNode.next;
          }

          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }else {
          // 逆序
          while(currentIndex-- > index) {
            currentNode = currentNode.prev;
          }

          currentNode.next.prev = currentNode.prev;
          currentNode.prev.next = currentNode.next;
        }
      }
    }

    return this;
  }
}

const doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.append('duan');
doublylinkedlist.append('zhao');
doublylinkedlist.append('yang');
doublylinkedlist.prepend('prepend');
doublylinkedlist.append('test1');
doublylinkedlist.append('test2');
doublylinkedlist.append('test3');
doublylinkedlist.append('test4');

