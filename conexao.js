/*
//const pg=require('pg')
const {Pool}=require('pg') //utilizando pool de conexão
const { database, password } = require('pg/lib/defaults')

//const client=new pg.Client({
const pool =new Pool({ //criando a conexão através do Pool
    user:'postgres',
    host:'localhost',
    database:'aulaNode',
    password:'2725',
    port:5432
})

module.exports=pool

*/

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projeto', 'postgres', '123456', {
    host: 'localhost',
    dialect:  'postgres' 
  });

  module.exports= {
    Sequelize:Sequelize,
    sequelize:sequelize
 }