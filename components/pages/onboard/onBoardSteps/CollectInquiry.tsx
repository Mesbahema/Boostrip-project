import SelectInput from '@/components/inputs/SelectInput'
import { Grid2 } from '@mui/material'
import React from 'react'

const CollectInquiry = () => {
  return (
    <Grid2 container spacing={3}>
    <SelectInput
      label='What is you Inquiry Source?'
      name='name'
      placeholder='John Doe'
    />
  </Grid2>
  )
}

export default CollectInquiry