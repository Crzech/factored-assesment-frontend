import { FunctionComponent } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Container,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo-starwars.jpg";
// color="#66ada4"
const LoginPage: FunctionComponent = () => {
  return (
    <Box>
      <Container component="main" maxWidth="sm">
        <Box height="100vh" display="flex" alignItems="center">
          <Box m="auto">
            <Card sx={{ minWidth: 275 }}>
              <Box display="flex" justifyContent="center" marginTop="20px">
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: "secondary.main",
                    width: 150,
                    height: 150,
                  }}
                >
                  <img
                    alt="starwars-logo"
                    src={logo}
                    width="150px"
                    height="150px"
                  />
                </Avatar>
              </Box>
              <CardContent>
                <Typography variant="h2" align="center">
                  Star Wars API
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Box textAlign="center">
                  <Button variant="contained" size="large">
                    Log-In
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
