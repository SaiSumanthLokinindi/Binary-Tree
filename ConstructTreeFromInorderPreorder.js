const Node = require('./Node');

class BinaryTree {

    constructor() {
        this.root = null;
    }

    preOrder = 0;

    buildTree(inArr, preArr, inStart, inEnd) {
        if (inStart > inEnd) return null;


        let node = new Node(preArr[this.preOrder++]);

        if (inStart === inEnd) return node;

        let ind = this.search(inArr, inStart, inEnd, node.data);
        node.left = this.buildTree(inArr, preArr, inStart, ind - 1);
        node.right = this.buildTree(inArr, preArr, ind + 1, inEnd);

        return node;
    }

    search(inArr, inStart, inEnd, value) {
        let i;
        for (i = inStart; i <= inEnd; i++) {
            if (inArr[i] === value) return i;
        }
        return i;
    }

    inOrder(root) {
        if (!root) return null;
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }
}

const tree = new BinaryTree();

let In = ['D', 'B', 'E', 'A', 'F', 'C'];
let Pre = ['A', 'B', 'D', 'E', 'C', 'F'];

tree.root = tree.buildTree(In, Pre, 0, In.length - 1);

tree.inOrder(tree.root);

