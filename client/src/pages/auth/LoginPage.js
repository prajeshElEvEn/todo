import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Alert,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "../../components/styled";
import { Visibility, VisibilityOff } from "../../assets/icons";
import { useFormik } from "formik";
import { loginValidation } from "../../components/utils";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import SubmitButton from "../../components/buttons/SubmitButton";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      console.log(values);
      await dispatch(login(values));
    },
  });

  useEffect(() => {
    if (status) {
      navigate("/");
    }
  }, [navigate, status]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(reset());
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        type="email"
        label="email id"
        fullWidth
        {...formik.getFieldProps("email")}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
      />
      <TextField
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        label="password"
        fullWidth
        {...formik.getFieldProps("password")}
        error={formik.touched.password && formik.errors.password}
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : null
        }
      />
      <Stack direction={"row"} spacing={1}>
        <Link component={RouterLink} to="/auth/forgot">
          forgot password?
        </Link>
      </Stack>
      <SubmitButton isLoading={isLoading} text={"login"} />
      <Stack direction={"row"} spacing={1}>
        <Typography color="text.secondary">don't have an account?</Typography>
        <Link component={RouterLink} to="/auth/register">
          register
        </Link>
      </Stack>
      <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Form>
  );
};

export default LoginPage;
