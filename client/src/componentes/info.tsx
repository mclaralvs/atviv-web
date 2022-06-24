import { Component } from "react"

type props = {
    cliente: {
        nome: string,
        sobreNome: string,
        email: string,
        endereco: {
            rua: string,
            bairro: string,
            estado: string,
            cidade: string,
            codigoPostal: string,
            informacoesAdicionais: string,
        }
        telefones: [{
            ddd: string,
            numero: string,
        }]
    }
}

export default class Info extends Component<props> {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row caixa">
                        <h6 className="col s6">Nome:</h6>
                        <p className="col s6">{this.props.cliente.nome}</p>

                        <h6 className="col s6">Sobrenome:</h6>
                        <p className="col s6">{this.props.cliente.sobreNome}</p>

                        <h6 className="col s6">E-mail:</h6>
                        <p className="col s6">{this.props.cliente.email}</p>

                        <h6 className="col s6">Telefone:</h6>
                        <p className="col s6">{"(" + this.props.cliente.telefones[0].ddd + ")" + " " + this.props.cliente.telefones[0].numero}</p>

                        <h6 className="col s6">Estado:</h6>
                        <p className="col s6">{this.props.cliente.endereco.estado}</p>

                        <h6 className="col s6">Cidade:</h6>
                        <p className="col s6">{this.props.cliente.endereco.cidade}</p>

                        <h6 className="col s6">Bairro:</h6>
                        <p className="col s6">{this.props.cliente.endereco.bairro}</p>

                        {/* JUNTAR COM O NÚMERO*/}
                        <h6 className="col s6">Rua:</h6>
                        <p className="col s6">{this.props.cliente.endereco.rua}</p>

                        <h6 className="col s6">Código Postal:</h6>
                        <p className="col s6">{this.props.cliente.endereco.codigoPostal}</p>

                        <h6 className="col s6">Informações Adicionais:</h6>
                        <p className="col s6">{this.props.cliente.endereco.informacoesAdicionais}</p>
                    </div>
                </div>
            </>
        )
    }
}
