import { Component } from "react";
import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";

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
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;