import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styles from "./alert.module.css";
import { useDispatch, useSelector } from 'react-redux';


function AppAlert() {
    const [exisiting, setExisiting] = React.useState(false);
    const apialert = useSelector(state => state.alert.apiAlert);
    const dispatch = useDispatch();

    useEffect(() => {
        if (apialert) {
            setExisiting(false);
            const timeout = setTimeout(() => {
                setExisiting(true);
                dispatch({
                    type: 'CLEAR_API_ALERT'
                });

            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [apialert, dispatch])

    return (
        <Stack className={`${styles.alertStack} ${exisiting ? styles.exiting : ""}`} sx={{ width: '20%' }} spacing={2} >
            {apialert && <Alert className={styles.mainAlert} variant="filled" severity={apialert.severity}>
                {apialert.message}
            </Alert>}
        </Stack>
    )
}

export default AppAlert
