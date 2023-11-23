/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw Error("List is empty");
    }
    const lastItem = this.tail.val;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return lastItem;
    }

    let current = this.head;
    while (current.next && current.next.next !== null) {
      current = current.next;
    }

    this.tail = current;
    this.tail.next = null;
    this.length -= 1;
    return lastItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw Error("List is empty");
    }
    let firstItem = this.head.val;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length -= 1;
    return firstItem;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= 0 && idx < this.length) {
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current.val;
    } else {
      throw Error("Index is invalid");
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= 0 && idx < this.length) {
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      current.val = val;
    } else {
      throw Error("Index is invalid");
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (idx >= 0 && idx < this.length) {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      let after = current.next;
      newNode.next = after;
      current.next = newNode;
      this.length += 1;
    } else {
      throw Error("Invalid index!");
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    let theItem = current;

    return theItem;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;
    if (this.head) {
      for (let i = 0; i < this.length; i++) {
        sum += current.val;
        current = current.next;
      }
      return sum / this.length;
    } else {
      return 0;
    }
  }
}

// module.exports = LinkedList;
