//

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] {
  const seen: boolean[] = new Array(arr.length).fill(false);
  const dists: number[] = new Array(arr.length).fill(Infinity);
  const prev: number[] = new Array(arr.length).fill(-1);

  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;
    const edges = arr[curr];
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      const n = edge.to;
      if (seen[n]) continue;

      const dist = dists[curr] + edge.weight;
      if (dist < dists[n]) {
        prev[n] = curr;
        dists[n] = dist;
      }
    }
  }

  if (prev[sink] === -1) return [];

  // build it backwards
  let curr = sink;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  /* return [source].concat(out.reverse()); */

  out.push(source);
  return out.reverse();
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowest = Infinity;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) continue;

    if (dists[i] < lowest) {
      idx = i;
      lowest = dists[i];
    }
  }
  return idx;
}
