import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DatePicker from "react-date-picker";
import { FunctionComponent, useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

interface FormData {
  planets: Array<{ id: number; name: String | undefined }>;
}

const planets = [
  { id: 1, name: "Planet 1" },
  { id: 2, name: "Planet 2" },
];

const FilmsForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    planets: [],
  });
  const handlePlanetSelect = (event: SelectChangeEvent) => {
    const selectedId = parseInt(event.target.value);
    const planetObj = {
      id: selectedId,
      name: planets.find((item) => item.id === selectedId)?.name,
    };
    setFormData((prevState) => {
      if (!prevState.planets.find((item) => item.id === selectedId)) {
        return {
          ...prevState,
          planets: [...prevState.planets, planetObj],
        };
      }
      return prevState;
    });
  };
  const handleFilmDelete = (deleteId: number) => {
    setFormData((prevState) => ({
      ...prevState,
      planets: prevState.planets.filter((item) => item.id !== deleteId),
    }));
  };
  return (
    <>
      <Typography variant="h4" gutterBottom component="h2">
        {true ? "Create" : "Edit"} Film
      </Typography>
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Title"
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        label="Episode ID"
        type="number"
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        label="Opening crawl"
        multiline
        rows={4}
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Director"
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
        label="Producer"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />

      <FormControl sx={{ mb: 4 }} fullWidth>
        <Typography variant="body1">
          Release Date
        </Typography>
        <DatePicker />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="demo-simple-select-label">
          Planets in this film
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          value={undefined}
          onChange={handlePlanetSelect}
        >
          <MenuItem value="1">Planet 1</MenuItem>
          <MenuItem value="2">Planet 2</MenuItem>
        </Select>
        <Stack direction="row" spacing={1}>
          {formData.planets.map((item) => (
            <Chip
              label={item.name}
              variant="outlined"
              onDelete={() => handleFilmDelete(item.id)}
              key={`film-chip-${item.id}`}
            />
          ))}
        </Stack>
      </FormControl>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default FilmsForm;
