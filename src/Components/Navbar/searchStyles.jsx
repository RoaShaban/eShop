import { styled, alpha } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { colors } from "./navbarStyles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: "25px",
  backgroundColor: "#fff",
  border: `1px solid ${alpha(colors.text, 0.1)}`,
  transition: theme.transitions.create(["border-color", "box-shadow"], {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    borderColor: alpha(colors.text, 0.25),
  },
  "&:focus-within": {
    borderColor: colors.text,
    boxShadow: `0 0 0 3px ${alpha(colors.text, 0.08)}`,
  },
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1.5, 1, 0),
    // leave room for the search icon
    paddingLeft: `calc(1em + ${theme.spacing(4.5)})`,
    fontSize: "0.9rem",
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": { opacity: 0.6 },
    // Kept narrow at md so the links, search and icons all fit on one row.
    [theme.breakpoints.up("md")]: {
      width: "12ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "22ch",
      "&:focus": { width: "28ch" },
    },
  },
}));
