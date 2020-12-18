require('dotenv').config()
import Telegraf from 'telegraf'
const TOKEN: any = process.env.TOKEN
export const bot = new Telegraf(TOKEN)

import { start, help } from './commands'
import { areYouBot } from './listeners'

// команды
bot.start(start)
bot.help(help)

// слушатели текста
bot.hears("Ты бот?", areYouBot)

// слушатели событий
// введенна неизвестная команда
bot.on('text', (ctx:any) => {
    ctx.reply('Я тебя не понимаю 😭')
})

bot.launch()