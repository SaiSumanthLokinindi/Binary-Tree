class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.hd = 0;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.min = 0;
        this.max = 0;
    }

    findMinMax(root, hd) {
        if (root === null) return;
        if (hd < this.min) this.min = hd;
        else if (hd > this.max) this.max = hd;
        this.findMinMax(root.left, hd - 1);
        this.findMinMax(root.right, hd + 1);
    }

    printTopView(root) {
        if (root === null) return;
        this.findMinMax(this.root, 0);
        let q = [], hash = {};
        q.push(root);
        while (q.length) {
            let x = q.shift();
            let hd = x.hd;
            if (hash.hasOwnProperty(hd)) hash[hd].push(x);
            else hash[hd] = [x];
            if (x.left) {
                x.left.hd = hd - 1;
                q.push(x.left);
            }
            if (x.right) {
                x.right.hd = hd + 1;
                q.push(x.right);
            }
        }
        console.log(hash)
        for (let i = this.min; i <= this.max; i++) {
            console.log(hash[i][0].data);
        }
    }
}
const tree = new BinaryTree();

// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.right = new Node(4);
// tree.root.left.right.right = new Node(5);
// tree.root.left.right.right.right = new Node(6);

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

tree.printTopView(tree.root);