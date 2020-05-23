import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = ({
  steps,
  activeStep,
  handleBack,
  handleSkip,
  isStepOptional,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
        <div className={classes.root}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              disabled={!isStepOptional(activeStep)}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              Saltar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </ButtonGroup>
        </div>

        {/* {isStepOptional(activeStep) && (
          <Button variant="contained" color="primary" onClick={handleSkip}>
            Skip
          </Button>
        )} */}
      </Grid>
  );
};

export default Buttons;
