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

  private constructor(
    props: ISetProps = {}
  ) {}

  /**
   * 添加新条目
   */
  public add = (item: any) => {
    
  }

  /**
   * 移除条目
   */
  public delete = () => {

  }

  /**
   * 集合是否包含某条目
   */
  public has = (item: any) => {
    
  }

  /**
   * 移除集合的所有条目
   */
  public clear = () => {
    
  }

  /**
   * 条目总数
   */
  public size = () => {
    
  }

  /**
   * 条目的值数组
   */
  public values = () => {
    
  }

  /**
   * 条目键名的数组
   */
  public keys = () => {
    
  }
}