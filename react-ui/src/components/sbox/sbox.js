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

import logo from "../../assets/img/logo-signup.jpg";

const SBOX = () => {
    return (<>

        <Box p={5} display="flex" justifyContent="center">
            <Box >
                <Box >
                    <Image
                        src={logo}
                        alt="youth man image"
                        width="220px" height="220px"
                    />
                </Box>
                <Box py={{ base: 5, sm: 5 }}>
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
    </>)
}

export default SBOX;