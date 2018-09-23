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
    const keyPosition: number = this.loseloseHashCode(key);

    Reflect.set(this.table, keyPosition, value);

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
    const keyPosition: number = this.loseloseHashCode(key);

    return Reflect.set(this.table, keyPosition, '');
  }


  /**
   * @param key 键
   * 获取散列表特定项
   * @returns 键值
   */
  public get(
    key: string,
  ): any {
    const keyPosition: number = this.loseloseHashCode(key);

    return Reflect.get(this.table, keyPosition);
  }


  /**
   * 打印散列表数据
   * @returns Array<any>
   */
  public print(): any[] {
    return this.table;
  }

}




/ -------------------------------------------------- ---------------------------------------------------- /







/**
 * 分离链接: 解决散列表键名冲突
 */
interface IDetachHashMapProps {};
interface IFormatDetachHashMapProps {
  readonly key: string,
  readonly value: any,
};

class FormatDetachHashMap {
  
  public readonly key: string = ''
  
  public readonly value: any = ''

  public constructor(
    _props: IFormatDetachHashMapProps,
  ) {
    this.key = _props.key;
    this.value = _props.value;
  }

  public format(): string {
    return `[${this.key} - ${this.value}]`;
  }
}

class DetachHashMap {

  private readonly table: any[] = []

  public constructor(
    _props: IDetachHashMapProps = {},
  ) {}

  /**
   * 获取字符串ASCLL码的总和
   * @param key 键
   */
  private loseloseHashCode (
    key: string,
  ): number {
    let result: number = 0;

    for(let i = 0, item; item = key[i++];) {
      result += key.charCodeAt(i - 1);
    }

    return result;
  }


  /**
   * @param key 查找的键
   * 散列表是否存在键
   */
  public isKeyEmpty(
    key: string,
  ): boolean {
    const keyPosition: number = this.loseloseHashCode(key);

    return Reflect.get(this.table, keyPosition) === undefined
  }

  /**
   * 添加新数据
   * @param key 键
   * @param value 键值
   */
  public put(
    key: string,
    value: any,
  ): DetachHashMap {
    const formatedDetachHashMap: FormatDetachHashMap = new FormatDetachHashMap({
      key,
      value,
    });
    const keyPosition: number = this.loseloseHashCode(key);
    const doublyLinkedList: DoublyLinkedList = new DoublyLinkedList({});

    // 空链表
    if(this.isKeyEmpty(key)) {
      Reflect.set(
        this.table,
        keyPosition,
        doublyLinkedList,
      );
    }
    Reflect
      .get(this.table, keyPosition)
      .append(formatedDetachHashMap);

    return this;
  }

  /**
   * 获取散列表的键值
   * @param key 查找的键
   */
  public get(
    key: string,
  ): any {
    const keyPosition: number = this.loseloseHashCode(key);
    const result: any[] = [];

    // 键值不为空
    if(!this.isKeyEmpty(key)) {
      let currentNode: DoublyPoint = Reflect
        .get(
          this.table,
          keyPosition
        )
        .getHead();

      while (currentNode) {
        if(currentNode.element.key === key) {
          result.push(currentNode.element);
        }
        currentNode = currentNode.next;
      }

      return result;
    }

    return null;
  }
  
  public delete(
    key: string,
  ): DetachHashMap {
    const keyPosition: number = this.loseloseHashCode(key);

    // 非空
    if(!this.isKeyEmpty(key)) {
      const keyLinkList: DoublyLinkedList = Reflect.get(
        this.table,
        keyPosition,
      );
      let currentNode: DoublyPoint = keyLinkList.getHead();

      while(currentNode) {
        if(currentNode.element.key === key) {
          keyLinkList
            .removeAt(keyLinkList.where(currentNode.element));
        }

        currentNode = currentNode.next;
      }
    }

    return this;
  }
}






