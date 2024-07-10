import React from "react";
import Details from "../../components/details/details";
import CustomizedTables from "../../components/table/table";
import OrderFilterDash from "../../components/filters/orderFilterDash";
import { Grid } from "@mui/material";
import styles from './homeStyle.module.css'
const tableCell = [
  "S.no",
  "Customer Name",
  "Waiter",
  "date",
  "TAble Number",
  "Amount",
  "Action",
];

function Home() {
  return (
    <>
      <Grid>
        <Details />
      </Grid>
      <Grid className={styles.tableGrid}>
        <OrderFilterDash />
        <CustomizedTables tableCell={tableCell} />
      </Grid>
    </>
  );
}

export default Home;
