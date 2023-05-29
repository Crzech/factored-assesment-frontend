import { FunctionComponent, useState } from "react";
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
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
// color="#66ada4"
const LoginPage: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
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
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                <Box textAlign="center" sx={{ mb: 4 }}>
                  <Link
                    style={{ color: "inherit" }}
                    to="/signup"
                  >
                    Create an account
                  </Link>
                </Box>
                <Box textAlign="center">
                  <Button
                    onClick={() => login(formData.username, formData.password)}
                    variant="contained"
                    size="large"
                  >
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
