// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  FormControl,
  Stack,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import oldMan from "assets/img/1.PNG";
import oldWoman from "assets/img/2.PNG";
import Man from "assets/img/3.PNG";
import Woman from "assets/img/4.PNG";
import youthMan from "assets/img/5.PNG";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ReadMoreText from "components/Card/ReadMoreText.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight, BsCardImage } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
import { CardComponent } from "theme/additions/card/Card";

export default function Dashboard() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.400", "white");
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);
  const overlayRef = React.useRef();

  return (
   <Box w="100%" h="100%" backgroundColor="gray.200" padding="5" >
   <FormControl>
      <Stack direction='row' spacing={4} style={{position: "absolute", right: "0" }}>
        <Button colorScheme='telegram' backgroundColor="blue.200" variant='solid' width="100px;"  size="sm" >
          Settings
        </Button>
        <Button colorScheme='telegram' backgroundColor="blue.400" variant='solid' width="100px;"  size="sm" >
          Menu
        </Button>
        </Stack>
        </FormControl>
    <Flex flexDirection="column" pt={{ base: "100px", md: "35px" }}>
   
      <SimpleGrid columns={{ sm: 2, md: 2, xl: 2 }} spacing="24px">
      
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px">
          <Stat me="auto">
              <StatLabel
                fontSize="lg"
                color="gray.600"
                fontWeight="bold"
                marginLeft="20px;"
              >
                New Emails
              </StatLabel>
            </Stat>
          <Card minH="83px" minWidth="100px" >
            <CardBody>
              <Flex flexDirection="row" align="center" justify="center" w="100%">
                <Stat me="auto">
                  <StatLabel
                    fontSize="sm"
                    color="#1ac6ff"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Bank Manager
                  </StatLabel>
                  <Flex style={{ marginTop: "10px"}}>
                    <StatNumber >
                      <ReadMoreText text="Just Following up on my voicemail regarding the Aritcles of Incorporation for your client. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."/>
                    </StatNumber>
                  </Flex>
                </Stat>               
              </Flex>   
              <Image
                    src={oldMan}
                    alt="old man image"
                    width="100px" height="120px"
                    style={{ position: "absolute" , bottom: "0", right: "0"}}
                  />
            </CardBody>
           
         </Card>
        <Card minH="83px" minWidth="100px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="#1ac6ff"
                  fontWeight="bold"
                >
                  PR Coordinator
                </StatLabel>
                <Flex style={{ marginTop: "10px"}}>
                  <StatNumber fontSize="sm" color={textColor} paddingRight="20%" >
                  <ReadMoreText text=" Word on the street is that tonight's show will be yur hightest grossing show yet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."/>
                   
                  </StatNumber>
                 </Flex>
              </Stat>
              <Image
                    src={oldWoman}
                    alt="old woman image"
                    width="100px" height="120px"
                    style={{ position: "absolute" , bottom: "0", right: "0"}}
                  />
            </Flex>
          </CardBody>
        </Card>
        <Stat me="auto">
              <StatLabel
                fontSize="lg"
                color="gray.600"
                fontWeight="bold"
                marginLeft="20px;"
              >
                Recent Emails
              </StatLabel>
            </Stat>
          <Card minH="83px" minWidth="100px">
            <CardBody>
              <Flex flexDirection="row" align="center" justify="center" w="100%">
                <Stat me="auto">
                  <StatLabel
                    fontSize="sm"
                    color="#1ac6ff"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Merch Manager
                  </StatLabel>
                  <Flex style={{ marginTop: "10px"}}>
                    <StatNumber fontSize="sm"  color={textColor} paddingRight="20%">
                    <ReadMoreText text="Hey Mate, bad news. Some of the merch from the truck was stolen at last night's gig. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."/>
                      
                    </StatNumber>
                  </Flex>
                </Stat>
                <Image
                    src={Man}
                    alt="chakra image"
                    width="100px" height="120px"
                    style={{ position: "absolute" , bottom: "0", right: "0"}}
                  />
              </Flex>
            
            </CardBody>
         </Card>
        <Card minH="83px" minWidth="100px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="#1ac6ff"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Agent
                </StatLabel>
                <Flex style={{ marginTop: "10px"}}>
                  <StatNumber fontSize="sm" color={textColor} paddingRight="20%" variant="solid">
                  <ReadMoreText text=" Hey: Good news about last nights gig. We booked again tonight on your day off. No costs for gear setup and 1/2 price venue rental! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."/>
                   
                  </StatNumber>
                 
                </Flex>
              </Stat>
              <Image
                    src={Woman}
                    alt="chakra image"
                    width="100px" height="120px"
                    style={{ position: "absolute" , bottom: "0", right: "0"}}
                  />
            </Flex>
          </CardBody>
        </Card>
        
        </SimpleGrid>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px">
        <Stat me="auto">
              <StatLabel
                fontSize="lg"
                color="gray.600"
                fontWeight="bold"
                marginLeft="20px;"
              >
                Your Status
              </StatLabel>
            </Stat>
          <Card minH="auto" backgroundColor="green.200">
            <CardBody>
              <Flex flexDirection="row" align="center" justify="center" w="100%">
                <Stat me="auto">
                  <StatLabel
                    fontSize="sm"
                    color="whiteAlpha.900"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Congratulations Kyle!
                  </StatLabel>
                  <Flex style={{ marginTop: "10px"}}>
                    <StatNumber fontSize="smaller" fontWeight="100" variant='solid' color="whiteAlpha.900" paddingRight="20%">
                     So fa so good. Keep up the good work. With only 4 more months to go you' re proving you can handle anything thrown at you!
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>                
              <Image
                    src={youthMan}
                    alt="chakra image"
                    width="100px" height="120px"
                    style={{ position: "absolute" , bottom: "0", right: "0"}}
                  />
            </CardBody>
          </Card>
          
          <Card minH="83px" minWidth="100px">
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Year Snapshot
              </Text>
              <Text fontSize="smaller" fontWeight="medium" color="gray.400">
                Monthly Revenue (in 1,000s)
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
          <Text fontSize="small" fontWeight="bold" color="blue.400"><a style={{ color: "black" }}>View</a>: Revenue | Expenses | Loans | Capital | Net income</Text>
          </Card>
        
        </SimpleGrid>
      </SimpleGrid>
          </Flex>
    </Box>
  );
}
