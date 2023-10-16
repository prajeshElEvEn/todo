import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { EditIcon } from "../../assets/icons";

const ProfileCard = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="avatar"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            John Doe
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            john@example.com
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" startIcon={<EditIcon />}>
            Edit
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProfileCard;
