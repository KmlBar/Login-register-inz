import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  const resetState = () => {
    setisSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={10}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              value={Inputs.name}
              name="name"
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}

          <TextField
            onChange={handleChange}
            name="email"
            value={Inputs.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />

          <TextField
            onChange={handleChange}
            value={Inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={isSignup ? <AppRegistrationIcon /> : <LoginIcon />}
            type="Submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "SignUp" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 3, borderRadius: 3 }}>
            {isSignup ? "switch to Login" : " Switch do signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
