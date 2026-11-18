import { Badge, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { colors, iconButtonSx } from "./navbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./searchStyles.jsx";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useProfileMenu from "./useProfileMenu.jsx";

export default function RightSide() {
  const {menuId, handleProfileMenuOpen, renderMenu} = useProfileMenu();

  return (
    <Box
      sx={{display: { xs: "contents", md: "flex" }, alignItems: "center", gap: { md: 1, lg: 1.5 },
      }}
    >
      <Search sx={{display:{xs:"none", md:"block"}, order: { xs: 3, md: 0 }, flexBasis: { xs: "100%", md: "auto" } }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "gray" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products ..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />
      <Box
        sx={{display: "flex", alignItems: "center", gap: { xs: 0.25, md: 0.25, lg: 1.5 },
          ml: { xs: "auto", md: 0 },
        }}>
        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
          sx={iconButtonSx}
        >
          <LightModeOutlinedIcon />
        </IconButton>

        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
          sx={iconButtonSx}
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <IconButton
          size="medium"
          aria-label="show 4 new notifications"
          color="inherit"
          sx={iconButtonSx}
        >
          <Badge
            badgeContent={4}
            color="error"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: "0.7rem",
                fontWeight: 600,
                backgroundColor: colors.accent,
                color: "#fff",
              },
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ color: colors.text }} />
          </Badge>
        </IconButton>

        <IconButton
          size="medium"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          sx={{ ...iconButtonSx, mr: -1 }}
        >
          <AccountCircle />
        </IconButton>
      </Box>
      {renderMenu}
    </Box>
  );
}
