class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //If empty then make it the head
    if (!this.head) {
      this.head = node;
      //increment the size
      this.size++;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    //increment the size
    this.size++;
  }

  //Insert at index
  insertAtIndex(data, index) {
    //If index is not available / out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before the index
      count++;
      current = current.next; //Node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    //If out of range
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //If need to remove the element in first index
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
//Insert First
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

//Insert Last
ll.insertLast(400);

//Insert at index
ll.insertAtIndex(500, 1);

//Get specific value from index
// ll.getAt(1);

//Remove element by index
ll.removeAt(3);

//Clear List
// ll.clearList();

ll.printListData();
