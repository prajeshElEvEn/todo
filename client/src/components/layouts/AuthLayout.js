import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { GitHubIcon, MailIcon } from "../../assets/icons";

const AuthLayout = () => {
  return (
    <Stack height={{ xs: "auto", md: "100vh" }} justifyContent={"center"}>
      <Grid
        container
        py={4}
        direction={{ xs: "column", md: "row" }}
        rowSpacing={{ xs: 4, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Typography variant="h3">todo</Typography>
            <Typography variant="h6">organize your day with todo.</Typography>
            <Stack direction={"row"} spacing={2}>
              <Button
                href="https://github.com/prajeshElEvEn/todo"
                startIcon={<GitHubIcon />}
              >
                contribute
              </Button>
              <Button
                href="mailto:prajesh.eleven118@gmail.com"
                startIcon={<MailIcon />}
              >
                write to us
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Outlet />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AuthLayout;
