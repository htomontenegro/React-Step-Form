// const initialState = [
//   {
//     personal: {
//       nombre: null,
//       apellido: null,
//     },
//     contacto: {
//       telefono: null,
//       correo: null,
//     },
//   },
// ];
const initialState = {
  tarjetas: [],
};

const tarjetas = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        tarjetas: [...state.tarjetas, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        tarjetas: action.payload,
      };
    default:
      return state;
  }
};

export default tarjetas;
