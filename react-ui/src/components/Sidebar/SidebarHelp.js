import { QuestionIcon } from "@chakra-ui/icons";
import { Container, Stack, Box, Button, FormControl, Flex, Link, Text, Image } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import LogoImage from "assets/img/6.PNG";
import IconBox from "components/Icons/IconBox";
import React from "react";

import logo1 from "assets/img/6.jpg";
import logo2 from "assets/img/7.PNG";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop

  return (
    <div>
      <Image
        src={logo1}
        alt="logo1 image"
        width="180px" height="135px"
        style={{ marginLeft: "20px", marginTop: "30px", marginBottom: "30px" }}
      />
      <Image
        src={logo2}
        alt="logo2 image"
        width="80px" height="80px"
        style={{ marginLeft: "75px" }}
      />
      <Text fontSize="large" fontWeight="bold" color="gray.800" textAlign="center" width="60%" marginLeft="45px;">
        You Have 2 Pending Tasks
      </Text>
      <FormControl>
        <Text style={{ textAlign: "center", padding: "10px", fontSize: 15 }}>Quick View</Text>
        <Stack direction='column' spacing={4}>
          <Button colorScheme='orange' variant='solid' width="100%;" size="sm" >
            Voicemail
          </Button>
          <Button colorScheme='orange' variant='solid' width="100%;" size="sm" >
            Text Messages
          </Button>
          <Button colorScheme='purple' backgroundColor="blue.300" color="whiteAlpha.900" variant='solid' width="100%;" size="sm" >
            Calculator
          </Button>
          <Button colorScheme='purple' backgroundColor="blue.500" color="whiteAlpha.900" variant='solid' width="100%;" size="sm">
            Progress Report
          </Button>
          <Button colorScheme='purple' backgroundColor="blue.300" color="whiteAlpha.900" variant='solid' width="100%;" size="sm" >
            Sim Score
          </Button>
          <br />
          <Button colorScheme='blackAlpha' color="whiteAlpha.900" width="100%;" size="sm" >
            Return To DeskTop
          </Button>
        </Stack>
      </FormControl>
    </div>
  );
}
