"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  Grid,
  Avatar,
  IconButton
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import PageContainer from "../components/container/PageContainer";
import { IconEdit } from "@tabler/icons-react";
import EditProfileModal from "./components/profile-icon-edit/page";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState('/images/profile/female-user.svg');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAvatarUpdate = (newAvatar, avatarFile) => {
    // You can use `avatarFile` to upload to a server if needed
    setAvatar(newAvatar);
  };

  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={avatar}
                alt="image"
                sx={{
                  width: 150,
                  height: 150,
                  border: "2px solid #000",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
                marginTop: "-40px",
                zIndex: "100",
                marginLeft: "100px",
              }}
            >
              <IconButton onClick={handleOpen}>
                <IconEdit />
              </IconButton>
            </Grid>
            <EditProfileModal
              open={open}
              handleClose={handleClose}
              currentAvatar={avatar}
              handleAvatarUpdate={handleAvatarUpdate}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          type="submit"
        >
          Sign In
        </Button>
      </Box>
    </PageContainer>
  );
};

export default Profile;
