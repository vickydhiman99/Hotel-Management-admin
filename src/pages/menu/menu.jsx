import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddMenuDialog from "./addMenuDialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteMenuDialog from "./deleteMenuDialog";
import { Box, Button, IconButton } from "@mui/material";
import EditMenuDialog from "./editMenuDialog";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../actions/menu/menuAction";

export default function Menu() {
  const dispatch = useDispatch();
  const Token = sessionStorage.getItem("token");
  const allMenu = useSelector((state) => state.menu.all_menu_data);

  // add menu dialog state
  const [addOpen, setAddOpen] = useState(false);
  const handleAddDialog = () => {
    setAddOpen(!addOpen);
  };

  // edit menu dialog state
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [editMenuData, setEditMenuData] = useState(null);
  const handleEditMenu = (row) => {
    setEditMenuData(row);
    setOpenEditMenu(true);
  };
  const closeEditMenu = () => {
    setOpenEditMenu(false);
  };

  // delete menu dialog state
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);
  const [deleteMenuData, setDeleteMenuData] = useState(null);
  const handleDeleteMenu = (data) => {
    setDeleteMenuData(data);
    setOpenDeleteMenu(true);
  };
  const closeDeleteMenu = () => {
    setOpenDeleteMenu(false);
  };

  useEffect(() => {
    const obj = { token: Token };
    dispatch(getAllMenu(obj)).then(() => {
      console.log("Menu data fetched");
    });
  }, [Token, dispatch]);

  return (
    <>
      <TableContainer component={Paper}>
        <Button
          onClick={handleAddDialog}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          Add New Menu
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "rgb(70 90 204)" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Food Type</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Food Names
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Food Image
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Food Price
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allMenu &&
              allMenu.map((row) => (
                <TableRow
                  key={row.foodType}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.foodType}
                  </TableCell>
                  <TableCell align="right">{row.foodNames}</TableCell>
                  <TableCell align="right">
                    <Box>
                      <img
                        style={{ width: "8vw", height: "15vh" }}
                        alt="menu"
                        src={row.image}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEditMenu(row)}>
                      <EditIcon sx={{ color: "blue", height: "30px", width: "30px" }} />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteMenu(row)}>
                      <DeleteIcon sx={{ color: "red", height: "30px", width: "30px" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <AddMenuDialog open={addOpen} handleClose={handleAddDialog} />
      <EditMenuDialog open={openEditMenu} handleClose={closeEditMenu} editMenuData={editMenuData} />
      <DeleteMenuDialog open={openDeleteMenu} handleClose={closeDeleteMenu} deleteMenuData={deleteMenuData} />
    </>
  );
}
