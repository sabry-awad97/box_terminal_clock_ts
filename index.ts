import chalk from 'chalk';
import boxen, { Options } from 'boxen';

const options: Options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'yellow',
};

let frames = [`⠋`, `⠙`, `⠹`, `⠸`, `⠼`, `⠴`, `⠦`, `⠧`, `⠇`, `⠏`];

let frameIndex = 0;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let time = '';
  time += chalk.yellowBright(hours.toString().padStart(2, '0') + ':');
  time += chalk.greenBright(minutes.toString().padStart(2, '0') + ':');
  time += chalk.redBright(seconds.toString().padStart(2, '0') + ' ');
  time += chalk.blueBright(frames[frameIndex]);

  console.clear();
  console.log(boxen(time, options));

  frameIndex = (frameIndex + 1) % frames.length;
}, 100);
