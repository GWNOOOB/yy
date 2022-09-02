let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*BOT ON 24 JAM & BISA BUAT PRICELIST*
╭──「 *_SEWA BOT_* 」
│❏  1 MINGGU : IDR 3.000 (3K)
│❏  1 BULAN : IDR 6.000 (6K)
│❏  PERMANEN : IDR 10.000 (10K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  BISA BUAT PRICELIST
│❏  FITUR BANYAK
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME ( OTOMATIS )
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏ https://bit.ly/LinkGrubBotz
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  PULSA +5k
│❏  QRIS ALL PAYMENT
╰────
*_BOT INI MEMAKAI RDP BUKAN TERMUX/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*!

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
