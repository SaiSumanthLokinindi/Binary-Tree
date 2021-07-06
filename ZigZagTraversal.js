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
            else return rHeight + 1;
        }
    }

    printZigZag(root) {
        if (root === null) return;
        let ltr = false;
        const h = this.height(root);
        for (let i = 1; i <= h; i++) {
            this.printCurrentLevel(root, i, ltr);
            ltr = !ltr
        }
    }

    printCurrentLevel(root, level, ltr) {
        if (root === null) return;
        if (level === 1) {
            console.log(root.data);
        }
        else if (level > 1) {
            if (ltr) {
                this.printCurrentLevel(root.right, level - 1);
                this.printCurrentLevel(root.left, level - 1);
            } else {
                this.printCurrentLevel(root.left, level - 1);
                this.printCurrentLevel(root.right, level - 1);
            }
        }
    }
}

const ZigZag = (root) => {
    let currentLevel = [], nextLevel = [];
    let ltr = true;
    currentLevel.push(root);
    while (currentLevel.length > 0) {
        let x = currentLevel.pop();
        console.log(x.data);
        if (ltr) {
            if (x.left) nextLevel.push(x.left)
            if (x.right) nextLevel.push(x.right);
        }
        else {
            if (x.right) nextLevel.push(x.right);
            if (x.left) nextLevel.push(x.left);
        }

        if (currentLevel.length === 0) {
            ltr = !ltr;
            let temp = currentLevel;
            currentLevel = nextLevel;
            nextLevel = temp;
        }
    }
}

const tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(6);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(4);

// tree.printZigZag(tree.root);

ZigZag(tree.root);