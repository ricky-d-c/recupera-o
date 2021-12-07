import db from './db.js';
import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize'

const {Op, col} = Sequelize;


const app = express();
app.use(cors());
app.use(express.json());

app.get('/nome', async (req, resp) => {
 
        let l = await db.tb_lista_negra.findAll({order: [['id', 'desc']]});
        resp.send(l);

}) 

app.post('/inserir', async(req,resp) =>{
    try{
       let nome = req.body.nome;

      let inserir = {
        id_nome:nome,
      }


       let inserting = await db.tb_lista_negra.create(inserir);
       resp.send(inserting)
      }catch(e){
        resp.send(e.toString())
       }

  })
//


app.listen(process.env.PORT,
    x =>  console.log(`foi na ${process.env.PORT}`))


