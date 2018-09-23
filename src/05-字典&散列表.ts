/**
 * 字典
 * 特点: 以[键, 值]的形式存储数据
 * 集合: 以[值, 值]的形式存储数据
 * 别名: 映射
 * 实例: ES6的 Map
 */


/**
 * Map 实现
 */
interface IMapProps { }

class Map {
  private items: object = {}

  public constructor(_props: IMapProps = {}) { }

  /**
   * 对应的key的键是否存在
   * @param key 键名
   * @returns Boolean
   */
  public has = (
    key: string
  ): boolean => {
    return Reflect.has(this.items, key);
  }

  /**
   * 添加新元素
   * @param key 键名
   * @param value 键值
   * @returns this
   */
  public set = (
    key: string,
    value: any,
  ): Map => {
    Reflect.set(this.items, key, value);

    return this;
  }

  /**
   * 查找键
   * @param key 键名
   * @returns 键值
   */
  public get = (
    key: string,
  ): any => {
    return Reflect.get(this.items, key);
  }

  /**
   * 删除键值对
   * @param key 键名
   * @returns Boolean
   */
  public delete = (
    key: string,
  ): boolean => {
    return this.has(key)
      && Reflect.deleteProperty(this.items, key);
  }

  /**
   * 清空字典
   * @returns Boolean
   */
  public clear = (): Map => {
    this.items = {};

    return this;
  }

  /**
   * 字典元素数量
   * @returns Number 
   */
  public size = (): number => {
    return Reflect
      .ownKeys(this.items)
      .length;
  }

  /**
   * 字典 键名
   * @returns string[] 键名数组
   */
  public keys = (): any[] => {
    return Reflect.ownKeys(this.items);
  }

  /**
   * 字典 键值
   * @returns any[] 键值数组
   */
  public values = (): any[] => {
    const result: any[] = [];
    const items: object = this.items;

    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        const element = Reflect.get(items, key);
        result.push(element);
      }
    }

    return result;
  }

  /**
   * 打印字典
   */
  public print = () => {
    return this.items;
  }
}



/**
 * 散列表
 * 别名: HashMap, 字典的散列表实现方式
 * 作用: 快速检索, 给定一个键值, 返回值在表中的地址
 * 方法: 将每个键值中的每个字母的ASCLL值相加
 */
interface IHashMapProps { }

class HashMap {

  private readonly table: any[] = []

  public constructor(_props: IHashMapProps = {}) { }


  /**
 * 获取键的ASCLL码的总和
 * @param key 键
 * @returns Number 
 */
  private loseloseHashCode(
    key: string,
  ): number {
    let sum: number = 0;

    for(let i = 0, item; item = key[i++];) {
      sum += key.charCodeAt(i - 1);
    }

    return sum % 38;
  }


  /**
   * 散列表添加新项
   * @param key 键
   * @param value 键值
   * @returns this
   */
  public put(
    key: string,
    value: any,
  ): HashMap {
    // const keyPosition: number = this.loseloseHashCode(key);

    // Reflect.set(this.table, keyPosition, value);

    return this;
  }


  /**
   * 删除某项
   * @param key 键
   * @returns Boolean
   */
  public delete(
    key: string,
  ): boolean {
    console.log(key);
    return false;
  }


  /**
   * 获取散列表特定项
   * @param key 键
   * @returns 键值
   */
  public get(
    key: string,
  ): any {

    return key;
  }

}


const hashmap = new HashMap({});
hashmap.put('duanzhaoyang', [1, 2, 3]);

