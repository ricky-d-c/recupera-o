
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async listar(){
        const r = await api.get('/nome');
        return r.data;
    }

    async inserir(nome) {
        let r = await api.post('/inserir', {nome})
        return r.data;
    }

}