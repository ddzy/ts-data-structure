/**
 * 排序算法
 */
class ArrayList {
  private readonly arr: any[] = []

  public constructor() {}

  public insert(
    item: any,
  ): ArrayList {
    this.arr.push(item); 

    return this;
  }

  public print(): string {
    return this.arr.length === 0
      ? ''
      : this.arr.join();
  }
}

