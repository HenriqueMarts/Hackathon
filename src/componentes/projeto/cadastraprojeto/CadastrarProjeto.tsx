import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarProjeto.css';
import {useNavigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CadastroProjeto() {
  

    


    return (
        <Container maxWidth="sm" className="topo">
            <form>
                //<Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro projeto</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField  id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                        
                        
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProjeto;