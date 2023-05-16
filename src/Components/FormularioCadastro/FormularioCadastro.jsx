//import {render} from '@testing-library/react';
import React, {useState} from 'react';
//import Button from '@material-ui/core/Button';
import {TextField, Switch, Button, FormControlLabel} from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}){
    const [nome, setNome]= useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form 
            onSubmit={(event) => {
            event.preventDefault();
            //console.log({nome, sobrenome, cpf, promocoes, novidades});
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}
        >
            
            <TextField
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
                }}
                id="nome" 
                label="Nome" 
                variant="outlined"
                margin="normal" 
                fullWidth 
            />
            <TextField
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
                
            }}

                id="Sobrenome" 
                label="Sobrenome" 
                variant="outlined"  
                margin="normal" 
                fullWidth
            />
            <TextField 
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
            }}
                onBlur={(event)=> {
                    const ehValido = validarCPF(cpf); //(event.target.value)
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <FormControlLabel 
                label="Promoções" 
                control = {
                <Switch checked={promocoes} onChange={(event)=>{
                setPromocoes(event.target.checked)}} 
                name="promocoes" defaultChecked={promocoes} 
                color="primary"/> }
            />
            <FormControlLabel 
                label="Novidades" 
                control = {
                <Switch checked={novidades} onChange={(event) =>{
                    setNovidades(event.target.checked)
                }} 
                name="novidades" defaultChecked={novidades} 
                color="primary"/> }
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