import React from "react";
import { useFormik } from "formik";
import { forgotValidation } from "../../components/utils";
import { Button, TextField } from "@mui/material";
import { Form } from "../../components/styled";

const initialValues = {
  email: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const ForgotPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: forgotValidation,
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
      <Button variant="contained" type="submit">
        send email
      </Button>
    </Form>
  );
};

export default ForgotPage;
