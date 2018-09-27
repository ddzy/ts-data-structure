"use strict";
/**
 * 排序算法
 */
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.arr = [];
    }
    ArrayList.prototype.insert = function (item) {
        this.arr.push(item);
        return this;
    };
    ArrayList.prototype.print = function () {
        return this.arr.length === 0
            ? ''
            : this.arr.join();
    };
    return ArrayList;
}());
