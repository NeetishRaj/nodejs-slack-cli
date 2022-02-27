Nodejs Slack CLI


Steps to setup the Slack CLI

1. Create a Slack App here https://api.slack.com/apps

2. Give necessary permissions for the App in the OAuth and permissions section. Chat:write

3. Install app in the Slack workspace and copy the "Bot User OAuth Token".

4. paste the token in .env file  like this "SLACK_TOKEN="<Your token here>"

5. Copy the channelId where you want to push the message.

6. Make sure that the bot (i.e Slack app name) is invited to the channel.
/invite @nodejs-slack-cli

7. Now we can send messages.