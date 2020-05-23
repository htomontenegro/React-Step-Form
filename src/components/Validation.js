import * as Yup from "yup";

const reglas = (step) => {
  let regla = "";
  switch (step) {
    case 0:
      regla = {
        nombre: Yup.string()
          .max(15, "Maximo 15 caracteres")
          .required("El nombre es requerido"),
        apellido: Yup.string()
          .max(20, "Maximo 20 caracteres")
          .required("El apellido es requerido"),
      };
      break;
    case 1:
      regla = {
        telefono: Yup.number()
          .typeError("El número de teléfono no puede contener letras")
          .min(666666666, "Debe tener 9 caracteres")
          .max(999999999, "Debe tener 9 caracteres")
          .required("El teléfono es requerido"),
        correo: Yup.string()
          .email("Debe ingresar un correo valido")
          .required("El correo es requerido"),
      };
      break;
    default:
  }
  return Yup.object().shape(regla);
};

export default reglas;
