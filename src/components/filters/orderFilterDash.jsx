import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./orDash.module.css";
import AddOrderModal from "../order/addOrderModal";

export default function OrderFilterDash() {
  return (
    <Grid container spacing={2} className={styles.filterGrid}>
      <Grid item xs={8} sm={9} md={10} className={styles.titelitemGrid}>
        <Typography>Today's Orders</Typography>
        <AddOrderModal />
      </Grid>
      <Grid item xs={4} sm={3} md={2} className={styles.filteritemGrid}>
        <FormControl className={styles.firstFormControl}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Age"
            //   onChange={handleChange}
          >
            <MenuItem style={{ color: "green" }} value={"Paid"}>
              Paid
            </MenuItem>
            <MenuItem style={{ color: "red" }} value={"Unpaid"}>
              Unpaid
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
