# discord-bot-template
this is just a really simple basic template for a nodejs based discord bot

PLEASE REPLACE ALL VARIABLES WITH YOUR OWN ID'S AND TOKENS (OTHERWISE IT WILL NOT WORK)

* find your bot token and client id: [dev platform](https://discord.com/developers/applications/)
* add your bot to your server via this link (dont forget to replace your client id)
* https://discordapp.com/oauth2/authorize?&client_id=734765787688206336&scope=bot&permissions=8


## settings
enable developer mode in discord itself, you need that to see id's (somewhere in appearance settings),
you can get a id from a channel/user/server by right clicking and copy id

## docs
read the [docs](https://discord.com/developers/docs/intro) if needed

## dependencies

### nodejs

#### windows and mac
install nodejs from [https://nodejs.org/de/](https://nodejs.org/de/)

#### debian based (ubuntu, etc.)
     $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
     $ sudo apt-get install -y nodejs
  
## run app
     $ npm install
     $ node bot.js

## test bot
write !hello 
