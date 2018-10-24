var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json()) 
app.use(
    bodyParser.urlencoded9{
        extended: true
    })
    )

app.post('/new-message', function(req, res) {
    const {message} = req.body
    
if (!message || message.text.toLowerCae().indexOf('Date hoje?') <0){
return res.end()
}
}

axios
 .post(
     'https://api.telegram.org/bot665718084:AAHZfSHkOy9xAUeYxPHdmYysUrGOY2Dducg/sendMessage',
     {
         chat_id: message.chat.id,
         text: 'Starbucks Haddock, 19h30'
     })

  .then(responde => {
      console.log('Message posted')
      res.end('ok')
  })
  .catch(err => {
      console.log('Error :', err)
      res.end('Error :' + err)
  })
})

app.listen(3000,function() {
    console.log('Telegram tá na porta 3000!')
})
