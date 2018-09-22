"use strict";
/**
 * 集合
 * 特点: 无序且唯一
 * 特征: 既没有重复元素, 也没有顺序概念的数组
 * 应用: es6的Set
 */
;
var Set = /** @class */ (function () {
    function Set(_props) {
        if (_props === void 0) { _props = {}; }
        var _this = this;
        this.items = {};
        /**
         * 添加新条目
         */
        this.add = function (item) {
            !_this.has(item)
                && Reflect.set(_this.items, item, item);
            return _this;
        };
        /**
         * 移除条目
         */
        this.delete = function (item) {
            return Reflect.deleteProperty(_this.items, item);
        };
        /**
         * 集合是否包含某条目
         */
        this.has = function (item) {
            return Reflect.has(_this.items, item);
        };
        /**
         * 移除集合的所有条目
         */
        this.clear = function () {
            return Reflect
                .set(_this.items, {})
                && _this;
        };
        /**
         * 条目总数
         */
        this.size = function () {
            return Object
                .keys(_this.items)
                .length;
        };
        /**
         * 条目的值数组
         */
        this.values = function () {
            var items = _this.items;
            var result = [];
            for (var key in items) {
                Reflect.has(items, key)
                    && result.push(Reflect.get(items, key));
            }
            return result;
        };
        /**
         * 条目键名的数组
         */
        this.keys = function () {
            return Object.keys(_this.items);
        };
        /**
         * 并集
         */
        this.union = function (targetSet) {
            var newSet = new Set({});
            var currentSetValues = _this.values();
            var targetSetValues = targetSet.values();
            currentSetValues.forEach(function (item) { return newSet.add(item); });
            targetSetValues.forEach(function (item) { return newSet.add(item); });
            return newSet;
        };
    }
    return Set;
}());
var setOne = new Set({});
var setTwo = new Set({});
setOne.add(1).add(2).add(3).add(4);
setTwo.add(2).add(3).add(6).add(5);
console.log(setOne.union(setTwo).values());
