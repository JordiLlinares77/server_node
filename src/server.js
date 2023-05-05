// Servidor Nodejs

// Importa os pacotes necessários 
const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 

// atribui a app uma função 
const app = express()

// falamos para o app/express utilizar um formato json para o corpo 
app.use(express.json())

// falamos para o app/express utilizar o cors e o morgan em sua execução  
app.use(cors())
app.use(morgan('dev'))

// rota :GET / 
app.get('/', (request, response) => {return response.send('ok')}) 

// inicia o servidor escutando por requisições na porta 3030 
app.listen(3000, ( )  =>  {
    console.warn(`Servidor escutando na porta 3000`)})


