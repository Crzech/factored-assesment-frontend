import { Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import Films from "../../../types/films";
import { getAllFilms } from "../../../services/FilmsService";
import { useAuth } from "../../../hooks/useAuth";
import { globalAlertContext } from "../../../context/GlobalAlertContext";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "episode_id", headerName: "Episode ID", width: 130 },
  {
    field: "opening_crawl",
    headerName: "Opening Crawl",
    width: 90,
    sortable: false,
    renderCell: (params) => {
      return <Button onClick={() => {}}>Show</Button>;
    },
  },
  {
    field: "director",
    headerName: "Director",
    width: 160,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 90,
  },
  {
    field: "release_date",
    headerName: "Release Date",
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
const FilmsIndex: FunctionComponent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [rows, setRows] = useState<Films[]>([]);
  const { setAlertInfo } = useContext(globalAlertContext);
  const fetchFilms = useCallback(() => {
    getAllFilms(user?.token)
      .then((response) => {
        const films = response.data as Films[];
        setRows(films);
      })
      .catch((err) =>
        setAlertInfo({
          title: "Error",
          subtitle: err.message,
          type: "error",
          show: true,
        })
      );
  }, [user?.token, setAlertInfo]);

  useEffect(() => {
    fetchFilms();
  }, [user?.token, setAlertInfo, fetchFilms]);
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
          <Button
            onClick={() => navigate("/films/form")}
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

export default FilmsIndex;
