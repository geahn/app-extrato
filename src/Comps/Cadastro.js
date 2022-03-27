import React, { useState } from "react";

class Cadastro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            usuario:    "",
            senha:      "",
            cadastrado: ""
        }
    }

    aoMudarUsuario = (e) => {
        this.setState({usuario: e.target.value})
    }

    aoMudarSenha = (e) => {
        this.setState({senha: e.target.value})
    }

    aoEnviar = (e) => {
        if (this.state.usuario != false && this.state.senha != false) {
            this.setState({cadastrado: true});
            
            let elemento = document.getElementById('msgsucesso');
            elemento.className = "msgsucesso";

            let count = 9;
            const element = document.getElementById("timer");
            setInterval(function() {
                if (count >= 0) {
                    element.innerHTML = count
                    count--
                }
            }, 1000);

            let removerClasse = document.getElementById('msgerro');
            removerClasse.className = "msgerro hide";

            setTimeout(function(){
                window.location.href = "/login";
            }, 10000);

            

            e.preventDefault()
        }
        else {
            let elemento = document.getElementById('msgerro');
            elemento.className = "msgerro"
            
            e.preventDefault()
        }

        
        console.log("Usuário: ", this.state.usuario)
        console.log("Senha: ", this.state.senha)
        console.log("Cadastrado: ", this.state.cadastrado)
    
    }

    render(){
        return(
            <div className="boxed auth-tela">
                <div className="logoapp m4"></div>
                <div className="card card-mini m4">
                    <div className="linksauth">
                        <a href="/login">Login</a>
                        <a href="/cadastro" className="selectauth">Cadastro</a>
                        <hr />
                    </div>
                    <p>Preencha os campos e cadastre-se!</p>
                    <div className="msgerro hide" id="msgerro">
                        Preencha todos os campos.
                    </div>
                    <div className="msgsucesso hide" id="msgsucesso">
                        Usuário cadastrado! Faça <a href="/login" className="linkbranco">login</a>
                        <span id="timer" className="timer">10</span>
                    </div>
                    <form onSubmit={this.aoEnviar}>
                        <div className="inputicon">
                            <ion-icon name="person"></ion-icon>
                            <input type="text" id="usuario" name="usuario" placeholder="Usuário"
                              value={this.state.usuario} onChange={this.aoMudarUsuario}></input>
                        </div>

                        <div className="inputicon">
                            <ion-icon name="key-sharp"></ion-icon>
                            <input type="password" id="senha" name="senha" placeholder="Senha"
                              value={this.state.senha} onChange={this.aoMudarSenha}></input>
                        </div>

                        <button type="submit">
                            Cadastrar <ion-icon name="add-circle-sharp"></ion-icon></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Cadastro;
