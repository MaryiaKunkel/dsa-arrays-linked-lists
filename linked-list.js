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
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
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
    let lastItem;

    if (!this.head.next) {
      lastItem = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      lastItem = current.next.val;
      current.next = null;
      this.tail = current;
    }
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
    } else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length) {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    } else if (idx > 0 && idx <= this.length) {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    } else {
      throw Error("Invalid index!");
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let removedItem;
    if (!this.head) {
      throw Error("List is empty");
    } else if (idx === 0) {
      removedItem = this.head;
      this.head = this.head.next;
      removedItem.next = null;
    } else if (idx === this.length - 1) {
      removedItem = this.tail;
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    } else if (idx > 0 && idx < this.length - 1) {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      removedItem = current.next;
      current.next = current.next.next;
      removedItem.next = null;
    } else {
      throw Error("Invalid index!");
    }
    this.length -= 1;
    return removedItem;
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
