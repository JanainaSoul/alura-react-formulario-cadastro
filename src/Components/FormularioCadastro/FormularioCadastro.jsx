//import {render} from '@testing-library/react';
import React, {useState} from 'react';
//import Button from '@material-ui/core/Button';
import {TextField, Switch, Button, FormControlLabel} from '@material-ui/core';

function FormularioCadastro(){
    const [nome, setNome]= useState("Janaina");
    
    return (
        <form 
            onSubmit={(event) => {
            event.preventDefault();
            console.log(nome);
            }}
        >
            
            <TextField
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
                if(nome.length >= 3) {
                    setNome(nome.substring(0,3));
                }

                }}
                id="nome" 
                label="Nome" 
                variant="outlined"
                margin="normal" 
                fullWidth 
            />
            <TextField
                id="Sobrenome" 
                label="Sobrenome" 
                variant="outlined"  
                margin="normal" 
                fullWidth
            />
            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <FormControlLabel 
                label="Promoções" 
                control = {<Switch name="promocoes" defaultChecked color="primary"/> }
            />
            <FormControlLabel 
                label="Novidades" 
                control = {<Switch name="novidade" defaultChecked color="primary"/> }
            />
                        
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
            > 
                Cadastrar
            </Button>
            
        </form>
    )
}

export default FormularioCadastro;