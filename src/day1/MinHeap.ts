export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): number {
    if (this.length === 0) return -1;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    // this.data.pop(); //?
    this.data[this.length] == undefined;
    this.heapifyDown(0);
    return out;
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return 2 * idx + 1;
  }

  private rightChild(idx: number): number {
    return 2 * idx + 2;
  }

  // use recursion
  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];

    if (parentV > v) {
      this.data[idx] = parentV;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  // use recursion
  private heapifyDown(idx: number): void {
    if (idx >= this.length) return;

    const rIdx = this.rightChild(idx);
    const lIdx = this.leftChild(idx);

    if (lIdx >= this.length) return;

    const rV = this.data[rIdx];
    const lV = this.data[lIdx];
    const v = this.data[idx];

    if (lV > rV && v > rV) {
      this.data[rIdx] = v;
      this.data[idx] = rV;
      this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
      this.data[lIdx] = v;
      this.data[idx] = lV;
      this.heapifyDown(lIdx);
    }
  }

  // use iteration
  private _heapifyUp(idx: number): void {
    while (idx && this.data[this.parent(idx)] > this.data[idx]) {
      let tmp = this.data[idx];
      this.data[idx] = this.data[this.parent(idx)];
      this.data[this.parent(idx)] = tmp;
      idx = this.parent(idx);
    }
  }

  // use iteration
  private _heapifyDown(idx: number) {
    while (
      idx < this.length &&
      (this.data[this.leftChild(idx)] || this.data[this.rightChild(idx)])
    ) {
      if (this.data[this.leftChild(idx)] < this.data[this.rightChild(idx)]) {
        if (this.data[this.leftChild(idx)] < this.data[idx]) {
          let tmp = this.data[idx];
          this.data[idx] = this.data[this.leftChild(idx)];
          this.data[this.leftChild(idx)] = tmp;
          idx = this.leftChild(idx);
          continue;
        }
        break;
      }
      if (this.data[this.rightChild(idx)] < this.data[idx]) {
        let tmp = this.data[idx];
        this.data[idx] = this.data[this.rightChild(idx)];
        this.data[this.rightChild(idx)] = tmp;
        idx = this.rightChild(idx);
        continue;
      }
      break;
    }
  }
}
