import { ReactNode } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const DONORS = [
  {
    id: 0,
    message:
      "I have just donated to support Global for Ukraine to deliver essential humanitarian aid to Ukraine's children.",
  },
];

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Donors</Heading>
          <Text>We have been getting support from people around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {DONORS.length > 1 &&
            DONORS.map((donor, index) => {
              return (
                <Testimonial key={index}>
                  <TestimonialContent>
                    <TestimonialText>{donor.message}</TestimonialText>
                  </TestimonialContent>
                </Testimonial>
              );
            })}
        </Stack>
      </Container>
    </Box>
  );
}
