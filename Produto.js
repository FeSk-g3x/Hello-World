const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Produto=sequelize.define('produtos',{
    produto_nome:{
        type: Sequelize.STRING
    },
    produto_valor:{
        type: Sequelize.INTEGER
    },
    produto_quantidade:{
        type: Sequelize.INTEGER
    },
    produto_marca:{
        type: Sequelize.STRING
    },
})

//Criação da tabela
//Produto.sync()

module.exports=Produto

