class BinaryTree {

    constructor() {
        this.root = null;
    }

    printLevelOrder(root) {
        const height = this.height(root);
        console.log("\n--------------\n");
        for (let i = 1; i <= height; i++) this.printCurrentLevel(root, i);
        console.log("\n--------------\n");
    }

    height(root) {
        if (root === null) {
            return 0;
        }
        else {
            let lHeight = this.height(root.left);
            let rHeight = this.height(root.right);

            if (lHeight > rHeight) return lHeight + 1;
            else return rHeight + 1;
        }
    }

    printCurrentLevel(root, level) {
        if (root === null) return;
        else if (level === 1) console.log(root.data);
        else if (level > 1) {
            this.printCurrentLevel(root.left, level - 1);
            this.printCurrentLevel(root.right, level - 1);
        }
    }
}


module.exports = BinaryTree;

