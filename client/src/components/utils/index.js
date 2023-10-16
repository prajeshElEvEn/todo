import * as yup from "yup";

export const registerValidation = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup.string().email("invalid email").required("email id is required"),
  password: yup
    .string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("confirm password is required"),
});

export const loginValidation = yup.object().shape({
  email: yup.string().email("invalid email").required("email id is required"),
  password: yup
    .string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
});
