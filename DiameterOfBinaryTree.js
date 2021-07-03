const Node = require('./Node');
class BinaryTree {
    constructor() {
        this.root = null;
    }

    height(root) {
        if (root === null) return 0;
        else {
            let lHeight = this.height(root.left);
            let rHeight = this.height(root.right);

            if (lHeight > rHeight) return lHeight + 1;
            else return rHeight + 1
        }
    }

    diameter(root) {
        if (root === null) return 0;
        if (!root.left || !root.right) {
            return this.height(root);
        } else {
            const left = this.height(root.left);
            const right = this.height(root.right);
            return left + right + 1;
        }
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(6);
tree.root.left.right.right = new Node(6);
tree.root.right.right = new Node(1);
tree.root.right.right.right = new Node(2);
tree.root.right.right.right.left = new Node(3);
tree.root.right.right.right.right = new Node(4);
tree.root.right.right.right.left.right = new Node(5);



console.log(tree.diameter(tree.root));