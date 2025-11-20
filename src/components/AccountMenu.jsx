import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ bgcolor: "#053F44" }}>B</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: 200, 
          },
        }}
      >
        <MenuItem onClick={() => handleNavigation("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleNavigation("/settings")}>Settings</MenuItem>
        <MenuItem onClick={() => handleNavigation("/logout")}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
