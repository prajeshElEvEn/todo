import { Button, CircularProgress } from "@mui/material";
import React from "react";

const SubmitButton = ({ isLoading, text }) => {
  return (
    <Button variant="contained" type="submit" sx={{ gap: 1 }}>
      {
        <>
          {isLoading ? <CircularProgress color="inherit" size={18} /> : null}
          <>{text}</>
        </>
      }
    </Button>
  );
};

export default SubmitButton;
