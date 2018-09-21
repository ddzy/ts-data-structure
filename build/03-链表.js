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
var Point = /** @class */ (function () {
    function Point(props) {
        this.element = '';
        this.next = null;
        this.element = props.element;
    }
    return Point;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(props) {
        var _this = this;
        this.length = 0;
        // 头结点引用
        this.head = null;
        /**
         * 链表尾部添加项
         */
        this.append = function (point) {
            var node = new Point({
                element: point,
                next: null,
            });
            // 当前节点引用
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
            if (index >= 0 && index < _this.length) {
                var node = new Point({
                    element: point,
                    next: null,
                });
                var currentNode = _this.head;
                var previousNode = new Point({});
                var currentIndex = 0;
                // 第一项
                if (index === 0) {
                    node.next = currentNode;
                    _this.head = node;
                }
                else {
                    // 任意位置
                    while (currentIndex++ < index) {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                    node.next = currentNode;
                    previousNode.next = node;
                }
                _this.length++;
            }
            return _this;
        };
        /**
         * 移除特定值的项
         */
        this.remove = function (point) {
            var temp = _this.where(point);
            temp !== -1
                && _this.removeAt(temp);
            return _this;
        };
        /**
         * 元素在链表的索引
         */
        this.where = function (point) {
            var currentNode = _this.head;
            var currentIndex = 0;
            while (currentNode && currentNode.element !== point) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            return currentIndex === _this.length
                ? -1
                : currentIndex;
        };
        /**
         * 移除特定位置项
         */
        this.removeAt = function (index) {
            // 检测越界
            if (index > -1 && index < _this.length) {
                var currentNode = _this.head;
                var previousNode = null;
                var currentIndex = 0;
                // 移除第一项
                if (index === 0) {
                    _this.head = currentNode.next;
                }
                else {
                    while (currentIndex++ < index) {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                    // 移除currentNode
                    previousNode.next = currentNode.next;
                }
                _this.length--;
            }
            return _this;
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
        /**
         * 打印链表元素
         */
        this.print = function () {
            var currentNode = _this.head;
            var result = '';
            while (currentNode) {
                result += currentNode.element + "\u3001";
                currentNode = currentNode.next;
            }
            return result;
        };
    }
    return LinkedList;
}());
;
;
var DoublyPoint = /** @class */ (function () {
    function DoublyPoint(props) {
        if (props === void 0) { props = {}; }
        this.element = null;
        this.next = null;
        this.prev = null;
        this.element = props.element;
    }
    return DoublyPoint;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(props) {
        if (props === void 0) { props = {}; }
        var _this = this;
        this.length = 0;
        this.head = null;
        this.tail = null;
        /**
         * 链表大小
         * @returns number
         */
        this.size = function () {
            return _this.length;
        };
        /**
         * 链表是否为空
         * @returns boolean
         */
        this.isEmpty = function () {
            return _this.length === 0;
        };
        /**
         * 正向打印链表
         * @returns string 链表值组合
         */
        this.print = function () {
            var currentNode = _this.head;
            var result = '';
            while (currentNode) {
                result += currentNode.element + "\u3001";
                currentNode = currentNode.next;
            }
            return result;
        };
        /**
         * 反向打印链表
         * @returns string 链表值组合
         */
        this.printReverse = function () {
            var currentNode = _this.tail;
            var result = '';
            while (currentNode) {
                result += currentNode.element + "\u3001";
                currentNode = currentNode.prev;
            }
            return result;
        };
        /**
         * 指定值的索引
         * @param point 指定的值
         * @returns number 值对应索引
         */
        this.where = function (point) {
            var len = _this.length;
            var currentNode = _this.head;
            var currentIndex = 0;
            while (currentIndex++ < len) {
                if (currentNode.element === point) {
                    return currentIndex - 1;
                }
                currentNode = currentNode.next;
            }
            return -1;
        };
        /**
         * 链表尾部添加
         * @param point 添加的值
         * @returns @this
         */
        this.append = function (point) {
            var node = new DoublyPoint({
                element: point,
            });
            var currentNode = _this.head;
            // 为空
            if (_this.isEmpty()) {
                _this.head = node;
                _this.tail = node;
                currentNode = node;
            }
            else {
                // 不为空
                currentNode = _this.head;
                while (currentNode && currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
                node.prev = currentNode;
                _this.tail = node;
            }
            _this.length++;
            return _this;
        };
        /**
         * 链表首部添加
         * @param point 添加的值
         * @returns @this
         */
        this.prepend = function (point) {
            var node = new DoublyPoint({
                element: point,
            });
            var currentNode = _this.tail;
            // 链表为空
            if (_this.isEmpty()) {
                _this.head = node;
                _this.tail = node;
                currentNode = node;
            }
            else {
                currentNode = _this.tail;
                // 不为空
                while (currentNode && currentNode.prev) {
                    currentNode = currentNode.prev;
                }
                currentNode.prev = node;
                _this.head = node;
                node.next = currentNode;
            }
            _this.length++;
            return _this;
        };
        /**
         * 任意位置添加
         * @param index 插入的位置
         * @param point 对应的值
         * @returns @this
         */
        this.insert = function (index, point) {
            var node = new DoublyPoint({
                element: point,
            });
            // 作优化, 正序or逆序遍历
            var halfLength = _this.length / 2;
            var currentIndex = index > halfLength
                ? _this.length - 1
                : 0;
            var currentNode = index > halfLength
                ? _this.tail
                : _this.head;
            var previousNode = null;
            if (index > -1 && index < _this.length) {
                if (index > halfLength) {
                    // 逆序
                    while (currentIndex-- > index) {
                        currentNode = currentNode.prev;
                        previousNode = currentNode.prev;
                    }
                    currentNode.prev = node;
                    node.next = currentNode;
                    node.prev = previousNode;
                    previousNode.next = node;
                }
                else {
                    // 正序
                    while (currentIndex++ < index) {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                    currentNode.prev = node;
                    previousNode.next = node;
                    node.next = currentNode;
                    node.prev = previousNode;
                }
                _this.length++;
            }
            return _this;
        };
        /**
         * 指定值删除
         * @param point 指定值
         * @returns @this
         */
        this.remove = function (point) {
            var currentNode = _this.head;
            var previousNode = null;
            var currentIndex = 0;
            return _this;
        };
    }
    return DoublyLinkedList;
}());
var doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.append('duan');
doublylinkedlist.append('zhao');
doublylinkedlist.append('yang');
doublylinkedlist.prepend('prepend');
doublylinkedlist.append('test1');
doublylinkedlist.append('test2');
doublylinkedlist.append('test3');
doublylinkedlist.append('test4');
