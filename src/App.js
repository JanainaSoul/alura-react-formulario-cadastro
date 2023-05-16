import React from 'react';
import './App.css';
import { Component } from 'react';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
//import '@fontsource-roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class App extends Component {

  render () {
    return (
      <Container component="article" maxWidth="sm" > 
          <Typography variant="h3" component="h1" align="center" > Formulário de Cadastro</Typography>
      <FormularioCadastro  aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

export default App;
