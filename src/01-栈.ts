/**
 * 栈
 * 原则: 后进先出
 * 特点: 新元素靠近栈顶, 旧元素靠近栈底
 * 用处: 保存变量, 方法调用
 */


/**
 * 创建栈
 */
interface IStackProps {};


class Stack {
  public static sixteenEnum = [
    '0', '1', '2', '3', '4', '5', '6', '7', 
    '8', '9', 'A', 'B', 'C', 'D', 
    'E', 'F'
  ]

  private items: any[]

  constructor(_props: IStackProps) {
    this.items = [];
  }

  /**
   * 添加一个or多个元素到栈顶
   * @param element 任意元素
   * @returns this
   */
  public push = (element: any): Stack => {
    this.items.push(element);

    return this;
  }

  /**
   * 移除栈顶的元素
   * @return any 被移除的元素
   */
  public pop = (): any => {
    return this.items.pop();
  }

  /**
   * 返回栈顶的元素
   */
  public peek = (): any => {
    return this.items[this.items.length - 1];
  }

  /**
   * 栈是否为空
   */
  public isEmpty = (): boolean => {
    return this.items.length === 0;
  }

  /**
   * 移除栈的所有元素
   */
  public clear = (): Stack => {
    this.items = [];

    return this;
  }

  /**
   * 栈里元素个数
   */
  public size = (): number => {
    return this.items.length;
  }

  /**
   * 栈所有元素
   */
  public all = (): any[] => {
    return this.items;
  }
}


/**
 * 实例: 十进制转任意进制
 */
function divideTenToTwo(
  baseNum: number,
  target: number,
): string {
  const stack: Stack = new Stack({});
  let result: string = '';

  while (baseNum !== 0) {
    stack.push(~~(baseNum % target));
    baseNum = ~~(baseNum / target);
  }

  while (!stack.isEmpty()) {
    result += Stack.sixteenEnum[stack.pop()];
  }

  return result;
}


console.log(divideTenToTwo(100345, 16));