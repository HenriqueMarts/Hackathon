import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProjeto.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ListaProjeto() {
  
  

  return (
    <>
      
        
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Projeto
                </Typography>
                <Typography variant="h5" component="h2">
                  
                </Typography>
                <Typography variant="body2" component="p">
                  
                </Typography>
                <Typography variant="body2" component="p">
                  
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to="" className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to="" className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        
    </>
  )
}

export default ListaProjeto;


