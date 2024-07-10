import React from 'react'
import styles from './details.module.css'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Details() {
  return (
    <div className={styles.mainDiiv}>
      <div className={styles.mainChild}>
        <p className={styles.heading}>Total Orders</p>
        <div className={styles.subChild}>
          <div><MenuBookIcon sx={{ fontSize: 53, color: "green" }} /></div>
          <div className={styles.circule}><p className={styles.circulMsg}>10,000</p></div>
        </div>
      </div>
      <div className={styles.mainChild2}>
        <p className={styles.heading}>Total Food</p>
        <div className={styles.subChild}>
          <div><FastfoodIcon sx={{ fontSize: 50, color: "rgb(25, 118, 210)" }} /></div>
          <div className={styles.circule2}><p className={styles.circulMsg}>77</p></div>
        </div>
      </div>
      <div className={styles.mainChild3}>
        <p className={styles.heading}>Total Employ</p>
        <div className={styles.subChild}>
          <div><Diversity1Icon sx={{ fontSize: 48, color: "rgb(40, 210, 25)" }} /></div>
          <div className={styles.circule3}><p className={styles.circulMsg}>10</p></div>
        </div>
      </div>
      <div className={styles.mainChild4}>
        <p className={styles.heading}>Total Earning</p>
        <div className={styles.subChild}>
          <div><CurrencyRupeeIcon sx={{ fontSize: 50, color: "rgb(210, 152, 25)" }} /></div>
          <div className={styles.circule4}><p className={styles.circulMsg}>52,45,000</p></div>
        </div>
      </div>
    </div>
  )
}

export default Details
