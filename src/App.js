import React from "react";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
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

  // metLogin(){
  //   this.setState({
  //     usuario: props_user,
  //     senha:   props_senha
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="*" element={
              <Login metodo={this.metLogin} />
              }
            />
            <Route path="/cadastro" element={
              <Cadastro />
              }
            />
            <Route path="/listagem" element={
              <Listagem />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
