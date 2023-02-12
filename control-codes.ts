import chalk from 'chalk';

const clearScreen = () => {
  process.stdout.write('\x1B[2J');
};

const moveCursor = (row: number, col: number) => {
  process.stdout.write(`\x1B[${row};${col}H`);
};

const clearLine = () => {
  process.stdout.write('\x1B[K');
};

const resetAttributes = () => {
  process.stdout.write('\x1B[0m');
};

const setBold = () => {
  process.stdout.write('\x1B[1m');
};

const setRed = () => {
  process.stdout.write('\x1B[31m');
};

const setRedBackground = () => {
  process.stdout.write('\x1B[41m');
};

const hideCursor = () => {
  process.stdout.write('\x1B[?25l');
};

const showCursor = () => {
  process.stdout.write('\x1B[?25h');
};

const render = () => {
  clearScreen();
  moveCursor(1, 1);
  setBold();
  console.log('Bold Text');
  resetAttributes();
  moveCursor(2, 1);
  setRed();
  console.log('Red Text');
  resetAttributes();
  moveCursor(3, 1);
  setRedBackground();
  console.log('Red Background');
  resetAttributes();
  moveCursor(4, 1);
  setRed();
  setBold();
  console.log('Bold Red Text');
  resetAttributes();
};

const render2 = () => {
  clearScreen();
  moveCursor(1, 1);
  console.log(chalk.bold('Bold Text'));
  moveCursor(2, 1);
  console.log(chalk.red('Red Text'));
  moveCursor(3, 1);
  console.log(chalk.bgRed('Red Background'));
  moveCursor(4, 1);
  console.log(chalk.red.bold('Bold Red Text'));
};

hideCursor();
render();
showCursor();
// render2();
