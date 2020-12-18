import {messages} from './constants'

const {helpMessage} = messages

export const help = (ctx:any) => {
    ctx.reply(helpMessage)
}