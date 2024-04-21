
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import React from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    imgPath:
        'https://wallpapercave.com/wp/wp9291728.jpg',
  },
  {
    imgPath:
        'https://wallpapercave.com/wp/wp9291723.jpg',
  },
  {
    imgPath:
        'https://wallpapercave.com/wp/wp9291725.jpg',
  },

];

export const Carrusel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };


  return (
      <Box sx={{ width: '100%', flexGrow: 1, margin: '0 auto'  }}>
        <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 'auto',
              pl: 2,
              bgcolor: 'background.default',
            }}
        >
        </Paper>
        <AutoPlaySwipeableViews
            interval={5000}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
          {images.map((step, index) => (
              <div>
                {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                          display: 'block',
                          width: '100%',
                          overflow: 'hidden',
                          height: '100%',
                        }}
                        src={step.imgPath}
                    />
                ) : null}
              </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
        />
      </Box>
  );
};

export default Carrusel;