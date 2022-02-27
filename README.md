# Nodejs Slack CLI
This is a simple Slack CLI tool made using Nodejs, argv and Slack packages.

## Usage

```
node ./index.js  --message="Hi Slackers, This message is from the Nodejs Slack CLI"
```

To specify some specific channel
```
node ./index.js  --channelId="Your channel id" --message="Hi Slackers, This message is from the Nodejs Slack CLI"
```


## Setup the Slack App and credentials in CLI

1. Create a Slack App here https://api.slack.com/apps

2. Give necessary permissions for the App in the OAuth and permissions section. Like `Chat:write`

3. Install the newly created Slack App in the Slack workspace and copy the "*Bot User OAuth Token*".

4. paste the token in .env file  like this `SLACK_TOKEN="<Your token here>"`

5. Copy the Channel ID where you want to push the message.

6. Make sure that the bot (i.e Slack app name) is invited to the channel. Can execute this slack command to do so
`/invite @<Your slack bot name>`

7. Now we can send messages.


## CLI Setup

1.  Clone this repo.
```
git clone https://github.com/NeetishRaj/nodejs-slack-cli.git
```

2. Install the dependencies
```
cd nodejs-slack-cli
npm install
```

3. Now create a `.env` file in the root folder with your slack app credentials.
```
SLACK_TOKEN="<Your Slack bot user OAuth token>"
CHANNEL_ID="<Channel ID>"
```
