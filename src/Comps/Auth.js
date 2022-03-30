import React from "react";

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
          usuario_cadastro: "",
          senha_cadastro: "",
          usuario_login: "",
          senha_login: ""
        };
      }

      mostraLogin = () => {
        const element1 = document.getElementById("formlogin");
        element1.classList.remove("hide");
        element1.classList.add("show");

        const element2 = document.getElementById("formcadastro");
        element2.classList.remove("show");
        element2.classList.add("hide");

        const element3 = document.getElementById("linklogin");
        element3.classList.add("selectauth");

        const element4 = document.getElementById("linkcadastro");
        element4.classList.remove("selectauth");
    }

    mostraCadastro = () => {
        const element1 = document.getElementById("formcadastro");
        element1.classList.remove("hide");
        element1.classList.add("show");

        const element2 = document.getElementById("formlogin");
        element2.classList.remove("show");
        element2.classList.add("hide");

        const element3 = document.getElementById("linkcadastro");
        element3.classList.add("selectauth");

        const element4 = document.getElementById("linklogin");
        element4.classList.remove("selectauth");
        
    }

    aoMudarUsuarioCadastro = (e) => {
        this.setState({ usuario_cadastro: e.target.value });
    };

    aoMudarSenhaCadastro = (e) => {
        this.setState({ senha_cadastro: e.target.value });
    };

    aoEnviarCadastro = (e) => {

        if (this.state.usuario_cadastro !== "" && this.state.senha_cadastro !== "") {
            let elemento = document.getElementById("msgsucesso");
            elemento.className = "msgsucesso";
      
            let removerClasse = document.getElementById("msgerro");
            removerClasse.className = "msgerro hide";

            this.mostraLogin();
            
            e.preventDefault();
            } else {
                let elemento = document.getElementById("msgerro");
                elemento.className = "msgerro";

                e.preventDefault();
            }
    };

    aoMudarUsuarioLogin = (e) => {
        this.setState({ usuario_login: e.target.value });
    };

    aoMudarSenhaLogin = (e) => {
        this.setState({ senha_login: e.target.value });
    };

    aoEnviarLogin = (e) => {
        console.log("Usuário Cadastrado: ", this.state.usuario_cadastro);
        console.log("Senha Cadastrada: ", this.state.senha_cadastro);
        console.log("Usuário do Login: ", this.state.usuario_login);
        console.log("Senha do Login: ", this.state.senha_login);

        if (this.state.usuario_cadastro === this.state.usuario_login &&
            this.state.usuario_cadastro === this.state.usuario_login) {
                window.location = "/listagem";
            }

        e.preventDefault();
    };

    render(){
        return(
            <div className="boxed auth-tela">
                <div className="logoapp m4"></div>
                <div className="card card-mini m4">
                    <div className="linksauth">
                        <span id="linklogin" className="selectauth"
                        onClick={this.mostraLogin}>
                            Login</span>
                        <span id="linkcadastro" className=""
                        onClick={this.mostraCadastro}>
                            Cadastro</span>
                    </div>
                    <hr />

                    <div id="formlogin" className="">
                        <p>Boas-vindas, faça seu login!</p>

                        <div className="msgsucesso hide" id="msgsucesso">
                            Usuário cadastrado com sucesso!
                        </div>

                        <div className="inputicon">
                        <ion-icon name="person"></ion-icon>
                        <input
                            type="text"
                            id="usuario_login"
                            name="usuario_login"
                            placeholder="Usuário"
                            value={this.state.usuario_login}
                            onChange={this.aoMudarUsuarioLogin}
                        ></input>
                        </div>

                        <div className="inputicon">
                        <ion-icon name="key-sharp"></ion-icon>
                        <input
                            type="password"
                            id="senha_login"
                            name="senha_login"
                            placeholder="Senha"
                            value={this.state.senha_login}
                            onChange={this.aoMudarSenhaLogin}
                        ></input>
                        </div>

                        <button type="submit" onClick={this.aoEnviarLogin}>
                        Entrar <ion-icon name="enter"></ion-icon>
                        </button>
                    </div>

                    <div id="formcadastro" className="hide">
                        <p>Preencha os campos e cadastre-se!</p>

                        <div className="inputicon">
                        <ion-icon name="person"></ion-icon>
                        <input
                            type="text"
                            id="usuario_cadastro"
                            name="usuario_cadastro"
                            placeholder="Usuário"
                            value={this.state.usuario_cadastro}
                            onChange={this.aoMudarUsuarioCadastro}
                        ></input>
                        </div>

                        <div className="inputicon">
                        <ion-icon name="key-sharp"></ion-icon>
                        <input
                            type="password"
                            id="senha_cadastro"
                            name="senha_cadastro"
                            placeholder="Senha"
                            value={this.state.senha_cadastro}
                            onChange={this.aoMudarSenhaCadastro}
                        ></input>
                        </div>

                        <div className="msgerro hide" id="msgerro">
                            Preencha todos os campos.
                        </div>

                        <button type="submit" onClick={this.aoEnviarCadastro}>
                        Entrar <ion-icon name="enter"></ion-icon>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Auth;