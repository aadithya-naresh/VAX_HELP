# VAX_HELP
 
![Github](https://img.shields.io/badge/logo-javascript-blue?logo=javascript) <br>

[![GitHub issues](https://img.shields.io/github/issues/aadithya-naresh/VAX_HELP)](https://github.com/aadithya-naresh/VAX_HELP/issues)

<a href="https://github.com/aadithya-naresh/VAX_HELP/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/aadithya-naresh/VAX_HELP"></a>
<a href="https://github.com/aadithya-naresh/VAX_HELP/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/aadithya-naresh/VAX_HELP"></a>

Telegram Bot to notify me when vaccine slots open up.

# Setup Instructions
1. Access the Github repository from your computer. 
 - First, pre-install [git](https://git-scm.com/) on  your machine. 
 - Then, clone the repo using the following command:
 ```
 git clone https://github.com/aadithya-naresh/VAX_HELP
```

2. Install the packages using ```npm install --save```. 
- This project uses JavaScript, so make sure that [NodeJS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are preinstalled.
- Install the packages.
```
npm install --save
```
3. Create Telegram Bot and find Chat ID
- Use the following link as reference and create a telegram bot [Tutorial](https://core.telegram.org/bots/tutorial)
- Send it a message, use the following API to get the chat ID
```
https://api.telegram.org/bot<Bot_token>/getUpdates
```
4. Store the secrets
- Create a file key_secrets.js inside.
- Create 2 variables (telegramKey,chatid) and assign it the values from above.
  
4. Run app.js
```
node app.js
```

# Future Improvements

1. Host this application on any cloud platform for real time updates.
