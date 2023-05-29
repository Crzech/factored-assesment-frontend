import { FunctionComponent, useContext, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { create } from "../../services/UserService";
import { globalAlertContext } from "../../context/GlobalAlertContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// color="#66ada4"
const SignUpPage: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const { setAlertInfo } = useContext(globalAlertContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    let validForm = true;
    const { name, username, password, email, confirm_password } = formData;
    if (!name) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, name: true }));
    }
    if (!username) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, username: true }));
    }
    if (!email) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, email: true }));
    }
    if (!password) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, password: true }));
    }
    if (!confirm_password || confirm_password !== password) {
      validForm = false;
      setErrors((prevState) => ({ ...prevState, confirm_password: true }));
    }
    if (validForm) {
      create(formData)
        .then((data) => {
          setAlertInfo({
            title: "Success",
            subtitle: "User created succesfully",
            type: "error",
            show: true,
          });
          navigate("/login");
        })
        .catch((err) =>
          setAlertInfo({
            title: "Error",
            subtitle: err.message,
            type: "error",
            show: true,
          })
        );
    }
  };
  return (
    <Box>
      <Container component="main" maxWidth="sm">
        <Box height="100vh" display="flex" alignItems="center">
          <Box m="auto">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h2" align="center">
                  Sign-Up
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoFocus
                  error={errors["name"]}
                  helperText={errors["name"] && "Name should not be blank"}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  error={errors["username"]}
                  helperText={
                    errors["username"] && "Username should not be blank"
                  }
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-Mail"
                  name="email"
                  autoFocus
                  error={errors["email"]}
                  helperText={errors["email"] && "E-Mail should not be blank"}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
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
                  error={errors["password"]}
                  helperText={
                    errors["password"] && "Password should not be blank"
                  }
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="current-password"
                  error={errors["confirm_password"]}
                  helperText={
                    errors["confirm_password"] &&
                    "Confirm password should not be blank and it should match password"
                  }
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      confirm_password: e.target.value,
                    }))
                  }
                />
                <Box textAlign="center" sx={{ mb: 4 }}>
                  <Link style={{ color: "inherit" }} to="/login">
                    Already have an Account
                  </Link>
                </Box>
                <Box textAlign="center">
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    size="large"
                  >
                    Sign-Up
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
