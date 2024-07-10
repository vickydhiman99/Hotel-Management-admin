import React from 'react';
import styles from "./signup.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../assets/icon/google.jpeg";
import FacebookIcon from "../../assets/icon/facebook.jpeg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useState } from 'react';




function Signup() {
  const dispatch = useDispatch();

  const [signUP, setSignUPData] = useState({
    firstName: "",
    lastName: "",
    image: "",
    gender: "",
    email: "",
    phone: "",
    password: ""
  });
  const handleinputchange = (event) => {
    const { name, value } = event.target;
    console.log(event);

    setSignUPData((signUP) => ({ ...signUP, [name]: value }));

  };

  const handleSubmit = () => {
    // dispatch(userLogin(userData,navigate));
    // setExisiting(true)
    console.log('signup...data', signUP);
  };

  return (
    <div>
      <Box className={styles.boxLogin}>
        <Paper elevation={3} className={styles.customPaper}>
          {/* <div className={styles.halfImage}>
          <img src={LoginSideImage} alt="Side Illustration" />
        </div> */}
          <div className={styles.halfInput}>
            <Typography className={styles.loginHeader} gutterBottom>
              Sign-up
            </Typography>
            <Typography variant="overline" gutterBottom>
              You Have An Account?{" "}
              <Link href="/login">Login Here!</Link>
            </Typography>

            <form>
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="firstName"
                variant="outlined"
                name="firstName"
                onChange={handleinputchange}
                value={signUP.firstName}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="lastName"
                variant="outlined"
                name="lastName"
                onChange={handleinputchange}
                value={signUP.lastName}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="image"
                variant="outlined"
                name="image"
                onChange={handleinputchange}
                value={signUP.image}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="gender"
                variant="outlined"
                name="gender"
                onChange={handleinputchange}
                value={signUP.gender}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="email"
                variant="outlined"
                name="email"
                onChange={handleinputchange}
                value={signUP.email}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="phone"
                variant="outlined"
                name="phone"
                onChange={handleinputchange}
                value={signUP.phone}
                autoComplete="on"
              />
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="password"
                variant="outlined"
                name="password"
                onChange={handleinputchange}
                value={signUP.password}
                autoComplete="on"
              />

              {/* <TextField
              id="outlined-password"
              className={styles.textfield}
              label="Password"
              autoComplete="on"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              name="password"
              onChange={handleinputchange}
              value={userData.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
              <Link className={styles.forgetPass} href="/forgetpassword">
                Forget Password ?
              </Link>

              <Button
                className={styles.loginButton}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
            {/* 
          <Typography
            className={styles.orTypography}
            variant="button"
            display="block"
            gutterBottom
          >
            -----OR-----
          </Typography> */}

            <div className={styles.iconButton}>
              <IconButton aria-label="Google Sign-In">
                <img src={GoogleIcon} alt="Google Icon" />
              </IconButton>

              <IconButton color="primary" aria-label="Facebook Sign-In">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Signup
