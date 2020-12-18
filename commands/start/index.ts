import {messages} from "./constants"
const {hello} = messages

export const start = (ctx:any) => {
    const { from } = ctx.message
    
    ctx.reply(hello(from.first_name))
}