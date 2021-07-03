const Node = require('./Node');

class BinaryTree {
    constructor(root) {
        this.root = null;
    }
}

const inOrder = (root) => {
    let stack = [], curr = root;
    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        if (stack.length > 0 && curr === null) {
            let d = stack.pop();
            console.log(d.data);
            curr = d.right;
        }
    }
}

const preOrder = (root) => {
    let stack = [], curr = root;
    while (stack.length > 0 || curr) {
        while (curr) {
            console.log(curr.data);
            stack.push(curr);
            curr = curr.left;
        }
        if (stack.length > 0 && curr === null) {
            let d = stack.pop();
            curr = d.right;
        }
    }
}

const postOrder = (root) => {
    let stack1 = [], stack2 = [], curr = root;
    stack1.push(curr);
    while (stack1.length > 0) {
        let d = stack1.pop();
        stack2.push(d);
        if (d.left) stack1.push(d.left);
        if (d.right) stack1.push(d.right);
    }
    while (stack2.length > 0) {
        console.log(stack2.pop().data)
    }
}

const tree = new BinaryTree();

tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.right = new Node(6);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(4);
tree.root.left.right.left = new Node(7);
tree.root.left.right.right = new Node(8);

// tree.root = new Node(2);
// tree.root.left = new Node(1);
// tree.root.right = new Node(8);
// tree.root.left.left = new Node(12);
// tree.root.right.right = new Node(9);

postOrder(tree.root);