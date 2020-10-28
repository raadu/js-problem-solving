//Define a stack in JavaScript and show various operations.

class Stack {
    constructor() {
      this.items = [];
    }
  
    //Add element to stack. Add to the top of the stack.
    push(element) {
      this.items.push(element);
    }
  
    //Remove element from the top of the stack
    pop() {
      if(this.items.length===0) {
        return "Array Empty";
      }
      else {
        this.items.pop();
      }
    }
  
    //Return top element of the stack
    peek() {
      return this.items[this.items.length-1];
    }
  
    //Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    //Print elements of the stack
    printStack() {
      return this.items;
    }
  }

  let stack1 = new Stack();

  stack1.push(9);
  stack1.push(7);
  stack1.push(6);
  stack1.pop();
  console.log(stack1.isEmpty());
  console.log(stack1.peek());
  console.log(stack1.printStack())