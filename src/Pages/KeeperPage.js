import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from '../Copmonents/Header'
import Footer from '../Copmonents/Footer'
import Content from '../Copmonents/Content'

const KeeperPage = () => {

  return (
    <>
        <Box height={'100vh'}>
            <Stack direction={'column'} height={'inherit'} justifyContent={'space-between'}>
                <Stack direction={'column'} height={'inherit'}>
                    <Header />
                    <Content />
                </Stack>
                <Footer />
            </Stack>
        </Box>
    </>
  )
}

export default KeeperPage