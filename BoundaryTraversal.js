const Node = require('./Node');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    printBoundary(root) {
        if (root === null) return;
        if (!root.left && !root.right) {
            console.log(root.data);
            return;
        }
        return [...this.printLeftNodes(root), ...this.printLeafNodes(root, []), ...this.printRightNodes(root)];
    }

    printLeftNodes(root) {
        let res = [];
        if (!root.left) {
            res.push(root.data);
        }
        else {
            while (root.left) {
                res.push(root.data);
                root = root.left;
            }
        }
        return res;
    }

    printLeafNodes(root, res) {
        if (root === null) return res;
        if (!root.left && !root.right) {
            res.push(root.data);
        }
        res = this.printLeafNodes(root.left, res);
        res = this.printLeafNodes(root.right, res);
        return res;
    }

    printRightNodes(root) {
        let res = [];
        root = root.right;
        while (root.right) {
            res.push(root.data);
            root = root.right
        }
        return res;
    }
}

const tree = new BinaryTree();
tree.root = new Node(20);
tree.root.left = new Node(8);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(12);
tree.root.left.right.left = new Node(10);
tree.root.left.right.right = new Node(14);
tree.root.right = new Node(22);
tree.root.right.right = new Node(25);


console.log(tree.printBoundary(tree.root));