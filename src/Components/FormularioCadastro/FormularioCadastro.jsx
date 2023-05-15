import {render} from '@testing-library/react';
import React from 'react';
//import Button from '@material-ui/core/Button';
import {TextField, Switch, Button, FormControlLabel} from '@material-ui/core';


function FormularioCadastro(){
    return (
        <form> 
            <TextField
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
                        
            <Button type="submit" variant="contained" color="primary"> Cadastrar</Button>
            
        </form>
    )
}

export default FormularioCadastro;