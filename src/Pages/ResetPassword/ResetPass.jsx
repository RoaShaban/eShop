import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  InputAdornment,
  InputLabel,
  TextField,
  Link,
  Typography,
  Alert,
  FormControl,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoneyIcon from "@mui/icons-material/Money";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassSchema } from "../../validations/authSchema";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {labelSx, inputSx} from "./../../Components/UI/inputStyles.jsx"

export default function ResetPass() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickShowConfirmedPassword = () => {
    setShowConfirmedPassword((show) => !show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPassSchema),
    mode: "onBlur",
  });

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onResetPasswordFormSubmit = async (data) => {
    try {
      const {code, newPassword} = data;
      const email = localStorage.getItem("email");
      const response = await axios.patch(
       "https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword",
        {code, newPassword, email}
      );
      localStorage.removeItem("email");
      setSuccess(true);
      navigate("/login");
    } catch (err) {
      setServerError("Operation Failed!");
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
            <PublishedWithChangesIcon
              sx={{ color: "#D97706", fontSize: "18px" }}
            />
            {"   "}
            PASSWORD RECOVERY
          </Typography>
          <Typography
            component={"h1"}
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
            Reset Password
          </Typography>
          <Typography
            sx={{
              marginBottom: "12px",
              padding: { xs: "0", sm: "0 32px" },
              textAlign: "center",
              fontSize: { xs: "16px", sm: "17px" },
              lineHeight: 1.6,
              color: "#45474C",
            }}
          >
            Create a new password for your account.
          </Typography>

          {serverError ? <Alert severity="error">{serverError}</Alert> : null}

          <Box component={"form"} onSubmit={handleSubmit(onResetPasswordFormSubmit)}>
            <InputLabel size="medium" sx={labelSx} htmlFor="code">
              VERIFICATION CODE
            </InputLabel>
            <TextField
              id="code"
              type="code"
              {...register("code")}
              variant="outlined"
              placeholder="Enter verification code"
              error={errors.code}
              helperText={errors.code?.message}
              margin="none"
              required
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputSx }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MoneyIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <InputLabel size="medium" sx={labelSx} htmlFor="newPassword">
              NEW PASSWORD
            </InputLabel>

            <FormControl
              variant="outlined"
              fullWidth
              margin="none"
              error={errors.newPassword}
            >
              <OutlinedInput
                id="newPassword"
                {...register("newPassword")}
                autoComplete="new-password"
                placeholder="Enter your new password"
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
                  "aria-describedby": errors.newPassword
                    ? "newPassword-helper-text"
                    : undefined,
                }}
              />
              <FormHelperText id="newPassword-helper-text">
                {errors.newPassword?.message}
              </FormHelperText>
            </FormControl>

            <InputLabel size="medium" sx={labelSx} htmlFor="confirmPassword">
              CONFIRM NEW PASSWORD
            </InputLabel>

            <FormControl
              variant="outlined"
              fullWidth
              margin="none"
              error={errors.confirmPassword}
            >
              <OutlinedInput
                id="confirmPassword"
                {...register("confirmPassword")}
                autoComplete="new-password"
                placeholder="Confirm your new password"
                required
                sx={inputSx}
                type={showConfirmedPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <CheckCircleOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showConfirmedPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowConfirmedPassword}
                      edge="end"
                    >
                      {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  "aria-describedby": errors.confirmPassword
                    ? "confirmPassword-helper-text"
                    : undefined,
                }}
              />
              <FormHelperText id="confirmPassword-helper-text">
                {errors.confirmPassword?.message}
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
              {isSubmitting ? (
                <CircularProgress color="#D97706" size={16} />
              ) : (
                "Reset Password"
              )}
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
            Back to{"  "}
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
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
              Login
              <KeyboardBackspaceIcon sx={{ fontSize: "18px" }} />
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
