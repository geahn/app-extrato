import React, { Component } from "react";
import { useHistory } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario_login: "",
      senha_login: ""
    };
  }

  aoMudarUsuario = (e) => {
    this.setState({ usuario_login: e.target.value });
  };

  aoMudarSenha = (e) => {
    this.setState({ senha_login: e.target.value });
  };

  aoEnviar = (e) => {
    console.log("Usuário Cadastrado: ", this.state.usuario);
    console.log("Senha Cadastrada: ", this.state.senha);
    console.log("Usuário do Login: ", this.state.usuario_login);
    console.log("Senha do Login: ", this.state.senha_login);
    e.preventDefault();
  };

  render() {
    return (
      <div className="boxed auth-tela">
        <div className="logoapp m4"></div>
        <div className="card card-mini m4">
          <div className="linksauth">
            <a href="/login" className="selectauth">
              Login
            </a>
            <a href="/cadastro">Cadastro</a>
            <hr />
          </div>
          <p>Seja bem-vindo, faça seu login!</p>
          <div className="msgerro hide">Usuário e/ou senha inválido.</div>
          <form onSubmit={this.aoEnviar}>
            <div className="inputicon">
              <ion-icon name="person"></ion-icon>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                value={this.state.usuario_login}
                onChange={this.aoMudarUsuario}
              ></input>
            </div>

            <div className="inputicon">
              <ion-icon name="key-sharp"></ion-icon>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                value={this.state.senha_login}
                onChange={this.aoMudarSenha}
              ></input>
            </div>

            <button type="submit">
              Entrar <ion-icon name="enter"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
