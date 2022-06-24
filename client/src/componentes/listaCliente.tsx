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
    componentDidMount(){
        axios.get('http://localhost:32832/clientes').catch( (res) => {
            const clientes = res.response.data
            this.setState({clientes})     
        });
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
                                        <th>E-mail</th>
                                        <th>Telefone</th>
                                        <th>Visualizar</th>
                                        <th>Atualizar</th>
                                        <th>Excluir</th>
                                    </tr>

                        
                                </thead>
                                <tbody>
                                    <tr>
                                        {this.state.clientes.map((cliente: any) =>
                                        <div key={cliente.id}>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.email}</td>
                                            
                                            <td><i className="fa-solid fa-eye"></i></td>
                                            <td><i className="fa-solid fa-pen"></i></td>
                                            <td><i className="fa-solid fa-xmark"></i></td>
                                        </div>
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}