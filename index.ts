import chalk from 'chalk';
import boxen, { Options } from 'boxen';
import { spinners } from './spinners.js';

const options: Options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'yellow',
};

let dots = spinners.dots;

let frameIndex = 0;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.toDateString();

  let time = '';
  time += chalk.yellowBright(hours.toString().padStart(2, '0') + ':');
  time += chalk.greenBright(minutes.toString().padStart(2, '0') + ':');
  time += chalk.redBright(seconds.toString().padStart(2, '0') + ' ');
  time += chalk.blueBright(day);
  time += chalk.black(dots.frames[frameIndex]);

  console.clear();
  console.log(boxen(time, options));

  frameIndex = (frameIndex + 1) % dots.frames.length;
}, dots.interval);
