let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
m.reply(`on`)
}

handler.help = ['tes']
handler.tags = ['main']
handler.command = /^(tes)$/i

module.exports = handler