import { Command } from 'commander';

import { play } from './commands/play';
import { donate } from './commands/donate';
import { openCommand } from './commands/open';

import pkg from '../package.json';
import { customurl } from './commands/url';

const program = new Command();

program
  .name('lowfi')
  .description('A CLI tool to play lofi music')
  .version(pkg.version);

program
  .command('play')
  .description('Play a lofi radio')
  .option('-r, --random', 'Select a radio randomly')
  .action(play);

program
  .command('donate')
  .description('Donate to the creator of Lowfi')
  .action(donate);

program
  .command('open')
  .description('Open a lofi radio in your browser')
  .action(openCommand);

program
  .command('url')
  .description('Open your own URL as stream in the terminal')
  .action(customurl);

export { program };
