#!/usr/bin/env node

// const { Command } = require('commander');
// const program = new Command();

const program = require('commander');

program
  .name('Slack-CLI')
  .description('CLI to perform some Slack operations')
  .version('0.8.0');

program.command('write')
  .description('writes a message to a specified channel ID')
//   .argument('<string>', 'string to split')
  .option('-c, --channelId', 'Preferred channelId to post the message. If not specified takes up default channel ID')
  .requiredOption('-m, --message', 'Actual message text to be posted')
  .action(function(str, options) {
    // const limit = options.first ? 1 : undefined;
    // console.log(str.split(options.separator, limit));
    console.log(options.exec_mode);
    console.log(str);
    console.log(`channelId: ${options.channelId}`);
    console.log(`message: ${options.message}`);

    // Commander doesn't work.
  });

program.parse(process.argv);

console.log(program.root);