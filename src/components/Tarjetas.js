import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Tarjetas = ({ data, eliminar }) => {

  return (
    <div>
      <br />
      <Typography variant="h5" component="h5" gutterBottom>
        Registros
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th">Nombre</TableCell>
              <TableCell component="th">Apellido</TableCell>
              <TableCell component="th">Telefono</TableCell>
              <TableCell component="th">Correo</TableCell>
              <TableCell component="th">Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.tarjetas.length ? (
              data.tarjetas.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.personal.nombre}</TableCell>
                  <TableCell>{row.personal.apellido}</TableCell>
                  <TableCell>{row.contacto.telefono}</TableCell>
                  <TableCell>{row.contacto.correo}</TableCell>
                  <TableCell>
                    <Button onClick={() =>{eliminar(row)}}>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No existen registros</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tarjetas;
