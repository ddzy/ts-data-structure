"use strict";
/**
 * 排序算法
 */
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.arr = [];
    }
    ArrayList.merge = function (leftArr, rightArr) {
        var result = [];
        var leftIndex = 0;
        var rightIndex = 0;
        while (leftIndex < leftArr.length
            && rightIndex < rightArr.length) {
            leftArr[leftIndex] < rightArr[rightIndex]
                ? result.push(leftArr[leftIndex++])
                : result.push(rightArr[rightIndex++]);
        }
        while (leftIndex < leftArr.length) {
            result.push(leftArr[leftIndex++]);
        }
        while (rightIndex < rightArr.length) {
            result.push(rightArr[rightIndex++]);
        }
        return result;
    };
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
    ArrayList.prototype._merge = function (arr) {
        if (arr.length === 1) {
            return arr;
        }
        var middleNum = ~~(arr.length / 2);
        var leftArr = arr.slice(0, middleNum);
        var rightArr = arr.slice(middleNum, arr.length);
        return ArrayList.merge(this._merge(leftArr), this._merge(rightArr));
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
    /**
     * 选择排序
     * 特点: 找到最小值并将其放在第一位, 接着找2.3....
     */
    ArrayList.prototype.selectionSort = function () {
        var arr = this.arr;
        var len = arr.length;
        var minNum = 0;
        for (var i = 0; i < len - 1; i++) {
            minNum = i;
            for (var j = i; j < len; j++) {
                if (arr[j] < arr[minNum]) {
                    this._swap(j, minNum);
                }
            }
        }
    };
    /**
     * 插入排序
     */
    ArrayList.prototype.insertionSort = function () {
        var arr = this.arr;
        var len = arr.length;
        var j = 0;
        var temp = 0;
        for (var i = 1; i < len; i++) {
            j = i;
            temp = arr[i];
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
        }
    };
    /**
     * 归并排序
     * 特点: 将原始数组切分成较小数组, 知道每个数组只有一个位置, 接着将小数组
     * 归并成大数组, 直到只剩最后一个大数组
     */
    ArrayList.prototype.mergeSort = function () {
        this.arr = this._merge(this.arr);
    };
    /**
     * review
     */
    ArrayList.prototype.review_bubbleSort = function () {
        var arr = this.arr;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1; j++) {
                if (arr[j + 1] > arr[j]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    };
    ArrayList.prototype.review_selectionSort = function () {
        var arr = this.arr;
        var len = arr.length;
        var minNum = 0;
        for (var i = 0; i < len - 1; i++) {
            minNum = i;
            for (var j = i; j < len; j++) {
                if (arr[j] > arr[minNum]) {
                    var temp = arr[minNum];
                    arr[minNum] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    };
    ArrayList.prototype.review_insertionSort = function () {
        var arr = this.arr;
        var len = arr.length;
        var temp = 0;
        var j = 0;
        for (var i = 1; i < len; i++) {
            j = i;
            temp = arr[j];
            while (j > 0 && arr[j - 1] < temp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
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
    .insert(34)
    .insert(100)
    .insert(5);
// new Array().sort();
// sort._bubbleSort();
// sort._selectionSort();
// sort._insertionSort();
sort.mergeSort();
console.log(sort.print());
