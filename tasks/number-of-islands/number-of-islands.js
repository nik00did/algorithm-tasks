export const getNumberOfIslands = (grid) => {
  let islands = 0;

  grid.forEach((_, row) => {
    grid[row].forEach((_, col) => {
      if (grid[row][col] === "0") {
        return;
      }

      islands += dfs(grid, row, col);
    });
  });

  return islands;
};

function dfs(grid, row, col) {
  const isOutOfGrid =
    row < 0 || row >= grid.length || col < 0 || col >= grid[row].length;

  if (isOutOfGrid || grid[row][col] === "0") {
    return;
  }

  grid[row][col] = "0";

  const adjacencyCells = [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];

  adjacencyCells.forEach(([row, col]) => dfs(grid, row, col));

  return 1;
}
