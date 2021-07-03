const Node = require('./Node');
const BinaryTree = require('./LevelOrderTraversal');
const { inOrder } = require('./TreeTraversals');


const mirror = (root) => {
    if (root === null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    root.left = mirror(root.left);
    root.right = mirror(root.right);
    return root;
}

const tree = new BinaryTree();

tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.right = new Node(6);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(4);

// tree.root = new Node(2);
// tree.root.left = new Node(1);
// tree.root.right = new Node(8);
// tree.root.left.left = new Node(12);
// tree.root.right.right = new Node(9);

// tree.printLevelOrder(tree.root);
inOrder(tree.root);
console.log("\n---------------\n")

tree.root = mirror(tree.root);

// tree.printLevelOrder(tree.root);
inOrder(tree.root);
