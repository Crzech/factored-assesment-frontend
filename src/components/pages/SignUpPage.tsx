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
const SignUpPage: FunctionComponent = () => {
  return (
    <Box>
      <Container component="main" maxWidth="sm">
        <Box height="100vh" display="flex" alignItems="center">
          <Box m="auto">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoFocus
                />
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="confirm_password"
                  id="confirm_password"
                  autoComplete="current-password"
                />
                <Box textAlign="center">
                  <Button variant="contained" size="large">
                    Sign-Up Page
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

export default SignUpPage;
