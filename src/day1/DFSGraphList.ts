//

function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
) {
  // if (curr === needle) return true;

  if (seen[curr]) return false;

  seen[curr] = true;

  // recurse
  // pre
  path.push(curr);
  if (curr === needle) return true;

  // recurse
  const edges = graph[curr];
  // we use for loops, not array methods bc
  // we hv to be able to return/ break out of
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    if (walk(graph, edge.to, needle, seen, path)) {
      /* need if needle checking on line 10 */
      // if (edge.to === needle) {
      //   path.push(edge.to);
      // }
      return true;
    }
  }

  // post
  path.pop();
  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];
  walk(graph, source, needle, seen, path);

  if (path.length === 0) return null;

  return path;
}
