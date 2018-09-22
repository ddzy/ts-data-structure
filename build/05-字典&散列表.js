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
            return 1;
        };
        /**
         * 字典 键名
         * @returns string[] 键名数组
         */
        this.keys = function () {
            return [];
        };
        /**
         * 字典 键值
         * @returns any[] 键值数组
         */
        this.values = function () {
            return [];
        };
    }
    return Map;
}());
var mapOne = new Map({});
mapOne.set('duan', [1, 2]).set('zhao', [3, 4, 5]);
mapOne.clear();
console.log(mapOne.get('zhao'));
