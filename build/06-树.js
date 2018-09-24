"use strict";
/**
 * 二叉树: 节点最多只能有两个子节点
 *
 * 二叉搜索树: 二叉树的一种
 *  特点: 左侧节点存储比父节点小的值, 右侧节点存储比父节点大或等的值
 *
 * 键: 树中对节点的称呼
 *
 * 中序遍历{
 *    规则: 从最小到最大的顺序访问所有节点
 *    应用: 树的排序
 * }
 */
;
;
var TreeNode = /** @class */ (function () {
    function TreeNode(_props) {
        this.key = 0;
        this.left = null;
        this.right = null;
        this.key = _props.key;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(_props) {
        if (_props === void 0) { _props = {}; }
        this.root = null;
    }
    /**
     * 递归树
     * @param currentNode 当前节点
     * @param newNode 要插入的节点
     */
    BinarySearchTree._insertNode = function (currentNode, newNode) {
        // 目标键大于当前键,右插, 反之左插
        if (newNode.key < currentNode.key) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            }
            else {
                this._insertNode(currentNode.left, newNode);
            }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            }
            else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    };
    /**
     * 中序遍历辅助函数
     * @param currentNode 当前节点
     * @param callback 处理函数
     */
    BinarySearchTree._inOrderTraverseNode = function (currentNode, callback) {
        if (currentNode !== null) {
            this._inOrderTraverseNode(currentNode.left, callback);
            callback && callback(currentNode.key);
            this._inOrderTraverseNode(currentNode.right, callback);
        }
    };
    /**
     * 二叉树插入新键
     * @param key 插入的键
     * @returns this
     */
    BinarySearchTree.prototype.insert = function (key) {
        var treeNode = new TreeNode({ key: key });
        if (!this.root) {
            this.root = treeNode;
        }
        else {
            BinarySearchTree._insertNode(this.root, treeNode);
        }
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
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        BinarySearchTree._inOrderTraverseNode(this.root, callback);
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
var binarySearchTree = new BinarySearchTree({});
binarySearchTree
    .insert(2)
    .insert(3)
    .insert(1)
    .insert(8)
    .insert(2)
    .inOrderTraverse(function (key) {
    console.log(key);
});
