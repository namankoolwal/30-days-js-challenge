// Task 1: Implement a Node class to represent an element in a linked list with properties value and next .

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);

node1.next = node2;
node2.next = node3;

console.log(node1)




// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.




class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(){
        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    displayNodes(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}


const linkedList = new LinkedList();
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.removeNode();
linkedList.displayNodes();



// =============Diagram explaination================
        // Initial State:
        // head -> null
        // tail -> null

        // After adding 2:
        // head -> [2] -> null
        // tail -> [2]

        // After adding 3:
        // head -> [2] -> [3] -> null
        // tail -> [3]

        // After adding 4:
        // head -> [2] -> [3] -> [4] -> null
        // tail -> [4]

        // After removing the last node (4):
        // head -> [2] -> [3] -> null
        // tail -> [3]

        // Display Nodes:
        // Output:
        // 2
        // 3
