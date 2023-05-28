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
import { FunctionComponent, useState } from "react";

interface FormData {
  films: Array<{ id: number; name: String | undefined }>;
}

const films = [
  { id: 1, name: "Film 1" },
  { id: 2, name: "Film 2" },
];

const PeopleForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    films: [],
  });
  const handleFilmSelect = (event: SelectChangeEvent) => {
    const selectedId = parseInt(event.target.value);
    const filmObj = {
      id: selectedId,
      name: films.find((item) => item.id === selectedId)?.name,
    };
    setFormData((prevState) => {
      if (!prevState.films.find((item) => item.id === selectedId)) {
        return {
          ...prevState,
          films: [...prevState.films, filmObj],
        };
      }
      return prevState;
    });
  };
  const handleFilmDelete = (deleteId: number) => {
    console.log(
      formData,
      formData.films.filter((item) => item.id === deleteId)
    );
    setFormData((prevState) => ({
      ...prevState,
      films: prevState.films.filter((item) => item.id !== deleteId),
    }));
  };
  return (
    <>
      <Typography variant="h4" gutterBottom component="h2">
        {true ? "Create" : "Edit"} Person
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
        type="text"
        variant="outlined"
        color="secondary"
        label="Birth Year"
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
        label="Eye Color"
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
        label="Name"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Hair Color"
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
        label="Height"
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
        label="Mass"
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
        label="Skin Color"
        sx={{ mb: 4 }}
        // onChange={(e) => setFirstName(e.target.value)}
        // value={firstName}
        fullWidth
        required
      />
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="demo-simple-select-label">Homeworld</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="demo-simple-select-label">Films</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          value={undefined}
          onChange={handleFilmSelect}
        >
          <MenuItem value="1">Film 1</MenuItem>
          <MenuItem value="2">Film 2</MenuItem>
        </Select>
        <Stack direction="row" spacing={1}>
          {formData.films.map((item) => (
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

export default PeopleForm;
