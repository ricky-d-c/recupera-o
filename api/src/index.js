import db from './db.js';
import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize'

const {Op, col} = Sequelize;


const app = express();
app.use(cors());
app.use(express.json());

//GET funciona
app.get('/nome', async (req, resp) => {
 
        let l = await db.tb_lista_negra.findAll({order: [['id', 'desc']]});
        resp.send(l);

}) 

app.post('/nome', async (req, resp) => {

    let { nome} = req.body;

    let consulta = await db.tb_lista_negra.findOne({where: {id_nome: nome}});

    if(consulta != null) {
        resp.send({erro: '😀 Pessoa já cadastrado!'})
    } {{
            let i = await db.tb_lista_negra.create({ 
               id_nome: nome
            })
            resp.send(i)
        }
    }
}
)
//

app.listen(process.env.PORT,
    x =>  console.log(`Oxi bglh ta lá na ${process.env.PORT}`))


