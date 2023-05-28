import { Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { FunctionComponent } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "diameter", headerName: "Diameter", width: 130 },
  {
    field: "rotation_period",
    headerName: "Rotation Period",
    width: 90,
  },
  {
    field: "orbital_period",
    headerName: "Orbital Period",
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "gravity",
    headerName: "Gravity",
    width: 90,
  },
  {
    field: "population",
    headerName: "Population",
    width: 90,
  },
  {
    field: "climate",
    headerName: "Climate",
    width: 90,
  },
  {
    field: "terrain",
    headerName: "Terrain",
    width: 90,
  },
  {
    field: "surface_water",
    headerName: "Surface Water",
    width: 90,
  },
  {
    field: "created",
    headerName: "Created",
    width: 90,
  },
  {
    field: "edited",
    headerName: "Edited",
    width: 90,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 90,
    sortable: false,
    renderCell: (params) => {
      return <Button onClick={() => {}}>Edit</Button>;
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 90,
    sortable: false,
    renderCell: (params) => {
      return <Button onClick={() => {}}>Delete</Button>;
    },
  },
];
const rows: GridRowsProp = [
  {
    id: 1,
    name: "Planet 1",
    diameter: "21309 m3",
    rotation_period: 24,
    orbital_period: 320,
    gravity: 9.82,
    population: '100B',
    climate: "Weather",
    terrain: "Mountains",
    surface_water: "100B",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  },
  {
    id: 2,
    name: "Planet 2",
    diameter: "21309 m3",
    rotation_period: 24,
    orbital_period: 320,
    gravity: 9.82,
    population: '100B',
    climate: "Weather",
    terrain: "Mountains",
    surface_water: "100B",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  },
  {
    id: 3,
    name: "Planet 3",
    diameter: "21309 m3",
    rotation_period: 24,
    orbital_period: 320,
    gravity: 9.82,
    population: '100B',
    climate: "Weather",
    terrain: "Mountains",
    surface_water: "100B",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  }
];
const PlanetsIndex: FunctionComponent = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom component="h2">
            Films
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <Button variant="contained" color="success">
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </>
  );
};

export default PlanetsIndex;
