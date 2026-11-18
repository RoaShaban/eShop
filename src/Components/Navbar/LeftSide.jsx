import { Box, Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import useMobileMenu from "./useMobileMenu";
import { brandSx, iconButtonSx, navLabelSx, navLinkSx } from "./navbarStyles";

// wil be changed soon
const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export default function LeftSide() {
  const {mobileMenuId, isMobileMenuOpen, handleMobileMenuOpen, renderMobileMenu} =
   useMobileMenu({ navItems });

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 2, lg: 5 } }}>

      <IconButton
        edge="start"
        aria-label="open navigation menu"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        aria-expanded={isMobileMenuOpen}
        onClick={handleMobileMenuOpen}
        sx={{ ...iconButtonSx, display: { xs: "inline-flex", md: "none" }, ml: -1 }}
      >
        <MenuIcon />
      </IconButton>

      <Typography variant="h6" noWrap component="div" sx={brandSx}>
        eShop
      </Typography>

      {/* Desktop links */}
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.25 }}
      >
        {navItems.map(({ label, to }) => (
          <Button
            key={label}
            component={NavLink}
            to={to}
            end={to === "/"}
            sx={navLinkSx}
          >
            <Box component="span" data-text={label} sx={navLabelSx}>
              {label}
            </Box>
          </Button>
        ))}
      </Box>

      {renderMobileMenu}
    </Box>
  );
}
