import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const FormContacto = ({ formik }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="telefono"
          name="telefono"
          error={formik.touched.telefono && formik.errors.telefono ? true : false}
          label="Teléfono"
          helperText={
            formik.touched.telefono && formik.errors.telefono
              ? formik.errors.telefono
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.telefono}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="correo"
          name="correo"
          error={
            formik.touched.correo && formik.errors.correo ? true : false
          }
          label="Correo"
          helperText={
            formik.touched.correo && formik.errors.correo
              ? formik.errors.correo
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.correo}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default FormContacto;
