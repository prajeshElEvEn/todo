import { Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ProfileCard from "../../components/cards/ProfileCard";
import FormCard from "../../components/cards/FormCard";
import CheckboxList from "../../components/lists/CheckboxList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { status, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!status) {
      navigate("/auth/login");
    }
  }, [navigate, status]);
  return (
    <Stack>
      <Grid
        container
        py={4}
        direction={{ xs: "column-reverse", md: "row" }}
        rowSpacing={{ xs: 4, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems={"center"}
      >
        <Grid item xs={6}>
          <FormCard />
        </Grid>
        <Grid item xs={6}>
          <ProfileCard isLoading={isLoading} />
        </Grid>
      </Grid>
      <CheckboxList />
    </Stack>
  );
};

export default Dashboard;
