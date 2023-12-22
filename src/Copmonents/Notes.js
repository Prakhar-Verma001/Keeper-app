import React from 'react'
import { IconButton, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Notes = (props) => {

  const handleClick = () => {
      props.onDelete(props.id);
  }

  return (
    <>
        <Paper elevation={3} sx={{height:'fit-content',borderRadius:4, p:2, m:2, position:'relative', maxWidth:'300px', pb:3}}>
            
            <Typography mt={1} variant='h6' fontSize={'1.2rem'} fontWeight={'600'}>{props.heading}</Typography>
            <Typography lineHeight={'1.4rem'} fontSize={'1.1rem'} variant='subtitle1'>{props.notes}</Typography>
            
            <IconButton onClick={handleClick} sx={{position:'absolute', top:0, right:0}}>
                <CloseIcon fontSize='small' />
            </IconButton>
        </Paper>
    </>
  )
}

export default Notes