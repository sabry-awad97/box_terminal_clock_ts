# Terminal control codes

| Control Code | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `\x1B[2J`    | Clears the terminal screen                                              |
| `\x1B[H`     | Moves the cursor to the top-left corner of the terminal                 |
| `\x1B[n;mH`  | Moves the cursor to the specified row and column                        |
| `\x1B[K`     | Clears the line from the current cursor position to the end of the line |
| `\x1B[0m`    | Resets all terminal attributes                                          |
| `\x1B[1m`    | Makes the text bold                                                     |
| `\x1B[31m`   | Sets the text color to red                                              |
| `\x1B[41m`   | Sets the background color to red                                        |
| `\x1B[?25l`  | Hides the cursor                                                        |
| `\x1B[?25h`  | Shows the cursor                                                        |
