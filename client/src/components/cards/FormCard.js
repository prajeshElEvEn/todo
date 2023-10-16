import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AddIcon } from "../../assets/icons";

const FormCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          create todo
        </Typography>
        <TextField label="todo" variant="outlined" fullWidth />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" startIcon={<AddIcon />}>
          Create
        </Button>
      </CardActions>
    </Card>
  );
};

export default FormCard;
