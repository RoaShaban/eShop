import { alpha, Link, Menu, MenuItem } from '@mui/material';
import { colors, hairline, hoverTint, iconButtonSx } from "./navbarStyles";

import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

export default function useProfileMenu() {
const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        "& .MuiPaper-root": {
          mt: 1,
          minWidth: 160,
          borderRadius: 2,
          backgroundColor: "#fff",
          color: colors.text,
          border: `1px solid ${hairline}`,
          boxShadow: `0 8px 24px ${alpha(colors.text, 0.12)}`,
        },
        "& .MuiMenuItem-root": {
          mx: 0.75,
          px: 1.5,
          py: 1,
          borderRadius: 1.5,
          fontSize: "0.95rem",
          transition: "background-color 0.2s ease",
          "&:hover": { backgroundColor: hoverTint },
        },
      }}
    >
      {/* {<MenuItem onClick={handleMenuClose}>Profile</MenuItem>} */}
      <MenuItem onClick={handleMenuClose}><Link
       sx={{textDecoration:"none", color:"#000"}}
       component={RouterLink} to='/login'>Login</Link></MenuItem>
    </Menu>
  );
  return {menuId, handleProfileMenuOpen, renderMenu}
}
