let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] Ingrese un texto*\n*Ejemplo:*\n*#playa ZenBot*'        
let res = `https://api-alc.herokuapp.com/api/textpro/on-the-beach?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)}
handler.command = /^(logoplaya|playa)$/i
module.exports = handler
