import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Comps/Login";
import Cadastro from "./Comps/Cadastro";
import Listagem from "./Comps/Listagem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      senha: ""
    };
  }

  metodoCadastro = (e) => {
    this.setState({
      usuario: this.props.usuario,
      senha: this.props.senha
    });
    alert("Usuario: " + this.state.usuario);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Login usuario={this.state.usuario} senha={this.state.senha} />
              }
            />
            <Route
              path="/cadastro"
              element={<Cadastro metodo={this.metodoCadastro} />}
            />
            <Route path="/listagem" element={<Listagem />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
