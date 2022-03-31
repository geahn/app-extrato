import React from "react";
//import Contas from "./Contas";

class Listagem extends React.Component{
    constructor() {
        super();
        this.state = { entradas: [
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
            <tr key={index}>
                <td>{mapa.horario}</td>
                <td>{mapa.desc}</td>
                <td><b className={this.estiloPosNeg(mapa.valor)}> {this.converterMoeda(mapa.valor)}</b></td>
            </tr>)

        return(
            <div>
                <nav>
                    <ion-icon size="large" id="menuhamb" name="menu-sharp"
                      onclick="document.getElementById('meumenu').style.left = '0px'">
                    </ion-icon>
                    <div className="logoapp logomini"></div>
                    <div id="meumenu">
                        <div className="boxed">
                            <ion-icon size="large" id="xfechar" name="close"
                              onclick="document.getElementById('meumenu').style.left = '-350px'">
                            </ion-icon>

                            <span className="menusaldo">
                                VALOR TOTAL<br />
                                <b>{this.converterMoeda(valorTotal)}</b>
                            </span>

                            <div className="btmenu">
                                <button>
                                    <ion-icon name="arrow-redo"></ion-icon>
                                    Contas a pagar
                                </button>

                                <button>
                                    <ion-icon name="arrow-undo"></ion-icon>
                                    Contas a receber
                                </button>
                            </div>
                        </div>
                        <a href="/" className="sair">
                            Sair <ion-icon name="log-out"></ion-icon>
                        </a>
                    </div>


                    <div className="valortotal">
                        <span>Saldo: </span><b>{this.converterMoeda(valorTotal)}</b>
                    </div>
                </nav>

                <div>
                    <table border="0">
                        <tr>
                            <td><b>Horário</b></td>
                            <td><b>Descrição</b></td>
                            <td><b>Valor</b></td>
                        </tr>
                        {mapaExtrato}    
                    </table>
                </div>

            </div>
        )
    }
}

export default Listagem;