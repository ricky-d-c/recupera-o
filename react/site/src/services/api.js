
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async listar(){
        const r = await api.get('/nome');
        return r.data;
    }

    async inserir( nome, categoria, precoDe, precoPor, avaliacao, descProduto, estoque, imagem, data ) {
        let r = await api.post('/produto', {nome, categoria, precoDe, precoPor, avaliacao, descProduto, estoque, imagem, data})
        return r.data
    }

}