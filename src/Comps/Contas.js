import React from "react";

class Contas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valor: ""
    }
}

exibirExtrato() {
    let elemento1 = document.getElementById("tabela");
    elemento1.className = "show";

    let elemento2 = document.getElementById("contas");
    elemento2.className = "hide";
}

    render(){
        return(
            <div id="contas" className="hide">
                <h1>Contas a {this.props.situacao}</h1>
                <hr />

                <div className="">
                    <input
                        type="text"
                        id="conta_valor"
                        name="conta_valor"
                        placeholder="Valor"
                    ></input>
                </div>

                <div className="">
                    <input
                        type="text"
                        id="conta_desc"
                        name="conta_desc"
                        placeholder="Descrição"
                    ></input>
                </div>

                <button type="submit">
                    Adicionar <ion-icon name="add-circle-sharp"></ion-icon>
                </button>
                <button type="submit" className="cancelar" onClick={this.exibirExtrato}>
                    Cancelar <ion-icon name="trash"></ion-icon>
                </button>
            </div>
        )
    }
}

export default Contas;