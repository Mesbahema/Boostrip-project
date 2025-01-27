import SelectInput from '@/components/inputs/SelectInput'
import inquiryOptions from '@/items/inquiryOptions'
import { useAppStore } from '@/libs/appStore'
import { Grid2 } from '@mui/material'
import { Formik, FormikProps, FormikValues } from 'formik'
import { forwardRef } from 'react'
import * as Yup from "yup"


const CollectInquiry = forwardRef<FormikProps<FormikValues>, { onSuccess: () => void }>(({ onSuccess }, ref) => {
  const validationSchema = Yup.object({
    source: Yup.string().required('inquiry source is required'),
  })

    const { inquiryData, setInquiryData } = useAppStore()
  

  const initialValues = inquiryData
  return (
    <Formik
      innerRef={ref}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setInquiryData({
          source: values.source
        })
        onSuccess()
      }}
      initialValues={initialValues}
    >
      <Grid2 container spacing={3}>
        <SelectInput
          options={inquiryOptions}
          label='What is you Inquiry Source?'
          name='source'
          placeholder='Select'
        />
      </Grid2>
    </Formik>
  )
})

CollectInquiry.displayName = "CollectInquiry";

export default CollectInquiry