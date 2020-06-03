// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  // alternate recursive solution
  // size() {
  //   let tally = 0;
  //   function addToTally(node) {
  //     if (!node.next) {
  //       tally++;
  //       return;
  //     } else {
  //       tally++;
  //       return addToTally(node.next);
  //     }
  //   }
  //   if (this.head) {
  //     addToTally(this.head);
  //   }
  //   return tally;
  // }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    const lastNode = this.getLast();
    lastNode.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.removeFirst();
      return;
    }

    const nodeBefore = this.getAt(index - 1);
    if (!nodeBefore || !nodeBefore.next) {
      return;
    }
    nodeBefore.next = nodeBefore.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const nodeBefore = this.getAt(index - 1) || this.getLast();

    nodeBefore.next = new Node(data, nodeBefore.next);
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}


module.exports = { Node, LinkedList };
