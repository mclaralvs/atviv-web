import React, { Component } from "react";
import axios from "axios";

import "./formulario.css"
import { FormErrors } from "./formErrors";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
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

        // VERIFICADOR
        nomeValid: false,
        sobrenomeValid: false,
        emailValid: false,
        dddValid: false,
        telefoneValid: false,
        estadoValid: false,
        cidadeValid: false,
        bairroValid: false,
        ruaValid: false,
        numeroValid: false,
        codigoPostalValid: false,
        informacoesAdicionaisValid: false,
        formValid: false,
        formErrors: {nome: '', sobreNome: '', email: '', ddd: '', telefone: '', estado: '', cidade: '', bairro: '', rua: '', numero: '', codigoPostal: '', informacoesAdicionais: ''}
    }

    validateField(fieldName: any, value: any) {
        let fieldValidationErrors = this.state.formErrors;
        let nomeValid = this.state.nomeValid;
        let sobrenomeValid = this.state.sobrenomeValid;
        let emailValid = this.state.emailValid;
        let dddValid = this.state.dddValid;
        let telefoneValid = this.state.telefoneValid;
        let estadoValid = this.state.estadoValid;
        let cidadeValid = this.state.cidadeValid;
        let bairroValid = this.state.bairroValid;
        let ruaValid = this.state.ruaValid;
        let numeroValid = this.state.numeroValid;
        let codigoPostalValid = this.state.codigoPostalValid;
        let informacoesAdicionaisValid = this.state.informacoesAdicionaisValid;
      
        switch(fieldName) {
            case 'nome':
                nomeValid = value.length > 0;
                fieldValidationErrors.nome = nomeValid ? '' : ' inválido';
                break;
            case 'sobrenome':
                sobrenomeValid = value.length > 0;
                fieldValidationErrors.sobreNome = sobrenomeValid ? '' : ' inválido';
                break;
            case 'email':
                emailValid = value.match(/\S+@\S+\.\S+/i);
                fieldValidationErrors.email = emailValid ? '': ' inválido';
                break;
            case 'ddd':
                dddValid = value.match(/^(^[0-9,]*$)$/i);;
                fieldValidationErrors.ddd = dddValid ? '': ' inválido';
            break;
            case 'telefone':
                telefoneValid = value.match(/^(^[0-9,]*$)$/i);;
                fieldValidationErrors.telefone = telefoneValid ? '': ' inválido';
            break;
            case 'estado':
                estadoValid = value.length > 0;
                fieldValidationErrors.estado = estadoValid ? '': ' inválido';
            break;
            case 'cidade':
                cidadeValid = value.length > 0;
                fieldValidationErrors.cidade= cidadeValid ? '': ' inválida';
            break;
            case 'bairro':
                bairroValid = value.length > 0;
                fieldValidationErrors.bairro = bairroValid ? '': ' inválido';
            break;
            case 'rua':
                ruaValid = value.length > 0;
                fieldValidationErrors.rua = ruaValid ? '': ' inválida';
            break;
            case 'numero':
                numeroValid = value.match(/^(^[0-9,]*$)$/i);;
                fieldValidationErrors.numero = numeroValid ? '': ' inválido';
            break;
            case 'codigoPostal':
                codigoPostalValid = value.match(/^(^[0-9,]*$)$/i);;
                fieldValidationErrors.codigoPostal = codigoPostalValid ? '': ' inválido';
            break;
            case 'informacoesAdicionais':
                informacoesAdicionaisValid = value.length > 0;
                fieldValidationErrors.informacoesAdicionais = informacoesAdicionaisValid ? '': ' inválida';
            break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        nomeValid: nomeValid,
                        sobrenomeValid: sobrenomeValid,
                        emailValid: emailValid,
                        dddValid: dddValid,
                        telefoneValid: telefoneValid,
                        estadoValid: estadoValid,
                        cidadeValid: cidadeValid,
                        bairroValid: bairroValid,
                        ruaValid: ruaValid,
                        numeroValid: numeroValid,
                        codigoPostalValid: codigoPostalValid,
                        informacoesAdicionaisValid: informacoesAdicionaisValid
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.nomeValid && this.state.sobrenomeValid && this.state.emailValid && this.state.dddValid && this.state.telefoneValid && this.state.estadoValid && this.state.cidadeValid && this.state.bairroValid && this.state.ruaValid && this.state.numeroValid && this.state.codigoPostalValid && this.state.informacoesAdicionaisValid}); 
    }

    handleChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.table(this.state)

        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    handleSubmit = () => {
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
                informacoesAdicionais: this.state.informacoesAdicionais
            },
            telefones: [{
                ddd: this.state.ddd,
                numero: this.state.numero
            }]
       }
        
       
        axios.post("http://localhost:32832/cliente/cadastrar", info)

        this.setState({ 
            nome: '',
            sobreNome: '',
            email: '',
            ddd: '',
            telefone: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            estado: '',
            informacoesAdicionais: ''
        })
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
                            <div className="input-field col s4">
                                <input onChange={this.handleChange} id="ddd" name="ddd" type="number" className="validate" value={this.state.ddd} />
                                <label htmlFor="telefone">DDD</label>
                            </div>
                            <div className="input-field col s8">
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
                            <div className="input-field col s6">
                                <input onChange={this.handleChange} id="numero" name="numero" type="number" className="validate" value={this.state.numero} />
                                <label htmlFor="">Número</label>
                            </div>
                            <div className="input-field col s6">
                                <input onChange={this.handleChange} id="codigoPostal" name="codigoPostal" type="number" className="validate" value={this.state.codigoPostal} />
                                <label htmlFor="">Código Postal</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.handleChange} id="informacoesAdicionais" name="informacoesAdicionais" type="text" className="validate" value={this.state.informacoesAdicionais} />
                                <label htmlFor="">Informações Adicionais</label>
                            </div>
                            <div className="col s12">
                                <button onClick={this.handleSubmit} className={estiloBotao} type="submit" name="action" disabled={!this.state.formValid}>Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    <FormErrors formErrors={this.state.formErrors} />

                </div>
            </div>
        )
    }
}