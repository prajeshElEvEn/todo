import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AddIcon } from "../../assets/icons";
import { Form } from "../styled";

const FormCard = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      title: "",
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          create todo
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="todo"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            fullWidth
          />
          <Button variant="contained" startIcon={<AddIcon />}>
            create
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormCard;
