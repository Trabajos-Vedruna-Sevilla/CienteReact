import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CustomTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/api/all')
      .then((response) => response.json())
      .then((data) => {
        // Mapeamos los resultados de la API al formato de createData
        const newRows = data.map((item) => createData(item._id.timestamp, item._id.date, item.paymentMethod, item.responsePayload.get));
        setRows(newRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);

  function createData(timestamp, date, paymentMethod, get) {
    return { timestamp, date, paymentMethod, get };
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Método de Pago</TableCell>
            <TableCell>Petición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4}>Loading...</TableCell>
            </TableRow>
          ) : (
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.timestamp}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.get}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
