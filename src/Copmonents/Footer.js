import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const d = new Date();
    const CurrYear = d.getFullYear();

  return (
    <>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} boxShadow={5} zIndex={5}>
            <Box py={1} px={2} flexGrow={1} sx={{bgcolor: '#D2E0FB', textAlign: 'center'}}>
                <Typography variant='h6' fontWeight={'500'} color={'GrayText'}>App Created @ {CurrYear}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default Footer