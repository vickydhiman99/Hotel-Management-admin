import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import styles from "./table.module.css";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import DropDown from "./dropdown";

// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

export default function CustomizedTables({ tableCell }) {
  return (
    <TableContainer>
      {/* <Button sx={{ color: 'black', boxShadow: '0px 1px 3px 0px', height: 22, fontSize: 11,marginTop:2 }} >Current Orders</Button> */}

      <Table className={styles.mainContainer}>
        <TableHead className={styles.tabHead}>
          <TableRow>
            {tableCell.map((data, index) => (
              <TableCell key={index} sx={{ color: "white" }} align="right">
                {data}
              </TableCell>
            ))}
            {/* <TableCell sx={{ color: 'white' }} align="right">Customer Name</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Waiter</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Food Name</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">TAble Number</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Amount</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">01</TableCell>
            <TableCell align="right">Sashi</TableCell>
            <TableCell align="right">Trilochan</TableCell>
            <TableCell align="right">7377786546</TableCell>
            <TableCell align="right">109</TableCell>
            <TableCell align="right">109</TableCell>
            <TableCell align="right">
              <button className={styles.btn}>Paid</button>
              <button className={styles.btn}>UnPaid</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
