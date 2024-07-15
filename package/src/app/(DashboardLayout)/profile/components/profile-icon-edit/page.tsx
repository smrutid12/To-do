"use client";
import React, { useState } from "react";
import { Modal, Box, Typography, Grid, Avatar, Button } from "@mui/material";

const EditProfileModal = ({
  open,
  handleClose,
  currentAvatar,
  handleAvatarUpdate,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);

  const avatarOptions = [
    "/images/profile/female-user.svg",
    "/images/profile/male-user.svg",
    "/images/profile/female-user.svg",
    "/images/profile/male-user.svg",
    "/images/profile/female-user.svg",
    "/images/profile/male-user.svg",
  ];

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    handleAvatarUpdate(selectedAvatar);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Select an Avatar
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {avatarOptions.map((avatar) => (
            <Grid item xs={4} key={avatar}>
              <Avatar
                src={avatar}
                alt="Avatar"
                sx={{
                  width: 80,
                  height: 80,
                  cursor: "pointer",
                  border:
                    selectedAvatar === avatar
                      ? "1px solid black"
                      : "1px solid black",
                }}
                onClick={() => handleAvatarSelect(avatar)}
              />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
