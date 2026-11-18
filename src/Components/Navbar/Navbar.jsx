import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { colors, hairline, navbarHeight } from "./navbarStyles";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: colors.background,
          color: colors.text,
          borderBottom: `1px solid ${hairline}`,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 6 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: navbarHeight,
              py: { xs: 1, md: 0 },
              columnGap: { xs: 1, md: 2, lg: 3 },
              rowGap: 1,
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LeftSide />
            <RightSide />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
