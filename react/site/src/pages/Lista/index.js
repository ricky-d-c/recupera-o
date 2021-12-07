import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-confirm-alert/src/react-confirm-alert.css';



import { Container, Conteudo } from './styled'
import { useState, useEffect, useRef } from 'react'

import Api from '../../services/api'
const api = new Api()


export default function Index() {
    
    const [nome, setNome] = useState([])
    let loading               = useRef(null);

    
    async function listar (){

        let r = await api.listar ();
        console.log(r);
        setNome(r);

    }

    useEffect(() => {
        listar()
    }, [])


   
    return (
        <Container>
            <ToastContainer />
            <Conteudo>
                     <div className="inserir">
                         <div className="nome"><b>Nome:</b></div>
                         <input className="eita"></input>
                         <div className="cadastrar"><button>Registrar Nome</button></div>
                      </div>      



                        <div className="titulo"> <b>Lista Negra</b>
                                <table class ="table-user">
                                    <thead>
                                        <tr>
                                            <th class="imagem-coluna"></th>
                                            <th> ID </th>
                                            <th> Nome </th>
                                            <th class="coluna-acao"> </th>      
                                        </tr>
                                    </thead>
                            
                                    <tbody>
                                        {nome.map((item, i) =>    
                                            <tr className={i % 2 == 0 ? "linha-alternada" : ""}>              
                                            <th class="coluna-acao"> </th>
                                                <td> {item.id}</td>
                                                <td title={item.id_nome}> {item.id_nome != null && item.id_nome.length >= 25 ? item.id_nome.substr(0, 25) + "..." : item.id_nome} </td>                                                
                                            <th class="coluna-acao"> </th>
                                               </tr>
                                        )}
                                    </tbody> 
                                </table>
                                </div>
                    </Conteudo>
            </Container>
            
        )
}