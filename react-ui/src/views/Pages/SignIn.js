import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  Image,
  Grid,
  GridItem,
  useColorModeValue,
  Container
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/SidebarHelpImage.png";

import '../../assets/css/SignIn.css';

import { useAuth } from "../../auth-context/auth.context";
import AuthApi from "../../api/auth";
import SBOX from '../../components/sbox/sbox';

import { NavLink, useHistory } from "react-router-dom";
import logo1 from "assets/img/6.jpg";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const history = useHistory();
  const { setUser } = useAuth();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return history.push("/dashboard");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (!validateEmail(email)) {
      return setError("Email is not valid");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    setButtonText("Signing in");
    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign in");
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const setProfile = async (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    setUser(user);
    localStorage.setItem("user", user);
    return history.push("/dashboard");
  };

  return (
    <Container bg="#64cce4" maxW="full" minH="100vh" overflow="hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid
        templateColumns='repeat(3, 1fr)'
        style={{ width: '990px' }}
      >
        <GridItem colSpan={1} bg="#f27924" borderRadius="35px 0 0 35px" color="white" >
          <SBOX />
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius="0 35px 35px 0" >

          <Flex
            h={{ sm: "initial" }}
            w="100%"
            mx="auto"
            justifyContent="center"
            mb="30px"
            pt={{ sm: "100px" }}
            style={{ height: '600px' }}
          >

            <Flex
              alignItems="center"
              justifyContent="end"
              w={{ base: "100%" }}
              style={{ display: 'flex', justifyContent: 'center', userSelect: "none" }}
              mb='50px'
            >
              {user && user.token ?
                <div>
                  <Heading color={titleColor} fontSize="32px" mt="10px" mb="10px">
                    Welcome Back
                  </Heading>
                  <h3 style={{ textAlign: "center" }}>You are already signed in.</h3>
                  <Button
                    fontSize="15px"
                    type="submit"
                    bg="teal.300"
                    w="100%"
                    h="45"
                    mb="20px"
                    color="white"
                    mt="20px"
                    _hover={{
                      bg: "teal.200",
                    }}
                    _active={{
                      bg: "teal.400",
                    }}
                    onClick={login}>
                    {`Let's go`}
                  </Button>
                </div>
                :
                <div
                  direction="column"
                  background="transparent"
                  p="5px"
                  style={{}}

                >

                  <FormControl style={{ color: '#718096' }}>
                    <div style={{ width: '100%', textAlign: 'center', fontSize: '25px', marginBottom: '40px', fontWeight: 'bold' }}>
                      <h1>Login To Your Account</h1>
                    </div>

                    <Input
                      borderColor="gray.500" color="gray.700"
                      borderRadius="10px"
                      mb="24px"
                      fontSize="sm"
                      type="text"
                      placeholder="Your email address"
                      size="md"
                      defaultValue={email}
                      id="uEmail"
                      onKeyPress={(e) => e.key === 'Enter' && login()}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setError(undefined);
                      }}
                    />
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    </FormLabel>
                    <Input
                      borderColor="gray.500" color="gray.700"
                      borderRadius="10px"
                      mb="24px"
                      fontSize="sm"
                      type="password"
                      id="uPassword"
                      placeholder="Your password"
                      size="md"
                      defaultValue={password}
                      onKeyPress={(e) => e.key === 'Enter' && login()}
                      onChange={(event) => {
                        setPassword(event.target.value);
                        setError(undefined);
                      }}
                    />

                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    </FormLabel>

                    <FormControl display="flex" alignItems="center">
                      <Switch id="remember-login" colorScheme="teal" me="10px" />
                      <FormLabel
                        htmlFor="remember-login"
                        mb="1"
                        ms="1"
                        fontWeight="normal"
                      >
                        Remember me
                        <NavLink to="/auth/forgot-password" style={{ marginLeft: "10px", color: '#4da6ff', fontSize: "14px" }}>
                          Forgot Password?
                        </NavLink>

                      </FormLabel>

                    </FormControl>
                    <h4
                      style={{
                        fontSize: ".9em",
                        color: "red",
                        textAlign: "center",
                        fontWeight: 400,
                        transition: ".2s all",
                      }}
                    >
                      {error}
                    </h4>
                    <Button
                      size="sm"
                      type="submit"
                      bg="teal.300"
                      w="90%"
                      mb="20px"
                      color="white"
                      mt="20px"
                      ml="20px"
                      _hover={{
                        bg: "teal.200",
                      }}
                      _active={{
                        bg: "teal.400",
                      }}
                      borderRadius="10px"
                      onClick={login}
                      style={{ backgroundColor: '#00bcef' }}
                    >
                      {buttonText}
                    </Button>
                  </FormControl>
                  <Box color="gray.600" style={{ display: "flex", justifyContent: "center" }}>
                    Don't have an account?{" "}
                    <NavLink to="/auth/signup" style={{ marginLeft: "10px", color: '#4da6ff' }}>
                      Sign up
                    </NavLink>
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    maxW="100%"
                    mt="0px"
                  >
                  </Flex>
                </div>
              }
            </Flex>
          </Flex>

        </GridItem>
      </Grid>
    </Container >
  );
}

export default SignIn;
