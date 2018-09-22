"use strict";
/**
 * 栈
 * 原则: 后进先出
 * 特点: 新元素靠近栈顶, 旧元素靠近栈底
 * 用处: 保存变量, 方法调用
 */
;
var Stack = /** @class */ (function () {
    function Stack(_props) {
        var _this = this;
        /**
         * 添加一个or多个元素到栈顶
         * @param element 任意元素
         * @returns this
         */
        this.push = function (element) {
            _this.items.push(element);
            return _this;
        };
        /**
         * 移除栈顶的元素
         * @return any 被移除的元素
         */
        this.pop = function () {
            return _this.items.pop();
        };
        /**
         * 返回栈顶的元素
         */
        this.peek = function () {
            return _this.items[_this.items.length - 1];
        };
        /**
         * 栈是否为空
         */
        this.isEmpty = function () {
            return _this.items.length === 0;
        };
        /**
         * 移除栈的所有元素
         */
        this.clear = function () {
            _this.items = [];
            return _this;
        };
        /**
         * 栈里元素个数
         */
        this.size = function () {
            return _this.items.length;
        };
        /**
         * 栈所有元素
         */
        this.all = function () {
            return _this.items;
        };
        this.items = [];
    }
    Stack.sixteenEnum = [
        '0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', 'A', 'B', 'C', 'D',
        'E', 'F'
    ];
    return Stack;
}());
/**
 * 实例: 十进制转任意进制
 */
function divideTenToTwo(baseNum, target) {
    var stack = new Stack({});
    var result = '';
    while (baseNum !== 0) {
        stack.push(~~(baseNum % target));
        baseNum = ~~(baseNum / target);
    }
    while (!stack.isEmpty()) {
        result += Stack.sixteenEnum[stack.pop()];
    }
    return result;
}
console.log(divideTenToTwo(100345, 16));
