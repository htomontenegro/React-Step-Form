export const guardarTarjeta = (values) => (dispatch) => {
  dispatch({
    type: "SAVE",
    payload: values,
  });
};

export const eliminarTarjeta = (values) => (dispatch) => {
  console.log(values);
  dispatch({
    type: "DELETE",
    payload: values
  });
};
