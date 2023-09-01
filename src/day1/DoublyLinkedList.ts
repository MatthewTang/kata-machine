type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  private debug(): void {
    let curr = this.head;
    let output = "";
    for (let i = 0; curr && i < this.length; i++) {
      output += `${curr.value} -> ${curr.next?.value}`;

      curr = curr.next;
    }
    console.log(output);
  }

  prepend(item: T): void {
    this.length++;
    const node = {
      value: item,
    } as Node<T>;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error(`${idx} out of range`);
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    const curr = this.getAt(idx);

    if (!curr) return;

    this.length++;

    const node = {
      value: item,
      next: curr,
      prev: curr.prev,
    };

    if (!curr.prev) return;
    curr.prev.next = node;
    curr.prev = node;
  }

  append(item: T): void {
    this.length++;

    const node = {
      value: item,
    } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) return;

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    const curr = this.getAt(idx);
    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    const curr = this.getAt(idx);

    if (!curr) return;

    return this.removeNode(curr);
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  }

  private removeNode(node: Node<T>): T {
    /* this.debug(); */
    /* console.log(`removing ${node.value}`); */

    this.length--;

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    /* console.log(`removed ${node.value}`); */
    /* this.debug(); */

    return node.value;
  }
}
