import {
  Container,
  Flex,
  Spacer,
  Box,
  IconButton,
  Image,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import logo from "../../assets/img/logo-signup.jpg";
import AuthApi from "../../api/auth";

import avatar1 from "../../assets/img/signup/1.PNG";
import avatar2 from "../../assets/img/signup/2.png";
import avatar3 from "../../assets/img/signup/3.png";
import avatar4 from "../../assets/img/signup/4.png";
import avatar5 from "../../assets/img/signup/5.png";
import avatar6 from "../../assets/img/signup/6.png";
import avatar7 from "../../assets/img/signup/7.png";

import SurveyCard from 'components/surveyCard';
import { column } from 'stylis';

export default function SignUp() {
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [classs, setClasss] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [error, setError] = useState(undefined);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstname === "") {
      return setError("You must enter your first name.");
    }
    if (lastname === "") {
      return setError("You must enter your last name.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (school === "") {
      return setError("You must enter your school.");
    }
    if (classs === "") {
      return setError("You must enter your class");
    }
    if (username === "") {
      return setError("You must enter your user name");
    }
    if (password === "") {
      return setError("You must enter a password");
    }
    if (rPassword === "") {
      return setError("You must enter a password again");
    }
    if (password !== rPassword) {
      return setError("Password is incorrect. Please enter again.");
    }
    try {
      let response = await AuthApi.Register({
        firstname,
        lastname,
        email,
        school,
        classs,
        username,
        password,
      });
      console.log(response.data);
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      return history.push("/auth/signin");
    } catch (err) {
      console.log(err);
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  }
  return (
    <Container bg="#64cce4" maxW="full" >
      <Flex >
        <Box style={{ borderRadius: "35px", marginTop: "120px", marginBottom: "30px", paddingLeft: "8%", width: "100%" }}>
          <Wrap spacing={{ base: 0, sm: 3, md: 5, lg: 0 }}>
            <WrapItem bg="#f27924" borderRadius="35px 0 0 35px" color="white" >
              <Box p={10}>
                <Box>
                  <Box alignItems="center">
                    <Image
                      src={logo}
                      alt="youth man image"
                      width="220px" height="220px"
                    />
                  </Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Heading width="220px">
                        A Revolution In Learning Accounting!
                      </Heading>
                      <Text width="220px" fontSize="xs">
                        You've just been hired as a junior accountant at ACC Partners. Your first client is up-and coming DJ "Moe Money".
                      </Text>
                      <Text width="220px" fontSize="xs">
                        Start your virtual co-op experience today and learn Intro to accounting on your own time.
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="white" borderRadius="0 35px 35px 0" style={{ width: "58vw" }} >
                <Wrap minW="full" maxW="full">
                  <Flex flexDirection="row" align={'center'}>
                    <WrapItem minW="26vw" color="gray.500" >
                      <Flex flexDirection="column" justify={'center'} align={'center'} w="100%" style={{ "padding": "50px" }}>
                        <Stack spacing={5} minH={'70vh'} style={{ width: "100%" }} justify={'center'} align={'center'}>
                          <Heading fontSize="24px" mb="30px">Create Your Account</Heading>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              {/* <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            /> */}
                              <Input type="text" size="sm" placeholder="First Name" borderRadius="10px" onChange={(event) => {
                                setFirstName(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Last Name" borderRadius="10px" onChange={(event) => {
                                setLastName(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Email Address" borderRadius="10px" onChange={(event) => {
                                setEmail(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="School" borderRadius="10px" onChange={(event) => {
                                setSchool(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Class#" borderRadius="10px" onChange={(event) => {
                                setClasss(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Choose a Username" borderRadius="10px" onChange={(event) => {
                                setUsername(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Set Password" borderRadius="10px" onChange={(event) => {
                                setPassword(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" style={{ marginTop: "10px" }}>
                            <InputGroup borderColor="#E0E1E7">
                              <Input type="text" size="sm" placeholder="Verify Password" borderRadius="10px" onChange={(event) => {
                                setRPassword(event.target.value);
                                setError(undefined);
                              }} />
                            </InputGroup>

                          </FormControl>
                        </Stack>
                      </Flex>
                    </WrapItem>
                    <WrapItem minW="36vw" color="gray.500">
                      <Spacer />
                      <Flex flexDirection="column" justify={'center'} alignItems={'center'} style={{ "padding": "10px", "marginRight": "220px" }}>
                        <Stack spacing={5} minH={'70vh'} justify={'center'} align={'center'}>
                          <Heading fontSize="18px" color="gray.400">Select your Avatar</Heading>
                          <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                            <SurveyCard img={avatar1} id="1" />
                            <SurveyCard img={avatar2} id="2" />
                            <SurveyCard img={avatar3} id="3" />
                            <SurveyCard img={avatar4} id="4" />
                            <SurveyCard img={avatar5} id="5" />
                            <SurveyCard img={avatar6} id="6" />
                            <SurveyCard img={avatar7} id="7" />
                          </Grid>
                          <FormControl id="name" float="right">
                            <h4
                              style={{
                                fontSize: ".9em",
                                color: "red",
                                textAlign: "center",
                                fontWeight: 400,
                                transition: ".2s all",
                                marginBottom: '1em'
                              }}
                            >
                              {error}
                            </h4>
                            <Button
                              size="sm"
                              variant="solid"
                              bg="#00bcef"
                              color="white"
                              _hover={{}}
                              maxW="full"
                              minW="full"
                              borderRadius="10px"
                              onClick={register}
                            >
                              Create My Account
                            </Button>
                          </FormControl>
                        </Stack>
                      </Flex >
                    </WrapItem>
                  </Flex>
                </Wrap>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </Container>
  );
}