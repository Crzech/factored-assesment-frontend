import { Box, Button, TextField, Typography } from "@mui/material";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Planet from "../../../types/planets";
import {
  createPlanet,
  getPlanetInfo,
  updatePlanet,
} from "../../../services/PlanetsService";
import { useAuth } from "../../../hooks/useAuth";
import { globalAlertContext } from "../../../context/GlobalAlertContext";
import { useNavigate, useParams } from "react-router";

const PlanetsForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<Planet>({
    id: null,
    name: "",
    diameter: "",
    rotation_period: "",
    orbital_period: "",
    gravity: "",
    population: "",
    climate: "",
    terrain: "",
    surface_water: "",
    created: null,
    edited: null,
  });
  const { id } = useParams();
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const { user } = useAuth();
  const { setAlertInfo } = useContext(globalAlertContext);
  const navigate = useNavigate();
  const handleSubmit = () => {
    let validForm = true;
    if (!formData.name) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, name: true }));
    }
    if (!formData.diameter) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, diameter: true }));
    }
    if (!formData.rotation_period) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, rotation_period: true }));
    }
    if (!formData.orbital_period) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, orbital_period: true }));
    }
    if (!formData.gravity) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, gravity: true }));
    }
    if (!formData.population) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, population: true }));
    }
    if (!formData.climate) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, climate: true }));
    }
    if (!formData.terrain) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, terrain: true }));
    }
    if (!formData.surface_water) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, surface_water: true }));
    }
    if (validForm) {
      if (!formData.id) {
        createPlanet(formData, user?.token)
          .then((response) => {
            navigate("/planets");
            setAlertInfo({
              title: "Success",
              subtitle: "Planet Saved successfully",
              type: "success",
              show: true,
            });
          })
          .catch((err) =>
            setAlertInfo({
              title: "Error",
              subtitle: err.message,
              type: "error",
              show: true,
            })
          );
      } else {
        updatePlanet(formData, user?.token)
          .then((response) => {
            navigate("/planets");
            setAlertInfo({
              title: "Success",
              subtitle: "Planet Saved successfully",
              type: "success",
              show: true,
            });
          })
          .catch((err) =>
            setAlertInfo({
              title: "Error",
              subtitle: err.message,
              type: "error",
              show: true,
            })
          );
      }
    }
  };
  useEffect(() => {
    if (id) {
      getPlanetInfo(parseInt(id), user?.token)
        .then((response) => {
          const planet = response.data as Planet;
          setFormData(planet);
        })
        .catch((err) =>
          setAlertInfo({
            title: "Error",
            subtitle: err.message,
            type: "error",
            show: true,
          })
        );
    }
  }, [id, user?.token, setAlertInfo]);
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
        error={errors["name"]}
        helperText={errors["name"] && "Name should not be blank"}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            name: e.target.value,
          }))
        }
        value={formData.name}
        sx={{ mb: 4 }}
        fullWidth
        required
      />
      <TextField
        label="Diameter"
        type="number"
        sx={{ mb: 4 }}
        error={errors["diameter"]}
        helperText={errors["diameter"] && "Diameter should not be blank"}
        value={formData.diameter}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            diameter: e.target.value,
          }))
        }
        required
        fullWidth
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Rotation Period"
        value={formData.rotation_period}
        sx={{ mb: 4 }}
        error={errors["rotation_period"]}
        required
        helperText={
          errors["rotation_period"] && "Rotation Period should not be blank"
        }
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            rotation_period: e.target.value,
          }))
        }
        fullWidth
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Orbital Period"
        sx={{ mb: 4 }}
        error={errors["orbital_period"]}
        value={formData.orbital_period}
        helperText={
          errors["orbital_period"] && "Orbital Period should not be blank"
        }
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            orbital_period: e.target.value,
          }))
        }
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Gravity"
        sx={{ mb: 4 }}
        error={errors["gravity"]}
        value={formData.gravity}
        helperText={errors["gravity"] && "Gravital should not be blank"}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            gravity: e.target.value,
          }))
        }
        fullWidth
        required
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Population"
        sx={{ mb: 4 }}
        error={errors["population"]}
        helperText={errors["population"] && "Population should not be blank"}
        value={formData.population}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            population: e.target.value,
          }))
        }
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
        error={errors["climate"]}
        helperText={errors["climate"] && "Climate should not be blank"}
        value={formData.climate}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            climate: e.target.value,
          }))
        }
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
        value={formData.terrain}
        error={errors["terrain"]}
        helperText={errors["terrain"] && "Terrain should not be blank"}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            terrain: e.target.value,
          }))
        }
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
        error={errors["surface_water"]}
        value={formData.surface_water}
        helperText={
          errors["surface_water"] && "Surface Water should not be blank"
        }
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            surface_water: e.target.value,
          }))
        }
        // value={firstName}
        fullWidth
        required
      />
      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleSubmit}
          variant="outlined"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default PlanetsForm;
