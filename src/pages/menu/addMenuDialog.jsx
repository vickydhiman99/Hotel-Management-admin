import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, DialogContent, DialogTitle, DialogActions,IconButton,  TextField,} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './addMenu.module.css'
import ClearIcon from "@mui/icons-material/HighlightOff";
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { createMenu, getAllMenu } from "../../actions/menu/menuAction";


// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

export default function AddMenuDialog({ open, handelClose }) {


  const Token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const [menuData, setMenuData] = useState({
    token: Token,
    foodType: "",
    foodNames: "",
    image: "",
    price: ""
  });

  const [menuImage, setMenuImage] = useState();
  const [imageFile, setImageFile] = useState();


  const MAX_FILE_SIZE_KB = 300;
  const handleChangeMenuImg = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert("No file selected");
      return;
    }

    // Check file size
    const fileSizeKB = file.size / 1024; // Convert bytes to kilobytes
    if (fileSizeKB > MAX_FILE_SIZE_KB) {
      alert(`File size exceeds maximum limit of ${MAX_FILE_SIZE_KB} KB`);
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = reader.result;
      setMenuImage(imageData);
      setImageFile(file);
      // Clear the input value to allow selecting the same file again
      event.target.value = null;
    };

    reader.onerror = (error) => {
      console.error("File reading failed:", error);
    };

    reader.readAsDataURL(file);
  };
  const handleRemoveImage = () => {
    setMenuImage();
  };

  const handelChangeInput = (event) => {
    const { name, value } = event.target;
    setMenuData({
      ...menuData,
      [name]: value,
    });
  };

  const handelSaveMenuData = async () => {
    // Create a reference to the storage location
    const storageRef = ref(storage, `Tables/${imageFile.name}`);

    // Upload image file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, imageFile);

    // Get the download URL for the uploaded image
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Now you can use downloadURL to display the image or store it in your database
    console.log("Image uploaded successfully. Download URL:", downloadURL);
    dispatch(createMenu({ ...menuData, menuImage: downloadURL })).then(() => {
      dispatch(getAllMenu({ token: Token }))
    });
    handelClose();
    setMenuData({
      token: Token,
      foodType: "",
      foodNames: "",
      image: "",
      price: ""
    });
  };

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
          onChange={(event) => handleChangeMenuImg(event)}
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
                  onClick={handleRemoveImage}
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
          value={menuData?.foodType || "veg"}
          onChange={handelChangeInput}
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
          value={menuData?.foodNames}
          onChange={handelChangeInput}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="FOOD PRICE"
          variant="outlined"
          name="foodPrice"
          value={menuData?.foodPrice}
          onChange={handelChangeInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handelClose}>cancel</Button>
        <Button
          variant="contained"
          onClick={handelSaveMenuData}
          autoFocus>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}


