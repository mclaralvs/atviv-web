import { Component } from "react";
import axios from "axios"

import Info from "./info";
import "./formulario.css"

type props = {
    tema: string
}

export default class VisualizarCliente extends Component<props> {
    
    cli = axios.get(`http://localhost:32832/cliente/${this.state.id}`).catch( (res) => {
            const cliente = res.response.data
            
            
            this.state.cliente = cliente 
        
            console.log(cliente);
            
        });    
    state = {
        cliente: {},
        id: ""
    }
    
    componentDidMount(){
        let url = window.location.href.split("/")
        this.state.id = url[4]
     
        console.log(this.state.cliente);
        
    }

    render () {
        return (
            <div className="container">
                    <div  className="row caixa">
                    </div>
            </div>
        )
    }
}