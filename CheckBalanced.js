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

    checkBalanced(root) {
        if (root === null) return true;
        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);
        if (Math.abs(lHeight - rHeight) > 1) return false;
        else {
            let left = this.checkBalanced(root.left);
            let right = this.checkBalanced(root.right);

            return left && right;
        }
    }
}

