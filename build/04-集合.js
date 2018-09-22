"use strict";
/**
 * 集合
 * 特点: 无序且唯一
 * 特征: 既没有重复元素, 也没有顺序概念的数组
 * 应用: es6的Set
 */
;
var Set = /** @class */ (function () {
    function Set(props) {
        if (props === void 0) { props = {}; }
        this.items = {};
        /**
         * 添加新条目
         */
        this.add = function (item) {
        };
        /**
         * 移除条目
         */
        this.delete = function () {
        };
        /**
         * 集合是否包含某条目
         */
        this.has = function (item) {
        };
        /**
         * 移除集合的所有条目
         */
        this.clear = function () {
        };
        /**
         * 条目总数
         */
        this.size = function () {
        };
        /**
         * 条目的值数组
         */
        this.values = function () {
        };
        /**
         * 条目键名的数组
         */
        this.keys = function () {
        };
    }
    return Set;
}());
