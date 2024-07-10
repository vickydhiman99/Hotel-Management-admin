import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

import { deteleTable, getAllTable } from "../../actions/tables/tableAction";
import { useDispatch } from "react-redux";

export default function DeleteTableDialog({
  open,
  handleClose,
  deleteTableData,
}) {
  const Token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const handleDeleteTable = (id) => {
    const obj = {
      token: Token,
      tableId: id,
    };
    dispatch(deteleTable(obj)).then(() => {
      handleClose();
      dispatch(getAllTable(obj));
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"TABLE DATA DELETE"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you confirm to delete this table {deleteTableData?.tableNumber}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Back</Button>
        <Button
          onClick={() => handleDeleteTable(deleteTableData?._id)}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
