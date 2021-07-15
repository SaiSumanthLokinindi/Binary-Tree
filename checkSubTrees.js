const Node = require('./Node');

const marker = "_";

const checkDuplicates = (root, subTrees) => {

    let s = "";

    if (root === null) return s + marker;

    let lStr = checkDuplicates(root.left, subTrees);
    if (lStr === s) return s;
    let rStr = checkDuplicates(root.right, subTrees);
    if (rStr === s) return s;

    s = s + lStr + rStr;

    if (s.length > 3 && subTrees.has(s)) return "";
    else subTrees.add(s);
    return s;

}

const root = new Node('A');
root.left = new Node('B');
root.right = new Node('C');
root.left.left = new Node('D');
root.left.right = new Node('E');
root.right.right = new Node('B');
root.right.right.right = new Node('E');
root.right.right.left = new Node('D');

if (checkDuplicates(root, new Set()) === "") console.log("Yes");
else console.log("No");