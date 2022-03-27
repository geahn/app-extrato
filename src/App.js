import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Comps/Login";
import Cadastro from "./Comps/Cadastro";
import Listagem from "./Comps/Listagem";
import Splash from "./Comps/Splash"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        usuario: "",
        senha:   ""
    }
  }

  enviarDadosLogin = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/'
                  element={<Splash />
                    }/>
            <Route path='/login'
                  element={<Login
                    usuario={this.state.usuario}
                    senha={this.state.senha} />
                    }/>
            <Route path="/cadastro"
                  element={<Cadastro />}/>
            <Route path="/listagem"
                  element={<Listagem />}/>
          </Routes>
        </Router>
      </div>
    )
}
}

export default App;
