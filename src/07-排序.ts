/**
 * 排序算法
 */
class ArrayList {

  private readonly arr: number[] = []

  public constructor() {}

  public insert(
    item: number,
  ): ArrayList {
    this.arr.push(item);

    return this;
  }

  public print(): string {
    return this.arr.length === 0
      ? ''
      : this.arr.join();
  }

  protected _swap(
    current: number, 
    next: number,
  ) {
    let temp: number = this.arr[current];
    this.arr[current] = this.arr[next]; 
    this.arr[next] = temp;
  }


  /**
   * 冒泡排序
   * 特点: 比较任何两个相邻的项, 如果第一个比第二个大, 则交换他们
   */
  public bubbleSort(): void {
    const arr: number[] = this.arr;
    const len: number = arr.length;

    for(let i = 0; i < len; i++) {
      for(let j = 0; j < len - 1; j++) {
        if(arr[j] > arr[j+1]) {
          this._swap(j, j+1);
        }
      }
    }
  }


  /**
   * 选择排序
   * 特点: 找到最小值并将其放在第一位, 接着找2.3....
   */
  public selectionSort(): void {
    const arr: number[] = this.arr;
    const len: number = arr.length;
    let minNum: number = 0;

    for(let i = 0; i < len - 1; i ++) {
      minNum = i;
      for(let j = i; j < len; j ++) {
        if(arr[j] < arr[minNum]) {
          this._swap(j, minNum);
        }
      }
    }
  }


  /**
   * 插入排序
   */
  public insertionSort(): void {
    const arr: number[] = this.arr;
    const len: number = arr.length;
    let j: number = 0;
    let temp: number = 0;

    for(let i = 1; i < len; i++) {
      j = i;
      temp = arr[i];
      while(j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
        j --;
      }
      arr[j] = temp;
    }
  }
}


const sort: ArrayList = new ArrayList();

sort
  .insert(20)
  .insert(55)
  .insert(10)
  .insert(98)
  .insert(67)
  .insert(34)
  .insert(100)
  .insert(5)

// sort.bubbleSort();
// sort.selectionSort();
sort.insertionSort();

console.log(sort.print());




