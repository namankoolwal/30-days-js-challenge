// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue[this.queue.length] = value           // or we can use array.push() method -> this.queue.push(value)
    }

    dequeue(){
        for (let i = 1 ; i< this.queue.length ; i++){   // 
            this.queue[i-1] = this.queue[i]             // or we can use array.shift() method -> this.queue.shift()  
        }                                               //              
                                                        //    
        this.queue.length = this.queue.length - 1       //   
    }
    front(){
        console.log(this.queue[0])
    }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.front()
console.log(queue)
queue.dequeue()
queue.front()
console.log(queue)


// Task 6: Use the Queue class to sirnulate a simple printer queue where print jobs are added to the queue and prccessed in order.

class PrinterQueue{
        constructor(){
            this.queue = []
        }    

        addJob(value){
            this.queue.push(value)
        }

        processJob(){
            let length = this.queue.length 
            while(length > 0 ){
                console.log(this.queue.shift())
                length --
            }
        }
}


const printer = new PrinterQueue()

printer.addJob("Job 1")
printer.addJob("Job 2")
printer.addJob("Job 3")
printer.addJob("Job 4")
printer.addJob("Job 5")
printer.processJob()