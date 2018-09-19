"use strict";
/**
 * 队列
 *
 * 原则: 先进先出
 * 特点: 尾部添加元素, 顶部移除元素, 新元素必须排在队列末尾
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Sequence = /** @class */ (function () {
    function Sequence(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.items = [];
        /**
         * 入队
         */
        this.enqueue = function (element) {
            _this.items.push(element);
            return _this;
        };
        /**
         * 出队
         */
        this.dequeue = function () {
            return _this.items.shift();
        };
        /**
         * 清除队列
         */
        this.clear = function () {
            _this.items = [];
            return _this;
        };
        /**
         * 队列是否为空
         */
        this.isEmpty = function () {
            return _this.items.length === 0;
        };
        /**
         * 队列成员个数
         */
        this.size = function () {
            return _this.items.length;
        };
        /**
         * 返回队列的第一个元素
         */
        this.front = function () {
            return _this.items[0];
        };
        /**
         * 返回队列
         */
        this.all = function () {
            return _this.items;
        };
    }
    return Sequence;
}());
/**
 * 应用: 优先队列
 * 特点: 两种选项 {
 *    1. 设置优先级, 在正确的位置添加元素.
 *    2. 入列操作添加元素, 然后按照优先级移除他们
 * }
 */
var PrioritySequence = /** @class */ (function (_super) {
    __extends(PrioritySequence, _super);
    function PrioritySequence() {
        var _this = _super.call(this) || this;
        /**
         * 入队
         */
        _this.enqueue = function (args) {
            if (_this.isEmpty()) {
                _this.items.push(args);
            }
            else {
                _this.items.forEach(function (item, index) {
                    item.priority >= args.priority
                        && _this.items.splice(index, 0, args.element);
                });
            }
            return _this;
        };
        return _this;
    }
    return PrioritySequence;
}(Sequence));
var priority = new PrioritySequence();
