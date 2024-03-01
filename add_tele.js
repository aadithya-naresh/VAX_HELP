const {telegramKey,chatid} = require('./secrets/key')
const tele_func = (name,date,number) => {
    var TelegramBot = require('telegrambot');
    var api = new TelegramBot(telegramKey);
    
    api.sendMessage({ chat_id:chatid , text: `VACCINE ALERTT!!!!${name} now has vaccines. Available on ${date}. ${number} is the availablity.` }, function (err, message) {
        if (err) throw err;
        console.log(message);
    });

}

module.exports = tele_func

