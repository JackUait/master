// обычная клавиатура
export const keyboard = {
    keyboard: [
        [{
            text: 'Название кнопки'
        }]
    ]
}

// инлайн клавиатура
export const inlineKeyboard = {
    inline_keyboard: [
        [
            {text: 'Название кнопки', callback_data: 'button1'},
            {text: 'Ссылка', url: 'https://google.com'}
        ]
    ]
}