type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    // or
    /* this.tail = this.tail.next = node; */
    // but not
    /* this.tail.next = this.tail = node; */
  }

  deque(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const h = this.head;
    this.head = this.head.next;
    // free
    h.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return h.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
