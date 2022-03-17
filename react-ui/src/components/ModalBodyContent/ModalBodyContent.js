import { Box, Flex, useStyleConfig, Image, Container, Grid, GridItem } from "@chakra-ui/react";
import ContractImg from "assets/img/Contract.JPG";
import { line } from "stylis";


function ModalContent(props) {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig("ModalContent", { variant });
    // Pass the computed styles into the `__css` prop
    return (
        <Box __css={styles} {...rest} >
            <Flex flexDirection="row" >
                <Box bg='#64CBE4' w="20%" h="80vh" borderRadius="50px 0 0 50px">
                    <div style={{ padding: "25%", fontSize: '20px', color: "white" }}>
                        <p>New Email</p>
                    </div>
                </Box>
                <Box w="80%">
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <GridItem h="80vh">
                            <Container flexDirection="row">
                                <Box padding='6' marginTop="4" display="flex" alignItems="center">
                                    <Image
                                        src={props.modalbodyImage}
                                        alt="old man image"
                                        width="100px" height="100px"
                                        style={{ borderRadius: "50%", backgroundColor: "grey" }}
                                    />
                                    <div style={{ marginLeft: "20px" }}>
                                        <p style={{ fontSize: "25px" }}> {props.modalbodyName} </p>
                                        <p style={{ fontSize: "20px" }}> {props.modalbodyEmail} </p>
                                    </div >
                                </Box>
                                <Box padding='6' display="flex" alignItems="center">
                                    <p>
                                        {props.modalbodyData.split('\n').map((line) => (
                                            <span>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </Box>
                            </Container>
                        </GridItem>
                        <GridItem display="flex" alignItems="center" h="80vh">
                            <Image src={ContractImg} alt="contract image" width="80%" ></Image>
                        </GridItem>
                    </Grid>
                    {/* <div style={{ padding: "10%" }}>
                        <Flex flexDirection="row">
                            <div>
                                <Image
                                    src={oldMan}
                                    alt="old man image"
                                    width="100px" height="100px"
                                    style={{ borderRadius: "50%", backgroundColor: "grey" }}
                                />
                            </div>
                            <div style={{ fontSize: "25px" }}>
                                <p>Peter Wilson</p>
                            </div>
                        </Flex>
                    </div> */}
                </Box>
            </Flex >
        </Box >
    );
}

export default ModalContent;