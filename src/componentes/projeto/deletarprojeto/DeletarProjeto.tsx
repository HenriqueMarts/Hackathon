import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarProjeto.css';
import {useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';




function DeletarProjeto() {
  
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Projeto:
              </Typography>
              <Typography color="textSecondary" >
              
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button  variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProjeto;

function buscaId(arg0: string, arg1: { headers: {}; }) {
    throw new Error('Function not implemented.');
}
function deleteId(arg0: string, arg1: { headers: {}; }) {
    throw new Error('Function not implemented.');
}

