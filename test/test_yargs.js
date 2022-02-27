#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if(argv.message)
    console.log(argv.message)

if(argv.channelId)
    console.log(argv.channelId)


//$ node .\test_yargs.js --message="this is a test message" --channelId="random_channel_id"
//$ this is test message
//$ random_channel_id 