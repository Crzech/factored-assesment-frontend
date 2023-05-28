import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

interface FormData {
  // planets: Array<{ id: number; name: String | undefined }>;
}

// const planets = [
//   { id: 1, name: "Planet 1" },
//   { id: 2, name: "Planet 2" },
// ];

const PlanetsForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({});
  return (
    <>
      <Typography variant="h4" gutterBottom component="h2">
        {true ? "Create" : "Edit"} Planet
      </Typography>
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Name"
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        label="Diameter"
        type="number"
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Rotation Period"
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Orbital Period"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Gravity"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Population"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Climate"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Terrain"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Surface Water"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default PlanetsForm;
