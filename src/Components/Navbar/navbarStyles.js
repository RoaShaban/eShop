import { alpha } from "@mui/material";

export const colors = {
  background: "#FAF9F6",
  text: "#181E29",
  accent: "#C2570C", // logo dot + cart badge
};

export const navbarHeight = { xs: 56, md: 72 };

// Subtle divider / hover tints derived from the text colour.
export const hairline = alpha(colors.text, 0.08);
export const hoverTint = alpha(colors.text, 0.06);

// Logo: Instrument Serif (loaded in index.html), with a small accent dot.
export const brandSx = {
  fontFamily:
    '"Instrument Serif", "Playfair Display", Georgia, "Times New Roman", serif',
  fontWeight: 400,
  fontSize: { xs: "1.8rem", lg: "2rem" },
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: colors.text,
  userSelect: "none",
  overflow: "visible", // keep the descender of the "p" from being clipped by noWrap
  "&::after": {
    content: '""',
    display: "inline-block",
    width: "0.2em",
    height: "0.2em",
    marginLeft: "0.08em",
    borderRadius: "50%",
    backgroundColor: colors.accent,
    verticalAlign: "0.3em",
  },
};

// Text links (desktop nav). The underline grows from the centre on hover and
// stays visible on the active link (aria-current="page").
export const navLinkSx = {
  position: "relative",
  color: colors.text,
  textTransform: "none",
  fontSize: "0.95rem",
  fontWeight: 400,
  letterSpacing: "0.005em",
  minWidth: 0,
  px: { md: 1, lg: 1.5 },
  py: 0.75,
  borderRadius: 2,
  "&:hover": { backgroundColor: "transparent" },
  "&[aria-current='page']": { fontWeight: 600 },
  "&::after": {
    content: '""',
    position: "absolute",
    left: { md: 8, lg: 12 },
    right: { md: 8, lg: 12 },
    bottom: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.text,
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.25s ease",
  },
  "&:hover::after, &[aria-current='page']::after": { transform: "scaleX(1)" },
  "@media (prefers-reduced-motion: reduce)": {
    "&::after": { transition: "none" },
  },
};

// Wraps a link's text and reserves the width of its bold state, so the
// neighbouring links don't shift when the active link becomes bolder.
export const navLabelSx = {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  "&::after": {
    content: "attr(data-text)",
    height: 0,
    overflow: "hidden",
    visibility: "hidden",
    fontWeight: 600,
    pointerEvents: "none",
  },
};

// Icon buttons (hamburger, theme, favourites, cart, account).
export const iconButtonSx = {
  color: colors.text,
  transition: "background-color 0.2s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: hoverTint,
    transform: "translateY(-1px)",
  },
  "&:active": { transform: "scale(0.94)" },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "background-color 0.2s ease",
    "&:hover, &:active": { transform: "none" },
  },
};
