import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

interface IDonorProps {
  data: [];
}

const Donors: React.FC<IDonorProps> = ({ data }) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack align={"center"}>
          <Heading>Our Donors</Heading>
          <Text>We have been getting support from people around the world</Text>
        </Stack>
        {data.length > 0 &&
          data.map((donor: any) => {
            const { message } = donor.fields;
            return (
              <Box
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"lg"}
                p={8}
                rounded={"xl"}
                key={donor.sys.id}
              >
                <Text
                  align={"center"}
                  textAlign={"center"}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={"sm"}
                >
                  {message}
                </Text>
              </Box>
            );
          })}
      </Container>
    </Box>
  );
};

export default Donors;
