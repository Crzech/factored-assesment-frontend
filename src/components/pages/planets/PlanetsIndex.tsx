import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { deletePlanet, getAllPlanets } from "../../../services/PlanetsService";
import { useAuth } from "../../../hooks/useAuth";
import Planet from "../../../types/planets";
import { globalAlertContext } from "../../../context/GlobalAlertContext";

const PlanetsIndex: FunctionComponent = () => {
  const navigate = useNavigate();
  const [deleteDialog, setDeleteDialog] = useState<{
    show: boolean;
    selected: null | GridRowId;
  }>({
    show: false,
    selected: null,
  });
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
        return (
          <Button onClick={() => navigate(`/planets/${params.id}`)}>
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      sortable: false,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => setDeleteDialog({ show: true, selected: params.id })}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const [rows, setRows] = useState<Planet[]>([]);
  const { user } = useAuth();
  const { setAlertInfo } = useContext(globalAlertContext);

  const fetchPlanets = useCallback(() => {
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
  }, [setAlertInfo, user?.token]);

  const handleDelete = () => {
    const id = deleteDialog.selected as number;
    deletePlanet(id, user?.token)
      .then((response) => {
        fetchPlanets();
        setDeleteDialog({ show: false, selected: null });
        setAlertInfo({
          title: "Success",
          subtitle: "Planet deleted succesfully",
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
  };

  useEffect(() => {
    fetchPlanets();
  }, [user?.token, setAlertInfo, fetchPlanets]);
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
      <Dialog
        open={deleteDialog.show}
        onClose={() =>
          setDeleteDialog({
            show: false,
            selected: null,
          })
        }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this Planet?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to about deleting this planet?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setDeleteDialog({
                show: false,
                selected: null,
              })
            }
          >
            Cancel
          </Button>
          <Button onClick={() => handleDelete()} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlanetsIndex;
