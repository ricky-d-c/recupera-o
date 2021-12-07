import styled from 'styled-components'

const Container = styled.div`
    

    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-left: 1em;

    input {
        width: 209px;
        height: 30px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;

    }


    .inserir{
        display:flex;
        flex-direction: row;
        margin-top: 1em;
        margin-bottom: 1em
    }


    .eita{
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

    thead {
        background-color: #85d6b3;
    }

    table {
        margin-top: 2em;
    }


    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 
    
    .table-user {
        border-collapse: collapse;
    }

    .linha-alternada {
        background-color: #fff;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-acao > button{
        visibility: hidden;
    }

    tr:hover{
        .coluna-acao > button{
            visibility: visible;
        }
    }

    button {
        cursor: pointer;
    }

    .button-create button:hover {
        background-color: #aa3997;
        transition: 2s;
    }

    img {
        cursor: pointer;
    }

    .absolute {
        color: white;
        background-color: #119FDC;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }

    .user-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 50%;
        
    }

    
    .user-image img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        height: 57px;
        
    }

    .imagem-pr > img{
        max-width:37px;
        max-height:37px;
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export { Container, Conteudo }