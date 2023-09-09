export default class ArrayList<T> {
  public length: number;
  public capacity: number;

  constructor(capacity: number) {
    this.length = 0;
    this.capacity = capacity;
  }

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {
    return;
  }
  get(idx: number): T | undefined {
    return;
  }
  removeAt(idx: number): T | undefined {
    return;
  }
}
