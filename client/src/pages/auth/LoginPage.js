import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "../../components/styled";
import { Visibility, VisibilityOff } from "../../assets/icons";
import { useFormik } from "formik";
import { loginValidation } from "../../components/utils";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit,
  });

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
      <Button variant="contained" type="submit">
        login
      </Button>
      <Stack direction={"row"} spacing={1}>
        <Typography color="text.secondary">don't have an account?</Typography>
        <Link component={RouterLink} to="/auth/register">
          register
        </Link>
      </Stack>
    </Form>
  );
};

export default LoginPage;
