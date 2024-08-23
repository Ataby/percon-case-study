import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarRateIcon from "@mui/icons-material/StarRate";
import EventNoteIcon from "@mui/icons-material/EventNote";

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        padding: "10px",
        height: "100vh",
      }}
    >
      <Autocomplete
        disablePortal
        onChange={(event, newValue) => {
            setSelectedCategory(newValue);
            console.log(newValue) // Seçilen değeri günceller
          }}
  
        id="combo-box-demo"
        options={noteCategories}
        sx={{ minWidth: "70%", padding: "10px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ bgcolor: "rgba(170, 200, 235, 0.9)" }}
            label="Categories"
          />
        )}
        renderOption={(props, option) => {
          console.log(option.icon);
          return (
            <Box
              component="li"
              sx={{ "& > img": { ml: 8, flexShrink: 0 } }}
              {...props}
            >
              {option.icon} {option.label}
            </Box>
          );
        }}
      />

      <TextField
        id="outlined-multiline-static"
        margin="none"
        placeholder="Title"
        label="Title"
        rows={2}
        multiline
        sx={{
          minWidth: "70%",
          marginTop: "2rem",
        }}
        onChange={(e)=> {
            setTitle(e.target.value);
        }}
      />

      <TextField
        id="outlined-multiline-static"
        label="Content"
        placeholder="Content"
        multiline
        rows={10}
        sx={{
          minWidth: "70%",
          marginTop: "2rem",
        }}
        onChange={(e)=> {
            setContent(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          alert("Succesfully Added");
        }}
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        color="primary"
        sx={{ width: "30%", marginTop: "3rem" }}
      >
        Submit
      </Button>
    </Box>
  );
};
const noteCategories = [
  { label: "Daily Routines", icon: <AccessTimeIcon /> },
  { label: "Weekly Routines", icon: <DateRangeIcon /> },
  { label: "Monthly Routines", icon: <EventNoteIcon /> },
  { label: "Special Events", icon: <StarRateIcon /> },
];

export default Form;
