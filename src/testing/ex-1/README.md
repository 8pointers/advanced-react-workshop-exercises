## Exercise

Test-drive `isCellAliveInNextIteration(isCellAlive, numberOfLiveNeighboursInCurrentIteration)` function that given whether a cell is dead or alive and number of alive neighbours in current iteration computes whether the cell would be dead or alive in next iteration according to the rules of the [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life):

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
