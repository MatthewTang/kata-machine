const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
) {
  // base case
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.y > maze.length || curr.x > maze[0].length) {
    return false;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path
      )
    )
      return true;
  }
  // post
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  let seen: boolean[][] = [];
  let path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  console.log(path);

  return path;
}
