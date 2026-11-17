import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Link,
  Typography,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/authSchema";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {labelSx, inputSx} from "./../../Components/UI/inputStyles.jsx"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onRegisterFormSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Register", data);
      setSuccess(true);
      navigate('\login');
    } catch (err) {
      console.log(err.response);
      setServerError("Registration Failed!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", sm: "auto" },
        backgroundColor: "#FAF9F6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "12px", sm: "40px" },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: { xs: "24px 16px", sm: "40px 48px" },
          boxShadow: "0 1px 3px #01040d0f, 0 8px 24px rgba(1, 4, 13, 0.06)",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              backgroundColor: "#FAF9F6",
              width: "fit-content",
              paddingX: "14px",
              paddingY: "6px",
              borderRadius: "25px",
              fontSize: { xs: "12px", sm: "13px" },
              fontWeight: 600,
              letterSpacing: { xs: "0.05em", sm: "0.08em" },
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <GppGoodOutlinedIcon sx={{ color: "#D97706", fontSize: "18px" }} />{" "}
            SECURE REGISTRATION
          </Typography>
          <Typography
            component={"h1"}
            variant="h6"
            sx={{
              textAlign: "center",
              margin: "20px 0 12px 0",
              fontSize: { xs: "24px", sm: "32px" },
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#01040D",
            }}
          >
            Create Your Account
          </Typography>
          <Typography
            sx={{
              marginBottom: "12px",
              padding: { xs: "0", sm: "0 32px" },
              textAlign: "center",
              fontSize: { xs: "16px", sm: "18px" },
              lineHeight: 1.6,
              color: "#45474C",
            }}
          >
            Join eShop and discover curated pieces, bespoke archives, and quiet
            luxury.
          </Typography>

          {serverError?<Alert severity="error">{serverError}</Alert>:null}

          <Box component={"form"} onSubmit={handleSubmit(onRegisterFormSubmit)}>
            <InputLabel size="medium" sx={labelSx} htmlFor="username">
              USERNAME
            </InputLabel>
            <TextField
              id="username"
              {...register("userName")}
              autoComplete="username"
              variant="outlined"
              placeholder="Choose a username"
              error={errors.userName}
              helperText={errors.userName?.message}
              margin="none"
              required
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputSx }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                },
              }}
            />

            <InputLabel size="medium" sx={labelSx} htmlFor="fullname">
              FULLNAME
            </InputLabel>
            <TextField
              id="fullname"
              {...register("fullName")}
              autoComplete="name"
              variant="outlined"
              placeholder="Enter your full name"
              error={errors.fullName}
              helperText={errors.fullName?.message}
              margin="none"
              required
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputSx }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <InputLabel size="medium" sx={labelSx} htmlFor="email">
              EMAIL ADDRESS
            </InputLabel>
            <TextField
              id="email"
              type="email"
              {...register("email")}
              autoComplete="email"
              variant="outlined"
              placeholder="Enter your email address"
              error={errors.email}
              helperText={errors.email?.message}
              margin="none"
              required
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputSx }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <InputLabel size="medium" sx={labelSx} htmlFor="phone">
              PHONE NUMBER
            </InputLabel>
            <TextField
              id="phone"
              type="tel"
              {...register("phoneNumber")}
              autoComplete="tel"
              variant="outlined"
              placeholder="Enter your phone number"
              error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              margin="none"
              required
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputSx }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <InputLabel size="medium" sx={labelSx} htmlFor="password">
              PASSWORD
            </InputLabel>

            <FormControl
              variant="outlined"
              fullWidth
              margin="none"
              error={errors.password}
            >
              <OutlinedInput
                id="password"
                {...register("password")}
                autoComplete="new-password"
                placeholder="Create a secure password"
                required
                sx={inputSx}
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  "aria-describedby": errors.password
                    ? "password-helper-text"
                    : undefined,
                }}
              />
              <FormHelperText id="password-helper-text">
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              endIcon={isSubmitting ? null : <ArrowRightAltIcon />}
              fullWidth
              disabled={isSubmitting}
              sx={{
                backgroundColor: "#01040D",
                marginTop: "32px",
                paddingY: "14px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#262A36", boxShadow: "none" },
                "&:focus-visible": {
                  outline: "3px solid rgba(217, 119, 6, 0.5)",
                  outlineOffset: "2px",
                },
              }}
            >
              {isSubmitting
                ? <CircularProgress color="#D97706" size={16} />
                : "Sign Up"}
            </Button>
          </Box>
          <Divider
            sx={{
              marginTop: "28px",
              color: "#6B6E75",
              fontSize: { xs: "19px", sm: "14px" },
              letterSpacing: "0.08em",
              "&::before, &::after": { borderColor: "#E5E2DA" },
            }}
          >
            OR
          </Divider>
          <Typography
            sx={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: { xs: "15px", sm: "16px" },
              lineHeight: 1.6,
              color: "#45474C",
            }}
          >
            Already have an account?{"  "}
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{
                color: "#D97706",
                fontWeight: 600,
                whiteSpace: "nowrap",
                borderRadius: "4px",
                "&:focus-visible": {
                  outline: "3px solid rgba(217, 119, 6, 0.5)",
                  outlineOffset: "2px",
                },
              }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
