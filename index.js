/*
const express = require('express')
const app = express()

const insereAluno=require('./inserir')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.get('/teste', function (req, res) {
    res.send('Olá mundo');
  });

  app.get('/cadastro', function (req, res) {
    res.sendFile(__dirname+'/src/cadastro.html');
  });

  app.post('/add-aluno',function(req,res){
    insereAluno.inserirAluno(req.body.nome).then(function(){
      res.send("Aluno cadastrado")
    }).catch(function(erro){
      res.send("Não cadastrou "+erro)
    })

    //res.send("Nome do aluno "+req.body.nome)
  })

app.listen(8080)  
*/

const express = require('express')
const app = express()
app.use('/public', express.static(__dirname + '/public'))
const handlebars=require('express-handlebars')
const { use } = require('express/lib/application')
const Produto=require('./models/Produto')



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',function(req,res){
  res.render('inicial', {layout:false})
})

app.get('/cadastro',function(req,res){
  res.render('cad-produtos',{layout:false})
})

app.get('/criarconta',function(req,res){
  res.render('cad-cliente', {layout:false})
})

app.post('/add-produto',function(req,res){
  Produto.create({
    produto_nome:req.body.nome_produto,
    produto_valor:req.body.valor_produto,
    produto_quantidade:req.body.quantidade_produto,
    produto_marca:req.body.marca_produto
  }).then(function(){
    res.send("Produto Cadastrado")
  }).catch(function(erro){
    res.send("Produto não cadastrado"+erro)
  })

  //res.send(req.body.nome_aluno)
})

app.get('/produtos',function(req,res){
    Produto.findAll().then(function(produtos){
      res.render('produtos',{layout:false,produtos:produtos})
    })
})

app.listen(8080)