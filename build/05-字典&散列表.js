"use strict";
/**
 * 字典
 * 特点: 以[键, 值]的形式存储数据
 * 集合: 以[值, 值]的形式存储数据
 * 别名: 映射
 * 实例: ES6的 Map
 */
var Map = /** @class */ (function () {
    function Map(_props) {
        if (_props === void 0) { _props = {}; }
        var _this = this;
        this.items = {};
        /**
         * 对应的key的键是否存在
         * @param key 键名
         * @returns Boolean
         */
        this.has = function (key) {
            return Reflect.has(_this.items, key);
        };
        /**
         * 添加新元素
         * @param key 键名
         * @param value 键值
         * @returns this
         */
        this.set = function (key, value) {
            Reflect.set(_this.items, key, value);
            return _this;
        };
        /**
         * 查找键
         * @param key 键名
         * @returns 键值
         */
        this.get = function (key) {
            return Reflect.get(_this.items, key);
        };
        /**
         * 删除键值对
         * @param key 键名
         * @returns Boolean
         */
        this.delete = function (key) {
            return _this.has(key)
                && Reflect.deleteProperty(_this.items, key);
        };
        /**
         * 清空字典
         * @returns Boolean
         */
        this.clear = function () {
            _this.items = {};
            return _this;
        };
        /**
         * 字典元素数量
         * @returns Number
         */
        this.size = function () {
            return Reflect
                .ownKeys(_this.items)
                .length;
        };
        /**
         * 字典 键名
         * @returns string[] 键名数组
         */
        this.keys = function () {
            return Reflect.ownKeys(_this.items);
        };
        /**
         * 字典 键值
         * @returns any[] 键值数组
         */
        this.values = function () {
            var result = [];
            var items = _this.items;
            for (var key in items) {
                if (items.hasOwnProperty(key)) {
                    var element = Reflect.get(items, key);
                    result.push(element);
                }
            }
            return result;
        };
        /**
         * 打印字典
         */
        this.print = function () {
            return _this.items;
        };
    }
    return Map;
}());
var HashMap = /** @class */ (function () {
    function HashMap(_props) {
        if (_props === void 0) { _props = {}; }
        this.table = [];
    }
    /**
   * 获取键的ASCLL码的总和
   * @param key 键
   * @returns Number
   */
    HashMap.prototype.loseloseHashCode = function (key) {
        var sum = 0;
        for (var i = 0, item = void 0; item = key[i++];) {
            sum += key.charCodeAt(i - 1);
        }
        return sum % 38;
    };
    /**
     * 散列表添加新项
     * @param key 键
     * @param value 键值
     * @returns this
     */
    HashMap.prototype.put = function (key, value) {
        var keyPosition = this.loseloseHashCode(key);
        Reflect.set(this.table, keyPosition, value);
        return this;
    };
    /**
     * 删除某项
     * @param key 键
     * @returns Boolean
     */
    HashMap.prototype.delete = function (key) {
        var keyPosition = this.loseloseHashCode(key);
        return Reflect.set(this.table, keyPosition, '');
    };
    /**
     * 获取散列表特定项
     * @param key 键
     * @returns 键值
     */
    HashMap.prototype.get = function (key) {
        return key;
    };
    /**
     * 打印散列表数据
     * @returns Array<any>
     */
    HashMap.prototype.print = function () {
        return this.table;
    };
    return HashMap;
}());
var hashmap = new HashMap({});
hashmap
    .put('duan', [1, 2, 3])
    .put('zhao', 'zhaozhao')
    .put('yang', 888)
    .put('yang', 999)
    .delete('yang');
console.log(hashmap.print());
