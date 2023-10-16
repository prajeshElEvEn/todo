import { Grid, Stack } from "@mui/material";
import React from "react";
import ProfileCard from "../../components/cards/ProfileCard";
import FormCard from "../../components/cards/FormCard";
import CheckboxList from "../../components/lists/CheckboxList";

const Dashboard = () => {
  return (
    <Stack>
      <Grid
        container
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <FormCard />
        </Grid>
        <Grid item xs={6}>
          <ProfileCard />
        </Grid>
      </Grid>
      <CheckboxList />
    </Stack>
  );
};

export default Dashboard;
