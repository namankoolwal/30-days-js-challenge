// Task 3: Implement a stack class with methads push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack[this.stack.length] = value  // or we can use array.push() method -> this.stack.push(value)
    }
    pop() {
        this.stack.length = this.stack.length - 1;  // or we can use array.pop() method -> this.stack.pop()
    }

    peek() {
        console.log(this.stack[this.stack.length - 1])
    }

}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.peek()
stack.pop()
stack.peek()


// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.


class Stack2 {
    constructor() {
        this.stack = []
        this.reverse = ""
    }

    getString(value) {
        for (let i of value) {
            this.stack.push(i)
        }
    }
    reverseString() {
        let length = this.stack.length

        while (length > 0) {
            this.reverse += this.stack.pop()
            length--
        }
        console.log(this.reverse)
    }
}


const reverse = new Stack2()

reverse.getString("apple")
reverse.reverseString()
