
// Task 9: Write a function to perform an in-order traversal of a binary tre. I-æ the nodes as they are visited.

// =========================================This is ans from ChatGPT================================

// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal function
function inOrderTraversal(root) {
  if (root === null) {
    return;
  }
  inOrderTraversal(root.left); // Visit left subtree
  console.log(root.value); // Visit root node
  inOrderTraversal(root.right); // Visit right subtree
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

// ==========================================Example Tree=========================================

//      1
//     / \
//    2   3
//   / \ / \
//  4  5 6  7





// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// =========================================This is ans from ChatGPT================================

// Define the TreeNode class
class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate the depth of a binary tree
function calculateDepth(root) {
    if (root === null) {
        return 0;
    }
    let leftDepth = calculateDepth(root.left);
    let rightDepth = calculateDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
let root1 = new TreeNode2(1);
root1.left = new TreeNode2(2);
root1.right = new TreeNode2(3);
root1.left.left = new TreeNode2(4);
root1.left.right = new TreeNode2(5);
root1.right.left = new TreeNode2(6);
root1.right.right = new TreeNode2(7);

let root2 = new TreeNode2(1);
root2.left = new TreeNode2(2);
root2.left.left = new TreeNode2(3);
root2.left.left.left = new TreeNode2(4);

let root3 = null; // Empty tree

console.log("Task: Calculate depth of a binary tree");
console.log("Depth of tree 1:", calculateDepth(root1)); // Expected output: 3
console.log("Depth of tree 2:", calculateDepth(root2)); // Expected output: 4
console.log("Depth of tree 3:", calculateDepth(root3)); // Expected output: 0

// ==========================================Example Trees=========================================

// *************Tree 1*************
//      1
//     / \
//    2   3
//   / \ / \
//  4  5 6  7
// ---------Depth: 3-------

// *************Tree 2*************
//         1
//        /
//       2
//      /
//     3
//    /
//   4
// ---------Depth: 4-------

// *************Tree 3*************
// Empty tree (null)
// ---------Depth: 0--------