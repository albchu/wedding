import { makeStyles } from "@material-ui/core/styles";

export const useCardStyles = makeStyles({
  actionButton: {
    "& span": {
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: "#cccccc",
      "& span": {
        color: "#cccccc",
      },
    },
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: "2em",
    fontWeight: 700,
  },
  prevButton: {
    "& span": {
      color: "#e3e3e3",
    },
    marginTop: "2em",
    marginRight: "1em",
    fontWeight: 700,
  },
  text: {
    color: "white",
    textShadow: "1px 1px 12px rgba(0,0,0,0.4)",
    "& .MuiIconButton-label": {
      color: "#e3e3e3",
    },
  },
  textfield: {
    "& label.MuiFormLabel-root": {
      color: "#e3e3e3",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormHelperText-root": {
      color: "#e3e3e3",
      fontSize: ".7rem",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d1cfcf",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#dbd9d9",
      },
    },
  },
});
