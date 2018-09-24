"use strict";
/**
 * 二叉树: 节点最多只能有两个子节点
 *
 * 二叉搜索树: 二叉树的一种
 *  特点: 左侧节点存储比父节点小的值, 右侧节点存储比父节点大或等的值
 *
 * 键: 树中对节点的称呼
 */
;
;
var TreeNode = /** @class */ (function () {
    function TreeNode(_props) {
        if (_props === void 0) { _props = {}; }
        this.key = 0;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(_props) {
        if (_props === void 0) { _props = {}; }
        this.root = null;
    }
    /**
     * 二叉树插入新键
     * @param key 插入的键
     * @returns this
     */
    BinarySearchTree.prototype.insert = function (key) {
        return this;
    };
    /**
     * 删除二叉树中的某个键
     * @param key 删除的键
     * @returns Boolean
     */
    BinarySearchTree.prototype.delete = function (key) {
        return false;
    };
    /**
     * 查找二叉树的键
     * @param key 查找的键
     * @returns Boolean
     */
    BinarySearchTree.prototype.search = function (key) {
        return false;
    };
    /**
     * 返回树中最大的键
     */
    BinarySearchTree.prototype.max = function () {
    };
    /**
     * 返回树中最小的键
     */
    BinarySearchTree.prototype.min = function () {
    };
    /**
     * 中序遍历
     */
    BinarySearchTree.prototype.inOrderTraverse = function () {
    };
    /**
     * 先序遍历
     */
    BinarySearchTree.prototype.preOrderTraverse = function () {
    };
    /**
     * 后序遍历
     */
    BinarySearchTree.prototype.postOrderTraverse = function () {
    };
    return BinarySearchTree;
}());
