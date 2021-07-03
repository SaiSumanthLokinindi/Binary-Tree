const preOrder = (root) => {
    if (root === null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

const inOrder = (root) => {
    if (root === null) return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

const postOrder = (root) => {
    if (root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    consolel.log(root.data);
}

module.exports = { preOrder, inOrder, postOrder };
