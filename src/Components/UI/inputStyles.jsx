export const labelSx = {
  color: "#01040D",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  marginTop: "20px",
  marginBottom: "8px",
};

export const inputSx = {
  borderRadius: "12px",
  backgroundColor: "#FAF9F6",
  fontSize: "16px",
  color: "#01040D",
  "& .MuiOutlinedInput-input": {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#6B6E75",
    opacity: 1,
  },
  "& .MuiInputAdornment-root": { color: "#6B6E75" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#A8A59D" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#01040D" },
  "&.Mui-focused": {
    backgroundColor: "#fff",
    boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.25)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D97706",
    borderWidth: "2px",
  },
};