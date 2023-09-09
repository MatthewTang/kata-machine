//

export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  // structural check
  if (a === null && b === null) return true;

  // structural check
  if (a === null || b === null) return false;

  // value check
  // if (a.value === b.value) return true; doesn't work bc a and b might still hv children that aren't the same
  if (a.value !== b.value) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);
}
