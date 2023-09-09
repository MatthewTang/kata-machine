//

export default class SinglyLinkedList<T> {
  public length: number;
  public head?: ListNode<T>;
  public tail?: ListNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    this.length++;
    const node = {
      value: item,
      next: this.head,
    };

    if (!this.head) {
      this.head = this.tail = node;
    }

    this.head.prev = node;
    this.head = node;
  }
  append(item: T): void {
    this.length++;
    const node = {
      value: item,
      prev: this.tail,
    };

    if (!this.tail) {
      this.head = this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) throw new Error(`idx: ${idx} out of range`);

    if (idx === 0) this.prepend(item);
    if (idx === this.length) this.append(item);

    const curr = this.getListNode(idx);
    if (!curr) return;
    const node = {
      value: item,
      next: curr,
      prev: curr.prev,
    };
    if (curr.prev) curr.prev.next = node;
  }
  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) break;
      curr = curr.next;
    }
    if (!curr) return;
    return this.removeListNode(curr);
  }
  get(idx: number): T | undefined {
    const curr = this.getListNode(idx);
    return curr?.value;
  }
  removeAt(idx: number): T | undefined {
    const curr = this.getListNode(idx);
    if (!curr) return;
    return this.removeListNode(curr);
  }
  private removeListNode(curr: ListNode<T>) {
    this.length--;
    if (curr.prev) {
      curr.prev.next = curr.next;
    } else {
      this.head = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    } else {
      this.tail = curr.next;
    }
    return curr.value;
  }
  private getListNode(idx: number): ListNode<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }
    return curr;
  }
}
