const foo = (n: number): number => {
  // pre-recurse
  console.log(n);

  // base case
  if (n == 1) {
    console.log(n);
    return 1;
  }

  // recurse
  const c = n + foo(n - 1);

  // post-recurse
  console.log(n);
  return c;
};

foo(5);


