import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const FormPersonal = ({ formik }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="nombre"
          name="nombre"
          error={formik.touched.nombre && formik.errors.nombre ? true : false}
          label="Nombre"
          helperText={
            formik.touched.nombre && formik.errors.nombre
              ? formik.errors.nombre
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="apellido"
          name="apellido"
          error={
            formik.touched.apellido && formik.errors.apellido ? true : false
          }
          label="Apellido"
          helperText={
            formik.touched.apellido && formik.errors.apellido
              ? formik.errors.apellido
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.apellido}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default FormPersonal;
