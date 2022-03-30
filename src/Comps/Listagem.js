import React from "react";
import Menu from "./Menu"

class Listagem extends React.Component{
    constructor() {
        super();
        this.state = {
            entradas: [
            {
            desc: "Capital de Giro",
            horario: this.definirDataHora(),
            valor: 1000
            },{
            desc: "Devoluções",
            horario: this.definirDataHora(),
            valor: 480.60
            },{
            desc: "Gastos com Remédios",
            horario: this.definirDataHora(),
            valor: -22.17
            }
            ]
        }
    }

    addZero(numero){
        if (numero <= 9) 
            return "0" + numero;
        else
            return numero;
    }

    definirDataHora(){
        const getData = new Date();
        const dia = getData.getDate();
        const mes = getData.getMonth() + 1;
        const ano = getData.getFullYear();
        const data = this.addZero(dia) + "/" + this.addZero(mes) + "/" + ano;
        
        const hora = new Date().toLocaleTimeString();

        return data + " " + hora;
    }

    converterMoeda = (e) => {
        return e.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    estiloPosNeg = (e) => {
        if (e >= 0)
            return "valorpositivo";
        else
            return "valornegativo"
    }

    render(){
        const valorTotal=(this.state.entradas.reduce((extrato,currentItem) =>  extrato = extrato + currentItem.valor , 0 ));

        const mapaExtrato = this.state.entradas.map((mapa, index) =>
            <div key={index}>
                <p><b>Horário:</b> {mapa.horario}</p>
                <p><b>Descrição:</b> {mapa.horario}</p>
                <p><b>Valor:</b> <b className={this.estiloPosNeg(mapa.valor)}> {this.converterMoeda(mapa.valor)}</b></p>
                <hr />
                <hr />
            </div>)

        return(
            <div>
                <Menu valortotal={this.converterMoeda(valorTotal)}/>

                <div>
                    {mapaExtrato}    
                </div>

                <p><b>Criei algumas entradas fictícias na state para ter um saldo disponível por padrão</b></p>

            </div>
        )
    }
}

export default Listagem;