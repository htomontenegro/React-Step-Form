import React, { Component } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form } from "formik";

import { connect } from "react-redux";
import { guardarTarjeta } from "../actions/tarjetaAction";

import FormPersonal from "./FormPersonal";
import FormContacto from "./FormContacto";
import Buttons from "./Buttons";
import reglas from "./Validation";
import Resumen from "./Resumen";

export class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      personal: {
        nombre: "",
        apellido: "",
      },
      contacto: {
        telefono: "",
        correo: "",
      },
      tarjetas: [],
    };
  }

  getSteps() {
    return ["Personal", "Contacto"];
  }
  getStepContent(step, formik) {
    switch (step) {
      case 0:
        return <FormPersonal formik={formik} />;
      // return "Campain info...";
      case 1:
        return <FormContacto formik={formik} />;
      default:
        return "Unknown step";
    }
  }

  isStepOptional = (step) => {
    return step === 9;
  };
  handleSubmit = (step, values) => {
    switch (step) {
      case 0:
        this.setState({
          personal: {
            nombre: values.nombre,
            apellido: values.apellido,
          },
        });
        break;
      case 1:
        this.setState({
          contacto: {
            telefono: values.telefono,
            correo: values.correo,
          },
          tarjetas: [
            ...this.state.tarjetas,
            {
              personal: {
                nombre: values.nombre,
                apellido: values.apellido,
              },
              contacto: {
                telefono: values.telefono,
                correo: values.correo,
              },
            },
          ],
        });
        this.props.guardarTarjeta({
          personal: {
            nombre: values.nombre,
            apellido: values.apellido,
          },
          contacto: {
            telefono: values.telefono,
            correo: values.correo,
          },
        });

        break;
      default:
        console.log("def");
    }

    this.handleNext();
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleSkip = () => {
    if (!this.isStepOptional(this.state.activeStep)) {
      return;
    }

    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  render() {
    const steps = this.getSteps();
    const { activeStep } = this.state;
    const stepLabel = steps[activeStep];
    return (
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Resumen data={this.state} />
              <Button variant="outlined" onClick={this.handleReset}>
                Volver a comenzar
              </Button>
            </div>
          ) : (
            <Formik
              initialValues={{
                nombre: "",
                apellido: "",
                telefono: "",
                correo: "",
              }}
              // validationSchema={reglas(activeStep)}
              onSubmit={(values, actions) => {
                this.handleSubmit(activeStep, values);
                actions.setSubmitting(false);
              }}
            >
              {({ errors, touched, values, handleChange }) => {
                return (
                  <Form autoComplete="off">
                    {/* <FormPersonal formik={{ errors, touched, values }} /> */}
                    <Typography variant="h5" component="h5" gutterBottom>
                      {stepLabel}
                    </Typography>

                    {this.getStepContent(activeStep, {
                      errors,
                      touched,
                      values,
                      handleChange,
                    })}
                    <Buttons
                      steps={steps}
                      activeStep={activeStep}
                      handleBack={this.handleBack}
                      handleSkip={this.handleSkip}
                      isStepOptional={this.isStepOptional}
                    />
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.tarjetasReducer);
  return {
    tarjetas: state.tarjetasReducer,
  };
};

export default connect(mapStateToProps, { guardarTarjeta })(Formulario);
