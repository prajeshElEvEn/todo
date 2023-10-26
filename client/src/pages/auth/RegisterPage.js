import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Form } from "../../components/styled";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "../../assets/icons";
import { registerValidation } from "../../components/utils";
import { register, reset } from "../../features/auth/authSlice";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidation,
    onSubmit: async (values) => {
      console.log(values);
      await dispatch(register(values));
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
      <Stack width={"100%"} direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          id="firstName"
          name="firstName"
          type="text"
          label="first name"
          fullWidth
          {...formik.getFieldProps("firstName")}
          error={formik.touched.firstName && formik.errors.firstName}
          helperText={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null
          }
        />
        <TextField
          id="lastName"
          name="lastName"
          type="text"
          label="last name"
          fullWidth
          {...formik.getFieldProps("lastName")}
          error={formik.touched.lastName && formik.errors.lastName}
          helperText={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : null
          }
        />
      </Stack>
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
      <TextField
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
        id="confirmPassword"
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        label="confirm password"
        fullWidth
        {...formik.getFieldProps("confirmPassword")}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? formik.errors.confirmPassword
            : null
        }
      />
      <Button variant="contained" type="submit">
        register
      </Button>
      <Stack direction={"row"} spacing={1}>
        <Typography color="text.secondary">already have an account?</Typography>
        <Link component={RouterLink} to="/auth/login">
          login
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

export default RegisterPage;
