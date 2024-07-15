"use client";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";

interface EditProfileModalProps {
  open: boolean;
  handleClose: () => void;
  currentAvatar: string;
  handleAvatarUpdate: (avatar: string) => string;
}
const EditProfileModal: React.FC<EditProfileModalProps> = ({
  open,
  handleClose,
  currentAvatar,
  handleAvatarUpdate,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);

  const avatarOptions = [
    "/images/profile/female-user.svg",
    "/images/profile/male-user.svg",
    "/images/profile/male-user1.svg",
  ];

  const handleAvatarSelect = (avatar: string) => {
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
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="modal-title" variant="h6" component="h2">
            Select an Avatar
          </Typography>
          <IconButton onClick={handleClose}>
            <IconX />
          </IconButton>
        </Box>
        <Grid container spacing={4} sx={{ mt: 1 }}>
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
                      ? "2px solid #9b82f5"
                      : "2px solid #000",
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
            mt: 2,
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
