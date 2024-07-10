import React from 'react'
import styles from './billpage.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

function Billpage() {
  return (
    <div className={styles.mainDiv} >
      <Link to={`/`}>
        <Tooltip title="close">
        <ClearIcon sx={{ fontSize: 35,position:'absolute',top:0,right:10}} />
        </Tooltip>
      </Link>
      <div className={styles.childDiv} >
        <div className={styles.headtext}>
          <span className={styles.spancolor}> Hotel </span><span className={styles.spansize}>PRIME Bill</span>
        </div>
        <div className={styles.subChild}>
          <div className={styles.subChildDiv1} >
            <p>Customer Details</p>
            <table className={styles.tableleft}>
              <thead >
                <tr>
                  <th>Name</th>
                  <td>sashikanta</td>
                </tr>
                <tr>
                  <th>Number</th>
                  <td>7377786546</td>

                </tr>
                <tr>
                  <th>Address</th>
                  <td>soro,balasore,odisha</td>
                </tr>
              </thead>

            </table>
          </div>

          <div className={styles.subChildDiv2}>
            <p>Order Details</p>
            <table className={styles.table}>
              <thead className={styles.tableHead} >
                <tr>
                  <th >Order Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>pizza</td>
                  <td>5</td>
                  <td>400</td>
                </tr>
              </tbody>
            </table>
            <h5>Total Price</h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Billpage
