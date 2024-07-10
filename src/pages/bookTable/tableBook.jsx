import {
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddTableDialog from "./addTableDialog";

import { useDispatch, useSelector } from "react-redux";
import DeleteTableDialog from "./deleteTableDialog";
import EditTableDialog from "./editTableDialog";
import { getAllTable } from "../../actions/tables/tableAction";

export default function TableBook() {
  const Token = sessionStorage.getItem("token");
  const allTables = useSelector((state) => state.table.all_table_data);
  const dispatch = useDispatch();

  //add table dialog start
  const [openAddTable, setOpenAddTable] = useState(false);
  const handleAddTable = () => {
    setOpenAddTable(!openAddTable);
  };
  //add table dialog end'

  //Delete table dialog start
  const [openDeleteTable, setOpenDeleteTable] = useState(false);
  const [ deleteTableData, setDeleteTableData] = useState();

  const handleDeleteTable = (data) => {
    setDeleteTableData(data);
    setOpenDeleteTable(!openDeleteTable);
  };
  //Delete table dialog end
  //edit table dialog start
  const [openEditTable, setOpenEditTable] = useState(false);
  const [editTableData, setEditTableData] = useState()
  const handleEditTable = (row) => {
    setOpenEditTable(!openEditTable);
    setEditTableData(row)
  };
  //edit table dialog end

  useEffect(() => {
    const obj = {
      token: Token,
    };
    dispatch(getAllTable(obj)).then(() => {
      console.log("hiii data");
    });
  }, [Token, dispatch]);

  return (
    <Grid>
      <Button
        onClick={handleAddTable}
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
      >
        Add New Table
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(70 90 204)" }}>
              <TableCell style={{ color: "white" }}>Table Number</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Table Image
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Number of Chairs{" "}
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTables &&
              allTables.map((row) => (
                <TableRow key={row.tableNumber}>
                  <TableCell component="th" scope="row">
                    {row.tableNumber}
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <img
                        style={{ width: "8vw", height: "15vh" }}
                        alt="table"
                        src={row.tableImage}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.chairs}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEditTable(row)} >
                      <EditIcon
                        sx={{ color: "blue", height: "30px", width: "30px" }}
                      />
                    </IconButton>

                    <IconButton onClick={() => handleDeleteTable(row)}>
                      <DeleteIcon
                        sx={{ color: "red", height: "30px", width: "30px" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddTableDialog open={openAddTable} handleAddTable={handleAddTable} />
      <DeleteTableDialog
        open={openDeleteTable}
        handleClose={handleDeleteTable}
        deleteTableData={deleteTableData}
      />
      <EditTableDialog open={openEditTable} handleEditTable={handleEditTable} editTableData={editTableData} />
    </Grid>
  );
}
