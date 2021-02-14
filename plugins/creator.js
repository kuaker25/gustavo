let handler = function (m) {
  this.sendContact(m.chat, '56935382355', 'Samu330', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
