let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/10d3d8687d08396b3fe0e.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by Nakata",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Grup / 30 Hari
├ Rp. 15,000 Gopay
├ Rp. 15,000 Dana
│
├ 1 Premium / 30 Hari
├ Rp. 5,000 Gopay
├ Rp. 5.000 Dana
│
├ tertarik? hubungi: 
├ @6285748894171 (NakataArdnta)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "7795801127158496"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "7795801127158496",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6285162634171@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6288217277973\n\nowner number : wa.me/6285748894171"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler