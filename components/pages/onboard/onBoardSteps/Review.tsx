import inquiryOptions from '@/items/inquiryOptions'
import { useAppStore } from '@/libs/appStore'
import { Box } from '@mui/material'
import React from 'react'

const Review = () => {
  const { inquiryData, userData } = useAppStore()
  return (
    <Box>
      {Object.entries(userData).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
      {Object.entries(inquiryData).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {inquiryOptions.find(item => item.value === value)?.label}
        </p>
      ))}
    </Box>
  )
}

export default Review