import { Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router";

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
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
const rows: GridRowsProp = [
  {
    id: 1,
    title: "Jedi Jedi Jedi",
    episode_id: 1,
    opening_crawl:
      "dasjf;;klwoieqrpioqhwepfoihqwpoeihfpoiqwhfepoihsdpoifpaoiwdfjpoiqwefoiuqwepiofupwkdjf;klasjf",
    director: "Test Director",
    producer: "Test Producer",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  },
  {
    id: 2,
    title: "Jedi Jedi Jedi",
    episode_id: 1,
    opening_crawl:
      "dasjf;;klwoieqrpioqhwepfoihqwpoeihfpoiqwhfepoihsdpoifpaoiwdfjpoiqwefoiuqwepiofupwkdjf;klasjf",
    director: "Test Director",
    producer: "Test Producer",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  },
  {
    id: 3,
    title: "Jedi Jedi Jedi",
    episode_id: 1,
    opening_crawl:
      "dasjf;;klwoieqrpioqhwepfoihqwpoeihfpoiqwhfepoihsdpoifpaoiwdfjpoiqwefoiuqwepiofupwkdjf;klasjf",
    director: "Test Director",
    producer: "Test Producer",
    release_date: "21/01/2023",
    created: "21/01/2023",
    edited: "21/01/2023",
  },
];
const FilmsIndex: FunctionComponent = () => {
  const navigate = useNavigate();
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
          <DataGrid columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </>
  );
};

export default FilmsIndex;
