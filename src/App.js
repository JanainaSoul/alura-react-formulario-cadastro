import React, { Fragment } from 'react';
import './App.css';
import { Component } from 'react';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  render () {
    return (
      <Fragment> 
          <h1> Formulario de Cadastro</h1>
      <FormularioCadastro/>
      </Fragment>
    
      );
  }

}

export default App;
