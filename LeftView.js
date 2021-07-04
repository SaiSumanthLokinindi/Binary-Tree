const Node = require('./Node');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    printLeftView(root) {
        const h = this.height(root);
        for (let i = 1; i <= h; i++) {
            this.printLevel(root, i, 0);
        }
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

    printLevel(root, level, flag) {
        if (root === null) return flag;

        else if (level === 1 && flag === 0) {
            console.log(root.data);
            return 1;
        }
        else if (level > 1) {
            flag = this.printLevel(root.left, level - 1, flag);
            flag = this.printLevel(root.right, level - 1, flag);
        }
        return flag;
    }

    printLeftView2(root) {
        if (root === null) return;
        let q = [];
        q.push(root);
        while (q.length > 0) {
            let n = q.length, m = q.length;
            while (n--) {
                let x = q.shift();
                if (n === m - 1) {
                    console.log(x.data);
                }
                if (x.left) q.push(x.left)
                if (x.right) q.push(x.right);
            }
        }
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

tree.root = new Node(2);
tree.root.left = new Node(1);
tree.root.right = new Node(8);
tree.root.left.left = new Node(12);
tree.root.right.right = new Node(9);

tree.printLeftView2(tree.root);
