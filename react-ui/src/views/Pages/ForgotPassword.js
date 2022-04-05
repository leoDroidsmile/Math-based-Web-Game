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
  InputGroup,
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

function ForgotPassword() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const history = useHistory();
  const { setUser } = useAuth();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Send password reset email");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const forgotPassword = async (event) => {
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
    setButtonText("Sending...");
    try {
      let response = await AuthApi.ForgotPassword({
        email,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Reset Password");
        return setError(response.data.msg);
      }
      setButtonText("Reset Password");
      return setError(response.data.msg);
    } catch (err) {
      console.log(err);
      setButtonText("Send password reset email");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
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
                      <h1>Reset your password</h1>
                    </div>

                    <FormControl id="password" style={{ marginTop: "10px" }}>
                      <InputGroup borderColor="#E0E1E7">
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
                          onKeyPress={(e) => e.key === 'Enter' && forgotPassword()}
                          onChange={(event) => {
                            setEmail(event.target.value);
                            setError(undefined);
                          }}
                        />
                      </InputGroup>
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
                      ml="15px"
                      _hover={{
                        bg: "teal.200",
                      }}
                      _active={{
                        bg: "teal.400",
                      }}
                      borderRadius="10px"
                      onClick={forgotPassword}
                      style={{ backgroundColor: '#00bcef' }}
                    >
                      {buttonText}
                    </Button>

                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      maxW="100%"
                      mt="0px"
                    >
                    </Flex>
                  </FormControl>
                </div>
              }
            </Flex>
          </Flex>

        </GridItem>
      </Grid>
    </Container >
  );
}

export default ForgotPassword;
