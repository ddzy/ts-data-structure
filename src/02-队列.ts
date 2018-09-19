/**
 * 队列
 * 
 * 原则: 先进先出
 * 特点: 尾部添加元素, 顶部移除元素, 新元素必须排在队列末尾
 */


/**
 * 创建队列
 */
interface ISequenceProps {};

class Sequence {

  protected items: any[] = []

  public constructor(data: ISequenceProps = {}) {
    
  }

  /**
   * 入队
   */
  public enqueue = (element: any): Sequence => {
    this.items.push(element);

    return this;
  }

  /**
   * 出队
   */
  public dequeue = (): any => {
    return this.items.shift();
  }

  /**
   * 清除队列
   */
  public clear = (): Sequence => {
    this.items = [];
    
    return this;
  }

  /**
   * 队列是否为空
   */
  public isEmpty = (): boolean => {
    return this.items.length === 0;
  }

  /**
   * 队列成员个数
   */
  public size = (): number => {
    return this.items.length;
  }

  /**
   * 返回队列的第一个元素
   */
  public first = (): any => {
    return this.items[0];
  }

  /**
   * 返回队列
   */
  public all = (): any[] => {
    return this.items;
  }
}


/**
 * 应用一: 优先队列
 * 特点: 两种选项 {
 *    1. 设置优先级, 在正确的位置添加元素.
 *    2. 入列操作添加元素, 然后按照优先级移除他们
 * }
 */
class PrioritySequence extends Sequence {
  public constructor() {
    super();
  }

  /**
   * 入队
   */
  public enqueue = (
    args: {
      element: any,
      priority: number,
    },
  ): PrioritySequence => {
    if(this.isEmpty()) {
      this.items.push(args);
    }else {
      // 是否已经添加
      let flagIsAdd: boolean = false;

      for(let i = 0, every; every = this.items[i++];) {
        if(every.priority <= args.priority) {
          flagIsAdd = true;
          this.items.splice(i - 1, 0, args);
          break;
        }
      }

      !flagIsAdd && this.items.push(args);
    }

    return this;
  }
}



/**
 * 应用二: 循环队列
 * 例子: 击鼓传花
 */
function sendFlower(
  // 玩家列表
  persionList: string[],
  // 一轮循环时间
  duringNum: number,
): string {
  const sequence: Sequence = new Sequence({});

  // 入队
  persionList.forEach((item) => {
    sequence.enqueue(item);
  });

  while (sequence.size() > 1) {
    for(let i = 0; i < duringNum; i++) {
      sequence.enqueue(sequence.dequeue());
    }
    // 淘汰出局
    console.log(`${sequence.dequeue()}: 被淘汰出局!`);
  }

  // 胜利者
  return sequence.first();
}
