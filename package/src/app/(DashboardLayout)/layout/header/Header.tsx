import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
// components
import Profile from "./Profile";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  const [greeting, setGreeting] = useState("");
  const [message, setMessage] = useState("");

  const handleDateTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
      setMessage("Ready to start your day with some tasks!");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
      setMessage("Ready to make rest of the day organized!");
    } else {
      setGreeting("Good Evening");
      setMessage("Ready to finish the remaining tasks!");
    }
  };

  useEffect(() => {
    handleDateTime();
  }, []);

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Box>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{ mt: 3 }}
              >{`${greeting}, Smruti.`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="primary"
                style={{ textAlign: "left", marginTop: "0px" }}
              >{`${message}`}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box flexGrow={1} />
        <IconButton
          size="large"
          aria-label="notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary" invisible={invisible}>
            <IconBellRinging
              size="21"
              stroke="1.5"
              onClick={() => handleBadgeVisibility()}
            />
          </Badge>
        </IconButton>
        <Stack spacing={1} direction="row" alignItems="center">
          <Button
            variant="contained"
            component={Link}
            href="/authentication/login"
            disableElevation
            color="primary"
          >
            Login
          </Button>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
