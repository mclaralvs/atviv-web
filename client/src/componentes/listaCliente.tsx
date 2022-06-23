/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

import './cliente.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
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
                                        <td>Matheus Sakuragui</td>
                                        <td>matheus.sakuragui@gmail.com</td>
                                        <td>12 12345-6789</td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><i className="fa-solid fa-pen"></i></td>
                                        <td><i className="fa-solid fa-xmark"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Mariana Ayumi</td>
                                        <td>mariana.ayumi@gmail.com</td>
                                        <td>12 23456-7890</td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><i className="fa-solid fa-pen"></i></td>
                                        <td><i className="fa-solid fa-xmark"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Maria Clara Faria</td>
                                        <td>maria.faria@gmail.com</td>
                                        <td>12 34567-8901</td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><i className="fa-solid fa-pen"></i></td>
                                        <td><i className="fa-solid fa-xmark"></i></td>
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