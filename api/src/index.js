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

app.post('/nome', async (req, resp) => {
    try {
        let {nome} = req.body;

        let i = await db.tb_lista_negra.update({
            id_nome: nome,
        })
        resp.sendStatus(i);


    } catch (e) {
        resp.send({ erro: 'Deu erro no POST!' })
    }
})
//


app.listen(process.env.PORT,
    x =>  console.log(`foi na ${process.env.PORT}`))


