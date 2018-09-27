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
    ArrayList.prototype._swap = function (current, next) {
        var temp = this.arr[current];
        this.arr[current] = this.arr[next];
        this.arr[next] = temp;
    };
    /**
     * 冒泡排序
     * 特点: 比较任何两个相邻的项, 如果第一个比第二个大, 则交换他们
     */
    ArrayList.prototype.bubbleSort = function () {
        var arr = this.arr;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this._swap(j, j + 1);
                }
            }
        }
    };
    return ArrayList;
}());
var sort = new ArrayList();
sort
    .insert(20)
    .insert(55)
    .insert(10)
    .insert(98)
    .insert(67)
    .insert(34);
sort.bubbleSort();
console.log(sort.print());
