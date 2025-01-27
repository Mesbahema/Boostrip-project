"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import onBoardItems from '@/items/onBoardItems';
import { FormikProps, FormikValues } from 'formik';
import { useCreateLead } from '@/libs/hooks/useCreateLead';
import { useAppStore } from '@/libs/appStore';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';

export default function Onboard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    if (activeStep === 0) return
    setActiveStep(activeStep - 1);
  };

  const { Component } = onBoardItems[activeStep]

  const { isSuccess, isPending, mutate } = useCreateLead()

  const { inquiryData, userData } = useAppStore()

  const formRef = React.useRef<FormikProps<FormikValues>>(null);

  const handleSubmit = () => {
    if (activeStep + 1 >= onBoardItems.length) {
      mutate({ ...inquiryData, ...userData })
    }
    else if (formRef.current) {
      // 

      formRef.current.submitForm();

    }
  }
  const router = useRouter()
  React.useEffect(() => {
    if(isSuccess) router.push('/success')
  }, [isSuccess])

  const onSuccess = () => {
    if (activeStep >= onBoardItems.length) {
      return
    } else {
      setActiveStep(pre => pre += 1)
    }
  }

  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          width: '100%',
          backgroundColor: { xs: 'transparent', sm: 'background.default' },
          alignItems: 'center',
          pt: { xs: 0, sm: 8 },
          px: { xs: 2, sm: 5 },
          gap: { xs: 4, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: { sm: 'space-between', md: 'flex-end' },
            alignItems: 'center',
            width: '100%',
            maxWidth: { sm: '100%', md: 600 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexGrow: 1,
            }}
          >
            <Stepper
              id="desktop-stepper"
              activeStep={activeStep}
              sx={{ width: '100%', height: 40 }}
            >
              {onBoardItems.map((item) => (
                <Step
                  sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
                  key={item.title}
                >
                  <StepLabel>{item.title}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            maxWidth: { sm: '100%', md: 600 },
            maxHeight: '720px',
            gap: { xs: 5, md: 'none' },
          }}
        >
          <Stepper
            id="mobile-stepper"
            activeStep={activeStep}
            alternativeLabel
            sx={{ display: { sm: 'flex', md: 'none' } }}
          >
            {onBoardItems.map((item) => (
              <Step
                sx={{
                  ':first-child': { pl: 0 },
                  ':last-child': { pr: 0 },
                  '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                }}
                key={item.title}
              >
                <StepLabel
                  sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                >
                  {item.title}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === onBoardItems.length ? (
            <Stack spacing={2} useFlexGap>
              <Typography variant="h1">📦</Typography>
              <Typography variant="h5">Thank you for your order!</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Your order number is
                <strong>&nbsp;#140396</strong>. We have emailed your order
                confirmation and will update you once its shipped.
              </Typography>
              <Button
                variant="contained"
                sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
              >
                Go to my orders
              </Button>
            </Stack>
          ) : (
            <React.Fragment>
              <Component onSuccess={onSuccess} ref={formRef} />
              <Box
                sx={[
                  {
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    alignItems: 'end',
                    flexGrow: 1,
                    gap: 1,
                    pb: { xs: 12, sm: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: '60px',
                  },
                  activeStep !== 0
                    ? { justifyContent: 'space-between' }
                    : { justifyContent: 'flex-end' },
                ]}
              >
                {activeStep !== 0 && (
                  <Button
                    disabled={isPending || isSuccess}
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="text"
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                  >
                    Previous
                  </Button>
                )}
                {activeStep !== 0 && (
                  <Button
                    disabled={isPending || isSuccess}
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="outlined"
                    fullWidth
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                  >
                    Previous
                  </Button>
                )}
                <LoadingButton
                  disabled={isSuccess}
                  loading={isPending}
                  variant="contained"
                  endIcon={<ChevronRightRoundedIcon />}
                  onClick={handleSubmit}
                  sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                >
                  {activeStep === onBoardItems.length - 1 ? 'Submit' : 'Next'}
                </LoadingButton>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Grid>
    </Box>
  );
}