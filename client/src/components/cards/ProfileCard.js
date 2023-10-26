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
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const ProfileCard = ({ isLoading }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
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
