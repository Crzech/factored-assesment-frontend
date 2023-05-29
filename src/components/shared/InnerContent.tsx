import AppBar from "@mui/material/AppBar";
import {
  Alert,
  AlertTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import { Box, useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAuth } from "../../hooks/useAuth";
import { globalAlertContext } from "../../context/GlobalAlertContext";

const drawerWidth = 240;

const InnerContent: FunctionComponent = () => {
  const theme = useTheme();
  const { logout } = useAuth();
  const { alertInfo, setAlertInfo } = useContext(globalAlertContext);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ marginRight: "auto" }}
            >
              Star Wars API
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setAlertInfo({
                  title: "Error",
                  subtitle: "TEST",
                  type: "error",
                  show: false,
                });
                logout();
              }}
              sx={{ mr: 2 }}
            >
              <PowerSettingsNewIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/people"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/films"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CameraRollIcon />
                </ListItemIcon>
                <ListItemText primary="Films" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/planets"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="Planets" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
        <Toolbar />
        <Container>
          {alertInfo.show ? (
            <Alert
              onClose={() => {
                setAlertInfo({
                  show: false,
                  title: "Success",
                  subtitle: "",
                  type: "success",
                });
              }}
              severity={
                alertInfo.type === "success"
                  ? "success"
                  : alertInfo.type === "error"
                  ? "error"
                  : alertInfo.type === "info"
                  ? "info"
                  : "warning"
              }
            >
              <AlertTitle>{alertInfo.title}</AlertTitle>
              {alertInfo.subtitle}
            </Alert>
          ) : (
            <></>
          )}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default InnerContent;
