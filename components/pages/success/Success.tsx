'use client'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography } from '@mui/material';

const Success = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={10}>
        <CheckCircleIcon sx={{
            fontSize: '4rem'
        }} color='success'/>
        <Typography variant='h3' textAlign={'center'} color="success.main" mt={4}>Lead Successfully Created!</Typography>
    </Box>
  )
}

export default Success