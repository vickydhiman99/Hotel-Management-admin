import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import styles from "./style.module.css";

export default function AddOrderModal() {
  const [open, setOpen] = React.useState(false);

  const handleAddOrder = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button
        onClick={handleAddOrder}
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
      >
        Make a Order
      </Button>
      <Dialog
        open={open}
        onClose={handleAddOrder}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add A new Order Here!"}
        </DialogTitle>
        <DialogContent className={styles.orderContain}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddOrder}>Disagree</Button>
          <Button onClick={handleAddOrder} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
