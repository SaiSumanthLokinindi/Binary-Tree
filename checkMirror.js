const Node = require('./Node');

const inOrder = (root) => {
    if (!root) return true;
    let stack = [], curr = root, res = "";
    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let x = stack.pop();
        res += x.data;
        curr = x.right;
    }
    return res;
}

const root1 = new Node(1);
root1.left = new Node(5);
root1.right = new Node(4);
root1.left.left = new Node(7);
root1.left.right = new Node(8);
root1.right.right = new Node(9);

const root2 = new Node(1);
root2.left = new Node(4);
root2.right = new Node(5);
root2.left.left = new Node(9);
root2.right.left = new Node(8);
root2.right.right = new Node(7);

const in1 = inOrder(root1);
const in2 = inOrder(root2);

if (in1 === in2.split('').reverse().join('')) console.log(true);
else console.log(false);