import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { brandSx, colors, hairline, hoverTint } from "./navbarStyles";

export default function useMobileMenu({ navItems }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMobileMenuOpen = mobileOpen;

  const handleMobileMenuOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  const mobileMenuId = "mobile-navigation";

  const renderMobileMenu = (
    <Drawer
      id={mobileMenuId}
      anchor="left"
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          width: 280,
          maxWidth: "85vw",
          boxSizing: "border-box",
          backgroundColor: colors.background,
          color: colors.text,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 64,
          px: 3,
          borderBottom: `1px solid ${hairline}`,
        }}
      >
        <Typography variant="h6" component="div" sx={brandSx}>
          eShop
        </Typography>
      </Box>

      <List component="nav" aria-label="Mobile navigation" sx={{ p: 1.5 }}>
        {navItems.map(({ label, to }) => (
          <ListItemButton
            key={label}
            component={NavLink}
            to={to}
            end={to === "/"}
            onClick={handleMobileMenuClose}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1.25,
              mb: 0.5,
              transition: "background-color 0.2s ease",
              "&:hover": { backgroundColor: hoverTint },
              // Active route (NavLink sets aria-current="page")
              "&[aria-current='page'], &[aria-current='page']:hover": {
                backgroundColor: hoverTint,
              },
              "&[aria-current='page'] .MuiTypography-root": { fontWeight: 600 },
            }}
          >
            <ListItemText
              primary={label}
              sx={{ "& .MuiTypography-root": { fontWeight: 400 } }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );

  return {
    mobileMenuId,
    isMobileMenuOpen,
    handleMobileMenuOpen,
    renderMobileMenu,
  };
}
