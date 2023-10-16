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

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        type="email"
        label="email id"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
      />
      <TextField
        type={showPassword ? "text" : "password"}
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
        label="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        fullWidth
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
