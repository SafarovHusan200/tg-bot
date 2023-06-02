const TelegramBot = require("node-telegram-bot-api");

const token = "6244197488:AAHoGcKoIu_jfTs40lvKqA24gonXeLSd3jQ";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  if (msg.text === "salom") {
    bot.sendMessage(
      chatId,
      `Assalomu alaykum @${msg.from.username} sizga qanday yordam berishim mumkin`,
      {
        reply_to_message_id: msg.message_id,
      }
    );
  } else {
    bot.sendMessage(chatId, `qabul`, {
      reply_to_message_id: msg.message_id,
    });
  }
});
