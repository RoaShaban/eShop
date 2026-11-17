import { Password } from "@mui/icons-material"
import * as yup from "yup"

export const registerSchema = yup
  .object({
    fullName: yup.string().required("Full Name is Required")
    .min(3, "Full Name must consist at leat of 3 characters"),
    userName: yup.string().required("User Name is Required")
    .min(3, "User Name must consist at leat of 3 characters"),
    email: yup.string().required("Email is Required").email("Invalid Email"),
    password: yup.string().required("Password is Required")
    .min(8, "Password must consist at leat of 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a digit")
    .matches(/[^A-Za-z0-9]/, "Password must contain a special character"),
    phoneNumber: yup.string().required("phone Number is Required")
    .matches(/^05\d{8}$/, "Phone Number must consist of 10 digits starting with 05")
  })
  .required()

  export const loginSchema = yup.object({
    email: yup.string().required("Email is Required").email("Invalid Email"),
    password: yup.string().required("Password is Required")
    .min(8, "Password must consist at leat of 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a digit")
    .matches(/[^A-Za-z0-9]/, "Password must contain a special character")
  }).required()

  export const sendCodeSchema = yup.object({
    email: yup.string().required("Email is Required").email("Invalid Email")
  }).required()

  export const resetPassSchema = yup.object({
    code: yup.string().required()
    .min(4, "Verification code must consist at leat of 4 characters")
    .max(4, "Verification code must consist at most of 4 characters"),
    newPassword: yup.string().required("Password is Required")
    .min(8, "Password must consist at leat of 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a digit")
    .matches(/[^A-Za-z0-9]/, "Password must contain a special character"),
    confirmPassword: yup.string().required("Please confirm your password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
  }).required()