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
import { NavLink, useHistory } from "react-router-dom";
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import AuthApi from "../../api/auth";

import avatar1 from "../../assets/img/signup/1.PNG";
import avatar2 from "../../assets/img/signup/2.png";
import avatar3 from "../../assets/img/signup/3.png";
import avatar4 from "../../assets/img/signup/4.png";
import avatar5 from "../../assets/img/signup/5.png";
import avatar6 from "../../assets/img/signup/6.png";
import avatar7 from "../../assets/img/signup/7.png";
import '../../assets/css/SignUp.css';
import SBOX from '../../components/sbox/sbox';
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
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(undefined);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

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
    if (!validateEmail(email)) {
      return setError("Email is not valid");
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
    if (avatar === "") {
      return setError("avatar is not selected. Please click again.");
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
        avatar
      });
      console.log(response.data);
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      setError("Email Verifying...");
      // return history.push("/auth/signin");
    } catch (err) {
      console.log(err);
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  }
  return (
    <Container bg="#64cce4" maxW="full" minH="100vh" overflow="hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Flex justifyContent='center'>
        <Box style={{ borderRadius: "35px", marginTop: "50px", marginBottom: "30px" }} className='big_box'>
          <Grid
            templateColumns='repeat(3, 1fr)'
            style={{ width: '990px' }}
          >
            <GridItem colSpan={1} bg="#f27924" borderRadius="35px 0 0 35px" color="white" >
              <SBOX />
            </GridItem>
            <GridItem colSpan={2} className='grid_1'>
              <Box bg="white" borderRadius="0 35px 35px 0" style={{ width: "100%", height: "100%" }} >

                <Grid
                  templateColumns='repeat(2, 1fr)'
                  gap={2} p={10}>
                  <GridItem colSpan={1} color="gray.500" p={5} className='grid_item1'>
                    <Flex flexDirection="column" justify={'center'} align={'center'} className='flex_1'>
                      <Stack spacing={5} minH={'70vh'} style={{ width: "100%" }} justify={'center'} align={'center'} className='stack_1'>
                        <div style={{ width: '100%', textAlign: 'center', fontSize: '20px', marginBottom: '5px', fontWeight: 'bold' }}>
                          <h1>Create Your Account</h1>
                        </div>
                        <FormControl id="firstname">
                          <InputGroup>
                            <Input type="text" borderColor="gray.500" color="gray.700" size="sm" placeholder="First Name" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setFirstName(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="lastname">
                          <InputGroup>
                            <Input type="text" borderColor="gray.500" color="gray.700" size="sm" placeholder="Last Name" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setLastName(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="emailaddress">
                          <InputGroup>
                            <Input type="email" borderColor="gray.500" color="gray.700" size="sm" placeholder="Email Address" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setEmail(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="school">
                          <InputGroup>
                            <Input type="text" borderColor="gray.500" color="gray.700" size="sm" placeholder="School" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setSchool(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="classs">
                          <InputGroup>
                            <Input type="text" borderColor="gray.500" color="gray.700" size="sm" placeholder="Class#" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setClasss(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="username">
                          <InputGroup>
                            <Input type="text" borderColor="gray.500" color="gray.700" size="sm" placeholder="Choose a Username" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setUsername(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="password">
                          <InputGroup>
                            <Input type="password" borderColor="gray.500" color="gray.700" size="sm" placeholder="Set Password" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setPassword(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="rpassword">
                          <InputGroup>
                            <Input type="password" borderColor="gray.500" color="gray.700" size="sm" placeholder="Verify Password" onKeyPress={(e) => e.key === 'Enter' && register()} onChange={(event) => {
                              setRPassword(event.target.value);
                              setError(undefined);
                            }} />
                          </InputGroup>
                          <h4
                            style={{
                              fontSize: ".9em",
                              color: "red",
                              textAlign: "center",
                              fontWeight: 400,
                              transition: ".2s all",
                              marginTop: "1em",
                              height: "1em"
                            }}
                          >
                            {error}
                          </h4>
                        </FormControl>
                      </Stack>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={1} color="gray.500" p={5} >
                    <Flex justify={'center'} align={'center'}  >
                      <Stack minH={'70vh'} style={{ width: "100%" }} justify={'center'} align={'center'}>
                        <h1 style={{ fontSize: "13px" }}>Select your Avatar</h1>
                        <Grid templateColumns='repeat(3, 1fr)' onChange={(e) => { setAvatar(e.target.nextSibling.src); setError(undefined); }} >
                          <SurveyCard img={avatar1} id="1" />
                          <SurveyCard img={avatar2} id="2" />
                          <SurveyCard img={avatar3} id="3" />
                          <SurveyCard img={avatar4} id="4" />
                          <SurveyCard img={avatar5} id="5" />
                          <SurveyCard img={avatar6} id="6" />
                          <SurveyCard img={avatar7} id="7" />
                          {/* </div> */}
                        </Grid>
                        <FormControl id="name" float="right">
                          <Button
                            size="sm"
                            variant="solid"
                            bg="#00bcef"
                            color="white"
                            _hover={{}}
                            maxW="full"
                            minW="full"

                            onClick={register}
                            marginTop='1em'
                          >
                            Create My Account
                          </Button>
                        </FormControl>
                        <Box color="gray.600" style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap' }}>
                          Already have an account? {" "}
                          <NavLink to="/auth/signin" style={{ marginLeft: "10px", color: '#4da6ff' }}>
                            Sign in
                          </NavLink>
                        </Box>
                      </Stack>
                    </Flex >
                  </GridItem>
                </Grid>

              </Box>
            </GridItem>
          </Grid>
          {/* </Wrap> */}
        </Box>
      </Flex>
    </Container >
  );
}