/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

import './cliente.css'
import axios from "axios";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    state = {
        clientes: []
    }
    componentDidMount() {
        axios.get('http://localhost:32832/clientes').catch((res) => {
            const clientes = res.response.data
            this.setState({ clientes })
        });
    }

    desligamento(id: any) {
        axios.delete(`http://localhost:32832/cliente/delete/${id}`).catch((res)=>{
            // CORS precisa ser configurado no backend para deletar o usuário.
        })
        return (null)
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col s12 m12 l12 estilo'>
                        <div className="box">
                            <h5>Clientes</h5>
                            <table className="responsive-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Visualizar</th>
                                        <th>Atualizar</th>
                                        <th>Excluir</th>
                                    </tr>


                                </thead>
                                <tbody>
                                    {this.state.clientes.map((cliente: any) =>
                                        <tr key={cliente.id}>
                                            <td>{cliente.nome}</td>
                                            <td><a href={`/perfilCliente/${cliente.id}`}><i className="fa-solid fa-eye"></i></a></td>
                                            <td><a href={`/atualizarCliente/${cliente.id}`}><i className="fa-solid fa-pen"></i></a></td>
                                            <td><button id="botaoDesligar" value={cliente.id} onClick={() => this.desligamento(cliente.id)}><i className="fa-solid fa-xmark"></i></button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}