const Node = require('./Node');

class BinaryTree {
    constructor() {
        this.root = null;
        this.leafLevel = 0;
    }

    checkLeaf(root, level) {
        if (root === null) return true;

        if (!root.left && !root.right) {
            if (this.leafLevel === 0) this.leafLevel = level;
            else {
                if (level !== this.leafLevel) return false;
            }
        }
        return this.checkLeaf(root.left, level + 1) && this.checkLeaf(root.right, level + 1);
    }
}

const tree = new BinaryTree();
tree.root = new Node(12);
tree.root.left = new Node(5);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(9);
tree.root.left.left.left = new Node(1);
tree.root.left.right.left = new Node(2);
// tree.root.left.right.left.right = new Node(16);

console.log(tree.checkLeaf(tree.root, 0));