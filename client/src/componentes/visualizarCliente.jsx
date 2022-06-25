/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

import './cliente.css'
import axios from "axios";



export default class VizualizarCliente extends Component{
    state = {
        clientes: []
    }
    componentDidMount(){
        let url = window.location.href.split("/")   
        axios.get(`http://localhost:32832/cliente/${url[4]}`).catch( (res) => {
            const clientes = res.response.data
            this.setState({clientes: [clientes]})
            console.log(this.state.clientes);
        });     
    }

    render() {
        return (
            <>
            <div className="container">
                {this.state.clientes.map(cliente=> 
                <div key={cliente.id} className="row caixa">
                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Nome:</h6>
                        <p className="col s12 m4 l8">{cliente.nome}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Sobrenome:</h6>
                        <p className="col s12 m4 l8">{cliente.sobreNome}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">E-mail:</h6>
                        <p className="col s12 m4 l8">{cliente.email}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Telefone:</h6>
                        <p className="col s12 m4 l8">{"(" + cliente.telefones[0].ddd + ")" + " " + cliente.telefones[0].numero}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Estado:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.estado}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Cidade:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.cidade}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Bairro:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.bairro}</p>
                    </div>

                    {/* JUNTAR COM O NÚMERO*/}
                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Rua:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.rua}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Código Postal:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.codigoPostal}</p>
                    </div>

                    <div className="row col s12">
                        <h6 className="col s12 m4 l4">Informações Adicionais:</h6>
                        <p className="col s12 m4 l8">{cliente.endereco.informacoesAdicionais}</p>
                    </div>
                    
                </div>
                )}
            </div>
            </>
        )
    }
}