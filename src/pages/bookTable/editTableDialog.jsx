import React, { useEffect, useState } from 'react'
import styles from './editTbdialog.module.css'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/HighlightOff";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useDispatch } from "react-redux";
import { editTable } from '../../actions/tables/tableAction';

function EditTableDialog({ open, handleEditTable, editTableData }) {
    const Token = sessionStorage.getItem("token");
    const dispatch = useDispatch()
    // const [errors, setErrors] =useState({});
    const [tableimg, setTableImg] = useState();
    const [tableData, setTableData] = useState({
        token: '',
        tableId: '',
        tableNumber: '',
        chairs: '',
        tableImage: null
    });
    useEffect(() => {
        setTableData({
            token: Token,
            tableId: editTableData?._id,
            tableNumber: editTableData?.tableNumber,
            chairs: editTableData?.chairs,
            tableImage: editTableData?.tableImage
        });
    }, [editTableData, Token])

    const handelChangeInput = (event) => {
        const { name, value } = event.target;
        setTableData({
            ...tableData,
            [name]: value,
        });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTableImg(file);
                setTableData((prevData) => ({
                    ...prevData,
                    tableImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = (imageUrl) => {
        if (!imageUrl) {
            alert("No image URL provided");
            return;
        }

        const imageRef = ref(storage, imageUrl);

        // Delete the file
        deleteObject(imageRef)
            .then(() => {
                console.log("Image deleted successfully");
                setTableData((prevData) => ({
                    ...prevData,
                    tableImage: null,
                }));
            })
            .catch((error) => {
                console.error("Error deleting image:", error);
            });
    };

    const handelUpdateTable = async () => {
        // setLoader(true);
        if (!tableimg) {
            alert("Please select an image");
            return;
        }
        const storageRef = ref(storage, `Tables/${tableimg.name}`);
        const snapshot = await uploadBytes(storageRef, tableimg);
        const downloadURL = await getDownloadURL(snapshot.ref);
        dispatch(editTable({ ...tableData, tableImage: downloadURL })).then(
            () => { handleEditTable() }
        )

    }
    return (
        <Dialog
            open={open}
            onClose={handleEditTable}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add A new Table Here!"}
            </DialogTitle>
            <DialogContent className={styles.orderContain}>
                <Box className={styles.SnapshotsBox}>
                    <input
                        accept="image/*"
                        id="snapshot-three"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <div className={styles.imageContainer}>
                        {tableData ? (
                            <>
                                <img
                                    src={tableData?.tableImage}
                                    alt="snapshot-three"
                                    className={styles.image}
                                />
                                <IconButton
                                    className={styles.crossIcon}
                                    onClick={() => handleRemoveImage(tableData?.tableImage)}
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
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Chair"
                    variant="outlined"
                    name="chairs"
                    value={tableData?.chairs}
                    onChange={handelChangeInput}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleEditTable}
                >cancel</Button>
                <Button variant="contained"
                    onClick={handelUpdateTable} autoFocus
                >
                    save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditTableDialog
