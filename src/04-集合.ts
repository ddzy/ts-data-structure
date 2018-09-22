/**
 * 集合
 * 特点: 无序且唯一
 * 特征: 既没有重复元素, 也没有顺序概念的数组
 * 应用: es6的Set
 */


/**
 * 实例一: ES6 Set实现
 */
interface ISetProps {};

class Set {

  private items: object = {}

  public constructor(
    _props: ISetProps = {}
  ) {}

  /**
   * 添加新条目
   */
  public add = (
    item: string | number,
  ): Set => {
    !this.has(item)
      && Reflect.set(
        this.items,
        item,
        item,
      )

    return this;
  }

  /**
   * 移除条目
   */
  public delete = (
    item: string | number,
  ): boolean => {
    return Reflect.deleteProperty(
      this.items,
      item,
    );
  }

  /**
   * 集合是否包含某条目
   */
  public has = (
    item: string | number,
  ): boolean => {
    return Reflect.has(
      this.items,
      item,
    );
  }

  /**
   * 移除集合的所有条目
   */
  public clear = (): Set => {
    return Reflect
      .set(this.items, {})
      && this;
  }

  /**
   * 条目总数
   */
  public size = (): number => {
    return Object
      .keys(this.items)
      .length;
  }

  /**
   * 条目的值数组
   */
  public values = (): any[] => {
    const items: object = this.items;
    const result: any[] = [];

    for(const key in items) {
      Reflect.has(items, key)
        && result.push(
          Reflect.get(items, key)
        )
    }

    return result;
  }

  /**
   * 条目键名的数组
   */
  public keys = (): string[] => {
    return Object.keys(this.items);
  }

  /**
   * 并集
   */
  public union = (
    targetSetValues: any[],
  ): object => {
    const newSet: string[] | number[] = []; 
    const values: string[] | number[] = this.values();

    // for (const key in values) {
    //   if (
    //     Reflect.has(values, key)
    //       && !Reflect.has(targetSet.values(), key)
    //   ) {
    //     const element = Reflect.get(values, key);
    //     Reflect.set(newSet, element, element);
    //   }
    // }
    for (const key of values) {
      targetSetValues.indexOf(key) === -1
        && console.log(key);
    }

    return newSet;
  }

}


const setOne = new Set({});
// console.log(set.has('setset'));
// set.add('duan').add('zhao').add('yang');
// console.log(set.values());
const setTwo = new Set({});

setOne.add(1).add(2).add(3).add(4);
setTwo.add(2).add(3).add(6).add(5);

// console.log(setTwo.values());
setOne.union(setTwo.values());

