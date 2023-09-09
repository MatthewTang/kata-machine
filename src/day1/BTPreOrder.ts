function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // pre
  path.push(curr.value);

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  return path;
}

function _walk(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return;
  }

  // pre
  path.push(curr.value);
  console.log(curr.value);

  // recurse
  _walk(curr.left, path);
  _walk(curr.right, path);

  // post
  return;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  /* return walk(head, []); */

  const path = [] as number[];

  _walk(head, path);

  console.log(path);

  return path;
}
