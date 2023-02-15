class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  //LinkedList consisits of head and tail that point null
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode; //everytime tail points null

    this.tail = newNode;

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

const list = new LinkedList();
list.append("a").append("b").append("c");

console.log(list.toArray());
