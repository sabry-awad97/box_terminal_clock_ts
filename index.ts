import chalk from 'chalk';

const clearScreen = () => {
  process.stdout.write('\x1Bc');
};

const getTime = (): string => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const render = () => {
  clearScreen();
  console.log(chalk.greenBright(getTime()));
};

setInterval(render, 1000);