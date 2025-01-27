import TextInput from '@/components/inputs/TextInput'
import { useAppStore } from '@/libs/appStore'
import { Grid2 } from '@mui/material'
import { Formik, FormikProps, FormikValues } from 'formik'
import React, { forwardRef } from 'react'
import * as Yup from "yup"

const UserData = forwardRef<FormikProps<FormikValues>, {onSuccess: () => void}>(({ onSuccess }, ref) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email format is incorrect.').required('Email is required.'),
  })

  const { userData, setUserData } = useAppStore()

  const initialValues = userData
  return (
    <Formik
    innerRef={ref}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      setUserData({
        name: values.name,
        email: values.email
      })
      onSuccess()
    }}
    initialValues={initialValues}
  >
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6}}>
        <TextInput
          label='Name'
          name='name'
          placeholder='John Doe'
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6}}>
        <TextInput
          label='Email'
          name='email'
          placeholder='name@example.com'
        />
      </Grid2>
    </Grid2>
    </Formik>
  )
})

UserData.displayName = "UserData";

export default UserData