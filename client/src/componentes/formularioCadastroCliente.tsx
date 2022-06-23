import React, { Component } from "react";

import "./formulario.css"

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    state = {
        nome: '',
        sobrenome: '',
        email: '',
        ddd: '',
        telefone: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        infoAdicional: ''

    }

    handleChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.table(this.state)
    }

    handleSubmit = () => {

    }

    render() {
        let estiloBotao = `btn waves-effect waves-light #9575cd deep-purple lighten-2 ${this.props.tema}`
        return (
            <div className="container">
                <div className="row caixa">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="nome" name="nome" type="text" className="validate" value={this.state.nome} />
                                <label htmlFor="first_name">Nome</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="sobrenome" name="sobrenome" type="text" className="validate" value={this.state.sobrenome} />
                                <label htmlFor="last_name">Sobrenome</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="email" name="email" type="text" className="validate" value={this.state.email} />
                                <label htmlFor="last_name">E-mail</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="ddd" name="ddd" type="text" className="validate" value={this.state.ddd} />
                                <label htmlFor="telefone">DDD</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="telefone" name="telefone" type="text" className="validate" value={this.state.telefone} />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="cidade" name="cidade" type="text" className="validate" value={this.state.cidade} />
                                <label htmlFor="">Cidade</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="bairro" name="bairro" type="text" className="validate" value={this.state.bairro} />
                                <label htmlFor="">Bairro</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="rua" name="rua" type="text" className="validate" value={this.state.rua} />
                                <label htmlFor="">Rua</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="numero" name="numero" type="number" className="validate" value={this.state.numero} />
                                <label htmlFor="">Número</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="codigoPostal" name="codigoPostal" type="number" className="validate" value={this.state.codigoPostal} />
                                <label htmlFor="">Código Postal</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="infoAdicional" name="infoAdicional" type="text" className="validate" value={this.state.infoAdicional} />
                                <label htmlFor="">Informações Adicionais</label>
                            </div>
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}