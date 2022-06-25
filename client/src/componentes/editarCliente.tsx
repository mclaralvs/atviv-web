import { Component } from "react";
import axios from "axios";

import "./formulario.css"
import { FormErrors } from "./formErrors"

type props = {
    tema: string
}

export default class EditarCliente extends Component<props> {
    state = {
        nome: '',
        sobreNome: '',
        email: '',
        ddd: '',
        telefone: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',
        id: ''
    }

    componentDidMount() {
        let url = window.location.href.split("/")
        console.log(url)


        axios.get(`http://localhost:32832/cliente/${url[4]}`).catch((res) => {
            const info = res.response.data;
            console.log(res.response.data);

            this.setState({
                nome: res.response.data.nome,
                sobreNome: res.response.data.sobreNome,
                email: res.response.data.email,
                ddd: res.response.data.telefones[0].ddd,
                telefone: res.response.data.telefones[0].numero,
                rua: res.response.data.endereco.rua,
                estado: res.response.data.endereco.estado,
                cidade: res.response.data.endereco.cidade,
                bairro: res.response.data.endereco.bairro,
                numero: res.response.data.endereco.numero,
                codigoPostal: res.response.data.endereco.codigoPostal,
                informacoesAdicionais: res.response.data.endereco.informacoesAdicionais
            })
        })

        //this.state.nome = this.state.info.nome;
    }

    handleChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.table(this.state)

        const name = event.target.name;
        const value = event.target.value;
    }

    handleSubmit = () => {
        let url = window.location.href.split("/")
        console.log(url)
        const info = {
            nome: this.state.nome,
            sobreNome: this.state.sobreNome,
            email: this.state.email,
            endereco: {
                cidade: this.state.cidade,
                bairro: this.state.bairro,
                rua: this.state.rua,
                numero: this.state.numero,
                estado: this.state.estado,
                codigoPostal: this.state.codigoPostal,
                infoAdicional: this.state.informacoesAdicionais
            },
            telefones: [{
                ddd: this.state.ddd,
                numero: this.state.numero
            }]
        }
        axios.delete(`http://localhost:32832/cliente/delete/${url[4]}`).catch((res) => {
            // CORS precisa ser configurado no backend para deletar o usuário.
        })
        axios.post("http://localhost:32832/cliente/cadastrar", info)
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
                                <input onChange={this.handleChange} id="sobreNome" name="sobreNome" type="text" className="validate" value={this.state.sobreNome} />
                                <label htmlFor="last_name">Sobrenome</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="email" name="email" type="text" className="validate" value={this.state.email} />
                                <label htmlFor="last_name">E-mail</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="ddd" name="ddd" type="number" className="validate" value={this.state.ddd} />
                                <label htmlFor="telefone">DDD</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="telefone" name="telefone" type="number" className="validate" value={this.state.telefone} />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="estado" name="estado" type="text" className="validate" value={this.state.estado} />
                                <label htmlFor="">Estado</label>
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
                                <input onChange={this.handleChange} id="codigoPostal" name="codigoPostal" type="text" className="validate" value={this.state.codigoPostal} />
                                <label htmlFor="">Código Postal</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="informacoesAdicionais" name="informacoesAdicionais" type="text" className="validate" value={this.state.informacoesAdicionais} />
                                <label htmlFor="">Informações Adicionais</label>
                            </div>
                            <div className="col s12">
                                <button onClick={this.handleSubmit} className={estiloBotao}  name="action" >Cadastrar
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