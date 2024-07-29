// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);

node1.right = node2
node1.left = node3

console.log(node1)


// Task 8: Implement a BinaryTree class with method for inserting values and performing in-order traversal to display nodes.



class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left !== null) {
                this.insertNode(root.left, newNode)
            }
            else {
                root.left = newNode
            }
        }
        else {
            if (root.right !== null) {
                this.insertNode(root.right, newNode)
            }
            else {
                root.right = newNode
            }
        }
    }

    inOrder(node) {
        if (node) {

            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);


tree.inOrder(tree.root);


// ==========explanation of the code above================

// #************* Inserting Nodes**************
// -- Insert 10:
//    - The tree is empty, so 10 becomes the root node.

// -- Insert 5:
//    - 5 is less than 10, so it becomes the left child of 10.

// -- Insert 15:
//    - 15 is greater than 10, so it becomes the right child of 10.

// -- Insert 3:
//    - 3 is less than 10 and also less than 5, so it becomes the left child of 5.

// -- Insert 7:
//    - 7 is less than 10 but greater than 5, so it becomes the right child of 5.

// -- Insert 13:
//    - 13 is greater than 10 but less than 15, so it becomes the left child of 15.


// #************* Diagramatic representation**************

//        10
//       /  \
//      5    15
//     / \   /
//    3   7 13
