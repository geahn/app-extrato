import React from "react";

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      senha: ""
    };
  }

  aoMudarUsuario = (e) => {
    this.setState({ usuario: e.target.value });
  };

  aoMudarSenha = (e) => {
    this.setState({ senha: e.target.value });
  };

  aoEnviar = (e) => {
    if (this.state.usuario !== "" && this.state.senha !== "") {
      let elemento = document.getElementById("msgsucesso");
      elemento.className = "msgsucesso";

      let removerClasse = document.getElementById("msgerro");
      removerClasse.className = "msgerro hide";

      this.props.metodo(this.state.usuario, this.state.senha);
    } else {
      let elemento = document.getElementById("msgerro");
      elemento.className = "msgerro";
      e.preventDefault();
    }
  };

  render() {
    return (
      <div className="boxed auth-tela">
        <div className="logoapp m4"></div>
        <div className="card card-mini m4">
          <div className="linksauth">
            <a href="/">Login</a>
            <a href="/cadastro" className="selectauth">
              Cadastro
            </a>
            <hr />
          </div>
          <p>Preencha os campos e cadastre-se!</p>
          <div className="msgerro hide" id="msgerro">
            Preencha todos os campos.
          </div>
          <div className="msgsucesso hide" id="msgsucesso">
            Usuário cadastrado com sucesso!
          </div>
          <form>
            <div className="inputicon">
              <ion-icon name="person"></ion-icon>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                value={this.state.usuario}
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
                value={this.state.senha}
                onChange={this.aoMudarSenha}
              ></input>
            </div>

            <button type="submit" onClick={this.aoEnviar}>
              Cadastrar <ion-icon name="add-circle-sharp"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Cadastro;
