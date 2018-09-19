"use strict";
/**
 * 链表
 * 特点: 存储有序的元素集合
 * 元素组成: {
 *    存储元素本身的节点
 *    指向下一个元素的引用(指针)
 * }
 *
 * compare with 数组: {
 *    数组: 直接访问任何位置元素
 *    链表: 从表头迭代列表
 * }
 *
 * 应用: {
 *    1. 康茄舞队
 *    2. 寻宝游戏
 *    3. 火车
 * }
 */
;
;
var LinkedList = /** @class */ (function () {
    function LinkedList(props) {
        var _this = this;
        this.length = 0;
        // 头结点引用
        this.head = null;
        this.element = '';
        /**
         * 链表尾部添加项
         */
        this.append = function (point) {
            var node = new Point({
                element: point,
                next: null,
            });
            var currentNode;
            // 为空 && 不为空
            if (_this.isEmpty()) {
                _this.head = node;
                currentNode = node;
            }
            else {
                currentNode = _this.head;
                while (currentNode && currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
            }
            _this.length++;
            return _this;
        };
        /**
         * 任意位置插入项
         */
        this.insert = function (index, point) {
            return _this;
        };
        /**
         * 移除列表最后一项
         */
        this.remove = function (point) {
            return _this;
        };
        /**
         * 元素在链表的索引
         */
        this.where = function (point) {
            return -1;
        };
        /**
         * 移除链表特定项
         */
        this.removeAt = function (index) {
            return '';
        };
        /**
         * 链表是否为空
         */
        this.isEmpty = function () {
            return _this.length === 0;
        };
        /**
         * 链表元素个数
         */
        this.size = function () {
            return _this.length;
        };
    }
    return LinkedList;
}());
/**
 * 链表 单个节点
 */
var Point = /** @class */ (function () {
    function Point(props) {
        this.element = '';
        this.next = null;
        this.element = props.element;
        this.next = props.next;
    }
    return Point;
}());
var linkedlist = new LinkedList({});
linkedlist.append('duan');
linkedlist.append('zhao');
console.log(linkedlist.size());
