let handler = function (m) {
  this.sendContact(m.chat, '56935382355', '𝖌𝛖𝖘𝛕𝛂𝝊o', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
