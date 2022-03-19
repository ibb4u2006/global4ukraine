import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface IDonorProps {
  data: [];
}

const Donors: React.FC<IDonorProps> = ({ data }) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Donors</Heading>
          <Text>We have been getting support from people around the world</Text>
        </Stack>
        <Wrap spacing={{ base: 10, md: 4, lg: 10 }}>
          {data.length > 1 &&
            data.map((donor: any) => {
              const { message } = donor.fields;
              return (
                <WrapItem
                  key={donor.sys.id}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"lg"}
                  p={8}
                  rounded={"xl"}
                  width={{ base: "100%", md: "45%", lg: "30%" }}
                >
                  <Text
                    align={"center"}
                    textAlign={"center"}
                    color={useColorModeValue("gray.600", "gray.400")}
                    fontSize={"sm"}
                  >
                    {message}
                  </Text>
                </WrapItem>
              );
            })}
        </Wrap>
      </Container>
    </Box>
  );
};

export default Donors;
