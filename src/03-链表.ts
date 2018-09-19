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
  element: any,
};
interface IPointProps {
  element: any,
};

class LinkedList {
  private length: number = 0;
  
  // 头结点引用
  private head: any = null;

  private element: any = '';
  
  public constructor(props: ILinkedListProps) {
    this.element = props.element;
  }

  /**
   * 链表尾部添加项
   */
  public append = (point: any): LinkedList => {
    const node = new Point({
      element: this.element,
    });

    return this;
  }

  /**
   * 任意位置插入项
   */
  public insert = (
    index: number, 
    point: any,
  ): LinkedList => {
    return this;
  }

  /**
   * 移除列表最后一项
   */
  public remove = (point: any): LinkedList => {
    return this;
  }

  /**
   * 元素在链表的索引
   */
  public where = (point: any): number => {
    return -1;
  }

  /**
   * 移除链表特定项
   */
  public removeAt = (index: number): any => {
    return '';
  }

  /**
   * 链表是否为空
   */
  public isEmpty = ():boolean => {
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
  private element: any = '';
  
  private next: any = null;

  public constructor(props: IPointProps) {
    this.element = props.element;
  }
}