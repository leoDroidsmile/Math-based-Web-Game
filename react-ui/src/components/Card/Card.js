import { Box, useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest} style={{ position: "relative", cursor: "pointer" }} _hover={{ boxShadow: "xl" }}>
      {children}
    </Box>
  );
}

export default Card;
