import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/HighlightOff";

import styles from "./addTbDialog.module.css";

import { createTable, getAllTable } from "../../actions/tables/tableAction";
import { useDispatch } from "react-redux";
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export default function AddTableDialog({ open, handleAddTable }) {
  const Token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [tableData, setTableData] = useState({
    token: Token,
    tableNumber: "",
    chairs: "",
    tableImage: "",
  });

  const [tableimg, setTableImg] = useState();
  const [imageFile, setImageFile] = useState();

  const MAX_FILE_SIZE_KB = 300;
  const handleChangeTableImg = (event) => {
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
      setTableImg(imageData);
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
    setTableImg();
  };

  const handelChangeInput = (event) => {
    const { name, value } = event.target;
    setTableData({
      ...tableData,
      [name]: value,
    });
  };
const handelValidation = ()=>{
  setErrors({});
}
  const handleSaveTableData = async () => {
    const validationErrors = {};
    if (!tableData.tableNumber) {
      validationErrors.tableNumber = "Table Number is required";
    }
    if (!tableData.chairs) {
      validationErrors.chairs = "Chairs Number is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Create a reference to the storage location
    const storageRef = ref(storage, `Tables/${imageFile.name}`);

    // Upload image file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, imageFile);

    // Get the download URL for the uploaded image
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Now you can use downloadURL to display the image or store it in your database
    console.log("Image uploaded successfully. Download URL:", downloadURL);
    dispatch(createTable({ ...tableData, tableImage: downloadURL })).then(() => {
      dispatch(getAllTable({ token: Token }))
    });
    handleAddTable();
    setTableData({
      token: null,
      tableNumber: "",
      chairs: "",
      tableImage: ""
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleAddTable}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Add A NEW TABLE HERE"}
      </DialogTitle>
      <DialogContent className={styles.orderContain}>
        <Box className={styles.SnapshotsBox}>
          <input
            accept="image/*"
            id="snapshot-three"
            type="file"
            style={{ display: "none" }}
            onChange={(event) => handleChangeTableImg(event)}
          />
          <div className={styles.imageContainer}>
            {tableimg ? (
              <>
                <img
                  src={tableimg}
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
        <TextField
          fullWidth
          id="outlined-basic"
          label="Table Number"
          variant="outlined"
          name="tableNumber"
          value={tableData?.tableNumber}
          onChange={handelChangeInput}
          // error={tableData?.tableNumber ? false : true}
          helperText={errors?.tableNumber}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Chair"
          variant="outlined"
          name="chairs"
          value={tableData?.chairs}
          onChange={handelChangeInput}
          // error={tableData?.chairs ? false : true}
          helperText={errors?.chairs}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{handleAddTable();handelValidation()}}>cancel</Button>
        <Button variant="contained" onClick={handleSaveTableData} autoFocus>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
