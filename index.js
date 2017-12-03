module.exports = function(bp) {
  // Listens for a first message (this is a Regex)
  bp.hear({'rasa_nlu.intent.name': 'greet'}, (event, next) => {
    event.reply('#welcome') // See the file `content.yml` to see the block
  })
  bp.hear({'rasa_nlu.intent.name': 'goodbye'}, (event, next) => {
    event.reply('#goodbye') // See the file `content.yml` to see the block
  })
  bp.hear({'rasa_nlu.intent.name': 'help'}, (event, next) => {
    event.reply('#help') // See the file `content.yml` to see the block
  })
}
