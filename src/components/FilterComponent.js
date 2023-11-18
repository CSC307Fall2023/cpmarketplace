// components/FilterComponent.js
import React, { useState } from "react";
import {
  FormControl,
  Alert,
  FormControlLabel,
  Snackbar,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterComponent = ({ onFilterChange }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [radius, setRadius] = useState(5);
  const [verified, setVerified] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); // New state for alert visibility
  const [snackbarOpen, setSnackbarOpen] = useState(false); // New state for snackbar visibility

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const handleVerifiedChange = (event) => {
    setVerified(event.target.checked);
  };

  const applyFilters = () => {
    onFilterChange({
      sort: selectedSort,
      radius: radius,
      verified: verified,
    });
    setAlertVisible(true); // Show the alert when filters are applied
    setTimeout(() => setAlertVisible(false), 3000); // Hide the alert after 3 seconds
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return; // Don't close the snackbar if the user clicks away
    }
    setSnackbarOpen(false); // Close the snackbar
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }} // Responsive design
      alignItems="center"
      justifyContent="space-around" // Evenly space out the filters
      p={2}
      bgcolor="background.paper" // Use theme colors for background
      boxShadow={1} // Subtle shadow for depth
    >
      {/* Alert component
      {alertVisible && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Filters applied successfully!
        </Alert>
      )} */}
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={selectedSort}
          onChange={handleSortChange}
          label="Sort By"
        >
          <MenuItem value="priceLowest">Price: Lowest First</MenuItem>
          <MenuItem value="priceHighest">Price: Highest First</MenuItem>
          <MenuItem value="newest">Newly Listed</MenuItem>
        </Select>
      </FormControl>

      <TextField
        size="small"
        type="number"
        label="Radius"
        value={radius}
        onChange={handleRadiusChange}
        InputProps={{ endAdornment: "mi" }} // Add 'mi' for miles
        sx={{ width: "100px" }} // Consistent width
      />

      <FormControlLabel
        control={
          <Checkbox checked={verified} onChange={handleVerifiedChange} />
        }
        label="Verified Only"
        sx={{ margin: 0 }} // Remove default margins
      />

      <IconButton
        onClick={applyFilters}
        color="primary"
        aria-label="apply filters"
      >
        <FilterListIcon />
      </IconButton>
      {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Filters applied successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FilterComponent;
