import { useState } from 'react';
import Layout from '../components/Layout';
export default function Integracao() {

    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(1);

    // function obterClient() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //     .then((response) => response.json())
    //     .then((data) => {setCliente(data)});
    // }

    async function obterClient() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados);
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button type="button" onClick={obterClient} >Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    );
}