import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
        <Box zIndex={5}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography sx={{py:1}} variant='h3' color={'white'}>Keeper</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}

export default Header;