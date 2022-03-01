import {
  Container,
  Flex,
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
  Center,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import logo from "../../assets/img/logo-signup.jpg";

export default function SignUp() {
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
                            <Input type="text" size="sm" placeholder="First Name" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Last Name" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Email Address" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="School" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Class#" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Choose a Username" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Set Password" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" style={{ marginTop: "10px" }}>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="sm" placeholder="Verify Password" borderRadius="10px" />
                          </InputGroup>
                        </FormControl>
                      </Stack>
                    </Flex>
                  </WrapItem>
                  <WrapItem minW="26vw" color="gray.500">
                    <Flex flexDirection="column" justify={'center'} align={'center'} w="100%" style={{ "padding": "50px" }}>
                      <Stack spacing={5} minH={'70vh'} style={{ width: "100%" }} justify={'center'} align={'center'}>
                        <Heading fontSize="18px" color="gray.400">Select your Avatar</Heading>
                        <Box alignItems="center">
                          <Image
                            src={logo}
                            width="100px" height="100px"
                          />
                        </Box>
                        <FormControl id="name" float="right">
                          <Button
                            size="sm"
                            variant="solid"
                            bg="#00bcef"
                            color="white"
                            _hover={{}}
                            maxW="full"
                            minW="full"
                            borderRadius="10px">
                            Create My Account
                          </Button>
                        </FormControl>
                      </Stack>
                    </Flex >
                  </WrapItem>
                </Wrap>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </Container>
  );
}