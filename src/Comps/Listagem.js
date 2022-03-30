import React from "react";

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
        return e.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    render(){

        const valorTotal=(this.state.entradas.reduce((extrato,currentItem) =>  extrato = extrato + currentItem.valor , 0 ));

        const mapaExtrato = this.state.entradas.map((mapa) =>
            <div>
                <p><b>Horário:</b> {mapa.horario}</p>
                <p><b>Descrição:</b> {mapa.horario}</p>
                <p><b>Valor:</b> {this.converterMoeda(mapa.valor)}</p>
                <hr />
                <hr />
            </div>)

        return(
            <div>
                <nav>
                    <ion-icon name="menu-sharp"></ion-icon>
                </nav>
                <div className="valortotal">
                    <span>Saldo:</span><span>{this.converterMoeda(valorTotal)}</span>
                    <ion-icon name="eye-outline"></ion-icon>
                </div>

                <div>
                    {mapaExtrato}    
                </div>
            </div>
        )
    }
}

export default Listagem;