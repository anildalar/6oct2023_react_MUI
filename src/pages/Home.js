import { Box, Typography, styled } from '@mui/material'
import React from 'react'


/* const Wrapper  = styled(<Box />)(({theme})=>({
  background:"red",
})); */
const Heading = styled(<Typography  />);

export default function Home() {
  return (
        <Heading variant="h1">
          Hello 
        </Heading>
  )
}
