import React, { FunctionComponent } from "react";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "birth_year", headerName: "Birth Year", width: 130 },
  {
    field: "eye_color",
    headerName: "Eye color",
    width: 90,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "hair_color",
    headerName: "Hair color",
    width: 90,
  },
  {
    field: "height",
    headerName: "Hair color",
    width: 90,
  },
  {
    field: "mass",
    headerName: "Mass",
    width: 90,
  },
  {
    field: "skin_color",
    headerName: "Skin Color",
    width: 90,
  },
  {
    field: "homeworld",
    headerName: "Home World",
    width: 100,
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
    name: "Luke Skywalker",
    birth_year: "1999",
    eye_color: "Red",
    gender: "Male",
    hair_color: "Black",
    height: "1.90mt",
    mass: "70kg",
    skin_color: "White",
    homeworld: "Earth",
    created: "21/03/199",
    edited: null,
  },
  {
    id: 2,
    name: "Luke Skywalker",
    birth_year: "1999",
    eye_color: "Red",
    gender: "Male",
    hair_color: "Black",
    height: "1.90mt",
    mass: "70kg",
    skin_color: "White",
    homeworld: "Earth",
    created: "21/03/199",
    edited: null,
  },
  {
    id: 3,
    name: "Luke Skywalker",
    birth_year: "1999",
    eye_color: "Red",
    gender: "Male",
    hair_color: "Black",
    height: "1.90mt",
    mass: "70kg",
    skin_color: "White",
    homeworld: "Earth",
    created: "21/03/199",
    edited: null,
  },
];
const PeopleIndex: FunctionComponent = () => {
  let navigate = useNavigate();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom component="h2">
            People
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
          <Button onClick={() => {navigate("/people/form")}} variant="contained" color="success">
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

export default PeopleIndex;
