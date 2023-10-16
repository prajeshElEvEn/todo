import React, { useState } from "react";
import { useFormik } from "formik";
import { resetValidation } from "../../components/utils";
import { Form } from "../../components/styled";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "../../assets/icons";

const initialValues = {
  token: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const ResetPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: resetValidation,
    onSubmit,
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        id="token"
        name="token"
        type="token"
        label="token"
        fullWidth
        {...formik.getFieldProps("token")}
        error={formik.touched.token && formik.errors.token}
        helperText={
          formik.touched.token && formik.errors.token
            ? formik.errors.token
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
      <Button variant="contained" type="submit">
        reset password
      </Button>
    </Form>
  );
};

export default ResetPage;
