const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bancoDeDados')


//get
//post
//use = esse caso serve para todas solicitações, ou seja, independente do método post, get, etc. vai passar por esse middleware
app.use(bodyParser.urlencoded({ extended: true }))

//requisicao, resposta e o next
app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())//Converter para json
})

//(:id) é um parametro que será recebido
app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id, 
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.deletarProduto(req.params.id)
    res.send(produto)
}) 

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})
