//Implement queue with JavaScript and show various operations.

class Queue {
    constructor() {
        this.items = [];
    }

    //Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    //Enqueue (Add element to the Rear/Tail of the queue)
    enqueue(element) {
        this.items.push(element);
    }

    //Dequeue (Removes element from the Front/Head of the queue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue Empty";
        }
        else {
            //removes the first element
            this.items.shift();
        }
    }

    //Return the front queue element
    front() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        else {
            return this.items[0];
        }
    }

    //Print the queue
    printQueue() {
        return this.items;
    }
}

//Declare a new queue data structure object
let queue1 = new Queue();

console.log(queue1.isEmpty());
queue1.enqueue(6);
queue1.enqueue(7);
queue1.enqueue(8);
queue1.dequeue();
console.log(queue1.front());
console.log(queue1.isEmpty());
console.log(queue1.printQueue());