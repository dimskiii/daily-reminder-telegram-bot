var TelegramBot = require('node-telegram-bot-api'),
    bot = new TelegramBot("1354607683:AAGPe_AdYNi2RgxlD0xhId8p7hGlUtMkxdI", { polling: true });

var CronJob = require('cron').CronJob;

let globalID = null

bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  globalID = chatId
  bot.sendMessage(chatId, 
    'Lapor! Siap jaga IGOID 24/7! \nGunakan /help untuk lebih lanjut', {parse_mode : "HTML"});
});

bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Siap!', {
    "reply_markup": {
        "keyboard": [["General Meeting ID"]]
        }
    });
});

bot.onText(/\/update/, (msg, match) => {
  const chatId = msg.chat.id;
  globalID = chatId
  bot.sendMessage(chatId, 
    'Siap! <b>SATPAM</b> berhasil di update!', {parse_mode : "HTML"});
});

bot.on('message', (msg) => {
    const meetingid = "General Meeting ID";
    
    const chatId = msg.chat.id;
    if (msg.text.toString().indexOf(meetingid) === 0) {
        
        bot.sendMessage(chatId, 
            'Meeting ID : 233179780 \nPassword : Ab025978', {parse_mode : "HTML"});
    }
})

var CronJob = require('cron').CronJob;

var morning = new CronJob('00 30 09 * * 1-5', function() {
    bot.sendMessage(globalID, 
        'Semangat Pagi! Jangan lupa update <a href=\"http://www.trello.com/\"><b>Trello</b></a>!\nGeser kerjaan kamu hari ini ke card <b>working</b> ya!', {parse_mode : "HTML"});
}, null, true, 'Asia/Jakarta');

var afternoon = new CronJob('00 30 16 * * 1-5', function() {
    bot.sendMessage(globalID, 
        'Semangat Pagi! Jangan lupa update <a href=\"http://www.trello.com/\"><b>Trello</b></a>!\nGeser kerjaan kamu hari ini ke card <b>working</b> ya!', {parse_mode : "HTML"});
}, null, true, 'Asia/Jakarta');

morning.start();
afternoon.start();
