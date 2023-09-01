function qs(arr: number[], lo: number, hi: number) {
  /* console.log(`lo: ${lo}`); */
  /* console.log(`hi: ${hi}`); */

  if (lo >= hi) {
    return;
  }

  const p = partition(arr, lo, hi);
  /* console.log(`p: ${p}`); */

  qs(arr, lo, p - 1);
  qs(arr, p + 1, hi);
}

function partition(arr: number[], lo: number, hi: number) {
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= arr[hi]) {
      idx += 1;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  const tmp = arr[hi];
  arr[hi] = arr[idx];
  arr[idx] = tmp;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
