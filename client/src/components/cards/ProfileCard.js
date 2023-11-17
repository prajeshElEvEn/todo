import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { EditIcon, LogoutIcon } from "../../assets/icons";

const ProfileCard = ({ handleLogout, isLoading }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://avatars.githubusercontent.com/u/75523737?s=400&u=933c15b722b4dd0f450a42ebdb33021c00d6cdac&v=4"
        alt="avatar"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            john doe
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
          <Button variant="outlined" startIcon={<EditIcon />}>
            edit profile
          </Button>
          <Button
            variant="contained"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            {
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={18} />
                ) : null}
                <>logout</>
              </>
            }
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProfileCard;
