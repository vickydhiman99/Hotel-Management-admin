import { Dialog, DialogContent, DialogContentText, DialogTitle, LinearProgress } from '@mui/material'
import React from 'react'

const Myloader = ({ open }) => {
    return (
        <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Page is Loading...."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                </DialogContentText>
                <div>
                    <LinearProgress/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Myloader