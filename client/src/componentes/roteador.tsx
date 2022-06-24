import { Component } from "react";
import React from "react";
import axios from "axios";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import VisualizarCliente from "./visualizarCliente";
import ListaCliente from "./listaCliente";
import EditarCliente from "./editarCliente"

type state = {
    tela: string
}

function Routes() {
    return (
        <>
        <BarraNavegacao tema="#9575cd deep-purple lighten-2" botoes={[{nome:'Clientes', rota: "/"}, {nome: 'Cadastro de Clientes', rota:"/cadastrocliente"}]} seletorView={()=>{}} />
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<ListaCliente tema="purple lighten-4" />} />
                    <Route path="/cadastrocliente" element={<FormularioCadastroCliente tema="purple lighten-4" />} />
                    <Route path="/perfilCliente/:id" element={<VisualizarCliente tema="purple lighten-4" />} />
                    <Route path="/atualizarCliente/:id" element={<EditarCliente tema="purple lighten-4" />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;