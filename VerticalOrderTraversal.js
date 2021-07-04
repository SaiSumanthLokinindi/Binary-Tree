const Node = require('./Node');

class BinaryTree {
    constructor() {
        this.root = null;
        this.min = 0;
        this.max = 0;
    }

    findMinAndMax(root, hd) {
        if (root === null) return;
        if (hd < this.min) this.min = hd;
        else if (hd > this.max) this.max = hd;
        this.findMinAndMax(root.left, hd - 1);
        this.findMinAndMax(root.right, hd + 1);
    }

    printVerticalOrder(root) {
        if (root === null) return;
        this.findMinAndMax(root, 0);
        for (let i = this.min; i <= this.max; i++) this.printCurretLine(root, i, 0);
    }

    printCurretLine(root, line, hd) {
        if (root === null) return;
        if (hd === line) console.log(root.data);
        this.printCurretLine(root.left, line, hd - 1);
        this.printCurretLine(root.right, line, hd + 1);
    }
}

const tree = new BinaryTree();

// tree.root = new Node(5);
// tree.root.left = new Node(3);
// tree.root.right = new Node(6);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(4);
// tree.root.left.right.left = new Node(7);
// tree.root.left.right.right = new Node(8);

// tree.root = new Node(2);
// tree.root.left = new Node(1);
// tree.root.right = new Node(8);
// tree.root.left.left = new Node(12);
// tree.root.right.right = new Node(9);

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
tree.root.right.left.right = new Node(8);
tree.root.right.right.right = new Node(9);

tree.printVerticalOrder(tree.root);