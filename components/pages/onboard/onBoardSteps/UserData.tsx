import TextInput from '@/components/inputs/TextInput'
import { Grid2 } from '@mui/material'
import React from 'react'

const UserData = () => {
  return (
    <Grid2 container spacing={3}>
      <TextInput
        label='Name'
        name='name'
        placeholder='John Doe'
      />
      <TextInput
        label='Email'
        name='email'
        placeholder='name@example.com'
      />
    </Grid2>
  )
}

export default UserData