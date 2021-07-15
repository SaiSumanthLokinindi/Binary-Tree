const Node = require('./Node');
const levelOrderTraversal = require('./LevelOrderTraversal');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    convertToSumTree(root) {
        if (!root) return [0, 0];
        let left = this.convertToSumTree(root.left);
        let right = this.convertToSumTree(root.right);
        let x = root.data;
        if (left[0] === 0 && right[0] === 0 && left[1] === 0 && right[1] === 0) {
            root.data = 0;
        }
        else {
            root.data = left[0] + right[0] + left[1] + right[1];
        }
        return [root.data, x];
    }

    checkSumTree(root) {
        if (!root) return [true, 0];
        let left = this.checkSumTree(root.left);
        let right = this.checkSumTree(root.right);
        console.log(left, right, root.data);
        if (!left[0] || !right[0]) return [false, root.data]
        if (left[1] === 0 && right[1] === 0) {
            return [true, root.data];
        }
        else if (left[1] + right[1] === root.data) {
            return [true, root.data + left[1] + right[1]]
        }
        else return [false, root.data];
    }
}

const tree = new BinaryTree();

// tree.root = new Node(10);
// tree.root.left = new Node(-2);
// tree.root.right = new Node(6);
// tree.root.left.left = new Node(8);
// tree.root.left.right = new Node(-4);
// tree.root.right.left = new Node(7);
// tree.root.right.right = new Node(5);

tree.root = new Node(26);
tree.root.left = new Node(10);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(6);
tree.root.right.right = new Node(3);

// tree.convertToSumTree(tree.root);

// const LL = new levelOrderTraversal();

// LL.printLevelOrder(tree.root);

console.log(tree.checkSumTree(tree.root));
