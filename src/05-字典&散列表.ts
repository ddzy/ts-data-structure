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
interface IMapProps {}

class Map {
  private items: object = {}

  public constructor(_props: IMapProps = {}) {}

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
  public clear = (): boolean => {
    
    return false;
  }

  /**
   * 字典元素数量
   * @returns Number 
   */
  public size = (): number => {
    
    return 1;
  }

  /**
   * 字典 键名
   * @returns string[] 键名数组
   */
  public keys = (): any[] => {
    
    return [];
  }

  /**
   * 字典 键值
   * @returns any[] 键值数组
   */
  public values = (): any[] => {
    
    return [];
  }
}


const mapOne = new Map({});

mapOne.set('duan', [1, 2]).set('zhao', [3, 4, 5]);
console.log(mapOne.has('duan'));
console.log(mapOne.get('zhao'));
