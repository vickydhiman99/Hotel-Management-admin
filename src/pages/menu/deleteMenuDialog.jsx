import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { deteleMenu, getAllMenu } from "../../actions/menu/menuAction"
function DeleteMenuDialog({ open, handleClose, deleteMenuData }) {

  const Token = sessionStorage.getItem("token");
  const dispatch = useDispatch()

  const handelDelectMenu = (id) => {
    const obj = {
      token: Token,
      menuId: id,
    };
    dispatch(deteleMenu(obj)).then(() => {
      handleClose();
      dispatch(getAllMenu(obj));
    })
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"MENU ITEM DELETE"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you confirm to delete this menu {deleteMenuData?.tableNumber}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Back</Button>
        <Button
          //   onClick={() => handleDeleteTable(deleteMenuData?._id)}
          onClick={() => handelDelectMenu(deleteMenuData?._id)}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteMenuDialog
