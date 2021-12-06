import db from './db.js';
import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize'

const {Op, col} = Sequelize;




const app = express();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT,
    x =>  console.log(`Oxe bglh ta lá na ${process.env.PORT}`))


