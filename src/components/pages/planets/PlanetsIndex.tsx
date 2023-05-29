import { Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllPlanets } from "../../../services/PlanetsService";
import { useAuth } from "../../../hooks/useAuth";
import Planet from "../../../types/planets";
import { globalAlertContext } from "../../../context/GlobalAlertContext";

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
    width: 160,
  },
  {
    field: "surface_water",
    headerName: "Surface Water",
    width: 90,
  },
  {
    field: "created",
    headerName: "Created",
    width: 150,
  },
  {
    field: "edited",
    headerName: "Edited",
    width: 150,
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

const PlanetsIndex: FunctionComponent = () => {
  let navigate = useNavigate();
  const [rows, setRows] = useState<Planet[]>([]);
  const { user } = useAuth();
  const { setAlertInfo } = useContext(globalAlertContext);

  useEffect(() => {
    getAllPlanets(user?.token)
      .then((response) => {
        const planets = response.data as Planet[];
        setRows(planets);
      })
      .catch((err) => {
        setAlertInfo({
          title: "Error",
          subtitle: err.message,
          type: "error",
          show: true,
        });
      });
  }, [user?.token, setAlertInfo]);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom component="h2">
            Planets
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
          <Button
            onClick={() => navigate("/planets/form")}
            variant="contained"
            color="success"
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PlanetsIndex;
