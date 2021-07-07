const Node = require('./Node');
const BinaryTree = require('./LevelOrderTraversal');

class Stack {
    constructor(n) {
        this.items = new Array(n);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.items.length - 1;
    }
    push(data) {
        if (this.isFull()) {
            console.log("stack is full");
            return;
        }
        this.items[++this.top] = data;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("stack is Empty");
            return;
        }
        return this.items[this.top--];
    }
    peek() {
        if (this.isEmpty()) {
            console.log("stack is empty");
            return
        }
        return this.items[this.top];
    }
}

const constructBT = (s) => {
    let stack = new Stack(s.length), root = null;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')' && s[i] !== '(') {
            stack.push(new Node(parseInt(s[i])));
        }
        else if (s[i] === '(') stack.push(s[i]);
        else {
            let node;
            while (stack.peek() !== '(') {
                x = stack.pop();
                if (x !== '(' || x !== ')') node = x;
            }
            stack.pop();
            let parent = stack.peek();
            if (parent.left) {
                parent.right = node;
            }
            else {
                parent.left = node;
            }
        }
    }
    while (!stack.isEmpty()) {
        root = stack.pop();
    }
    return root;
}

const tree = new BinaryTree();

tree.root = constructBT("4(2(3)(1))(6(5))");
tree.printLevelOrder(tree.root);