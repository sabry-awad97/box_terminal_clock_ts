import chalk from 'chalk';
import boxen from 'boxen';

const getTime = (): string => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  let time = '';
  time += chalk.yellowBright(hours + ':');
  time += chalk.greenBright(minutes + ':');
  time += chalk.redBright(seconds);

  return time;
};

const render = () => {
  console.clear();
  console.log(
    boxen(getTime(), {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'yellow',
    })
  );
};

setInterval(render, 1000);
