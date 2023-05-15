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
          <Typography variant="h3" component="h1" align="center" > Formulario de Cadastro</Typography>
      <FormularioCadastro/>
      </Container>
    
      );
  }

}

export default App;
