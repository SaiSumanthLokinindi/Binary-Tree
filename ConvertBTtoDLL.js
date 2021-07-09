const Node = require('./Node');

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const printDLL = (head) => {
    let res = [], temp = head;
    res.push("null");
    while (temp) {
        res.push(temp.data);
        temp = temp.next;
    }
    res.push("null");
    console.log("\n----------------\n");
    console.log(res.join(' <-> '));
    console.log("\n----------------\n");
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    convertToDLL(root) {
        let tail = this.convert(root, null);
        let temp = tail;
        while (temp.prev) {
            temp = temp.prev;
        }
        let head = temp;
        printDLL(head);
    }

    convert(root, tail) {
        if (!root) return tail;
        tail = this.convert(root.left, tail);
        let newNode = new LinkedListNode(root.data);
        if (!tail) {
            tail = newNode;
        }
        else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        tail = this.convert(root.right, tail);
        return tail;
    }
}

const tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(12);
tree.root.right = new Node(15);
tree.root.left.left = new Node(25);
tree.root.left.right = new Node(30);
tree.root.right.left = new Node(36);

tree.convertToDLL(tree.root);