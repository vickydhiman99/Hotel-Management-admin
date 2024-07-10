import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoginSideImage from "../../assets/image/loginside.jpeg";
import styles from "./login.module.css";
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
import { userLogin } from "../../actions/auth/authAction";
import { useDispatch } from "react-redux";
import Myloader from "../../components/loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false)
  // const handelLoader = () => {
  //   setLoader(!loader)
  // }

  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    setLoader(true);
    const validationErrors = {};
    if (!userData.email) {
      validationErrors.email = "Email Id is required";
    }
    if (!userData.password) {
      validationErrors.password = "Password is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoader(false);
      return;
    }
    dispatch(userLogin(userData, navigate))
      .then(() => {
        setLoader(false);
        setUserData({
          email: "",
          password: ""
        })
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        setUserData({
          email: "",
          password: ""
        })
      })
    // setExisiting(true)
  };


  return (
    <div>
      <Myloader open={loader} />
      <Box className={styles.boxLogin} >
        <Paper elevation={3} className={styles.customPaper}>
          <div className={styles.halfImage}>
            <img src={LoginSideImage} alt="Side Illustration" />
          </div>
          <div className={styles.halfInput}>
            <Typography className={styles.loginHeader} gutterBottom>
              Login To Your Account
            </Typography>
            <Typography variant="overline" gutterBottom>
              Don't Have An Account?{" "}
              <Link href="/signup">Sign Up Here!</Link>
            </Typography>

            <form>
              <div>
                <TextField
                  id="outlined-basic"
                  className={styles.textfield}
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={handleinputchange}
                  value={userData.email}
                  autoComplete="on"
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div>
                <TextField
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
                />
                 {errors.password && <p className={styles.error}>{errors.password}</p>}
              </div>

              <Link className={styles.forgetPass} href="/forgetpassword">
                Forget Password ?
              </Link>

              <Button
                className={styles.loginButton}
                variant="contained"
                onClick={handleLogin}
              >
                Login
              </Button>
            </form>

            <Typography
              className={styles.orTypography}
              variant="button"
              display="block"
              gutterBottom
            >
              -----OR-----
            </Typography>

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
  );
};
export default Login;
