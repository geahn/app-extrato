import React from "react";

class Contas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valor: "",
            desc: ""
    }
}

exibirExtrato = () => {
    let elemento1 = document.getElementById("tabela");
    elemento1.className = "show";

    let elemento2 = document.getElementById("contas");
    elemento2.className = "hide";

    this.limparInput();
}

aoMudarValor = (e) => {
    this.setState({ valor: e.target.value });
};

aoMudarDesc = (e) => {
    this.setState({ desc: e.target.value });
};

addConta = (e) => {
    this.props.metodo(this.state.valor, this.state.desc)
    this.limparInput()
    this.exibirExtrato()
}

limparInput() {
    this.setState({
        valor: "",
        desc: ""
    })
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
                        value={this.state.valor}
                        onChange={this.aoMudarValor}
                    ></input>
                </div>

                <div className="">
                    <input
                        type="text"
                        id="conta_desc"
                        name="conta_desc"
                        placeholder="Descrição"
                        value={this.state.desc}
                        onChange={this.aoMudarDesc}
                    ></input>
                </div>

                <button type="submit" onClick={this.addConta}>
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