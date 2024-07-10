import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, DialogContent, DialogTitle, DialogActions,IconButton,  TextField,} from '@mui/material';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './addMenu.module.css'
import ClearIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


function EditMenuDialog({open,handelClose,editMenuData}) {
  const [menuImage, setMenuImage] = useState();

  return (
    <Dialog
      open={open}
      onClose={handelClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Add A NEW MENU"}
      </DialogTitle>
      <DialogContent className={styles.orderContain}>
        <Box className={styles.SnapshotsBox}>
          <input
            accept="image/*"
            id="snapshot-three"
            type="file"
            style={{ display: "none" }}
        //   onChange={(event) => handleChangeMenuImg(event)}
          />
          <div className={styles.imageContainer}>
            {menuImage ? (
              <>
                <img
                  src={menuImage}
                  alt="snapshot-three"
                  className={styles.image}
                />
                <IconButton
                  className={styles.crossIcon}
                //   onClick={handleRemoveImage}
                >
                  <ClearIcon style={{ color: "red" }} />
                </IconButton>
              </>
            ) : (
              <label htmlFor="snapshot-three">
                <IconButton component="span">
                  <AddCircleOutlineIcon />
                </IconButton>
              </label>
            )}
          </div>
        </Box>
        <select required
          className={styles.text_feild}
          name="foodType"
          value={editMenuData?.foodType || "veg"}
        //   onChange={handelChangeInput}
        >
          <option value="veg">Veg</option>
          <option value="NonVeg">Non Veg</option>
          <option value="drinks">Drinks</option>

        </select>
        <TextField
          fullWidth
          id="outlined-basic"
          label="FOODS NAME"
          variant="outlined"
          name="foodNames"
          value={editMenuData?.foodNames}
        //   onChange={handelChangeInput}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="FOOD PRICE"
          variant="outlined"
          name="foodPrice"
          value={editMenuData?.foodPrice}
        //   onChange={handelChangeInput}
        />
      </DialogContent>
      <DialogActions>
        <Button
         onClick={handelClose}
         >cancel</Button>
        <Button
          variant="contained"
        //   onClick={handelSaveMenuData}
          autoFocus>
          save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditMenuDialog
