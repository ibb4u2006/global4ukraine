import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const FEATURES = [
  {
    id: 0,
    title:
      "Improve the social-emotional and physical development of refugee children.",
  },
  {
    id: 1,
    title:
      "Train, build the capacity, and employ refugee women, with the potential to scale-up.",
  },
  {
    id: 2,
    title:
      "Change the humanitarian refugee response from a top-down, one-size-fits-all model to customized, refugee-led programming focused on quality over quantity.",
  },
  {
    id: 3,
    title:
      "Influence Education Ministries, government and humanitarian agencies, such as UNICEF, to adopt or integrate components of our model.",
  },
  {
    id: 4,
    title:
      "Influence education ministries to change or develop stronger policy, mandated programming, and budget to include early childhood education in a crisis.",
  },
];

const features = FEATURES.map(function (feature, index) {
  return {
    id: index,
    title: feature.title,
  };
});

export default function GridListWithHeading() {
  return (
    <Box px={4} py={20}>
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"justify"}>
        <Heading fontSize={"3xl"}>About us</Heading>
        <Text color={"gray.600"} fontSize={"lg"}>
          We are a well established preschool in Prague, Czech Republic offering
          early childhood learning for young children from Ukraine. Most Czech
          preschools are full and cannot meet the demands of mothers who are
          seeking to find work. We saw an urgent need in the community and
          decided to step in and help.
          <br />
          <br /> We undertook this initiative with the help of some institutions
          and individuals in the Czech Republic and around the world. Our goal
          is to create a preschool environment, just like Global Concepts, to
          let these young children attend school and experience normalcy,
          especially, in these not so normal times.
          <br />
          <br /> Classes will be led by Ukrainian preschool teachers that fled
          the war, along with English clubs run by our own Global Preschool
          teachers. We will also introduce Czech Language once the children feel
          happy and safe in their new environment.
          <br />
          <br /> The provision of early childhood education (ECE) for refugees
          is extremely limited in the Czech Republic (took out next sentence
          here). While all refugee education is underfunded, ECE is particularly
          underfunded and under-supported.
          <br />
          <br />
          High-quality ECE can be a powerful avenue for helping young refugee
          children manage their trauma and for supporting their well-being in
          the short and long term. A wide body of evidence points to the
          transformative potential of ECE for young children, their families and
          their communities. For young refugee children who have experienced the
          trauma of conflict, displacement and separation from, or the loss of,
          family members or friends, ECE can support the healing process and
          cognitive, emotional and physical development.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <Box my={5}>
          <Heading size={"lg"}>What is the expected outcome?</Heading>
          <Text mt={2} fontSize="md">
            The expected outcomes of implementing a Global Preschool kids club
            in Prague includes
          </Text>
        </Box>
        <SimpleGrid columns={1} spacing={3}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontSize={"lg"}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <Box mt={10}>
          <Heading size={"lg"}>How you can help -</Heading>
          <Text mt={2} fontSize="md">
            Help contribute funds or supplies to our preschool for Ukrainian
            children so that we can support the day to day expenses and increase
            capacity. We are a private organisation and depend totally on
            private funding at the moment. We greatly appreciate your donations.
            All donations will go directly towards the operation of this crisis
            center for refugee children.
            <br />
            <br /> You can transfer funds directly to the following account -
            <br />
            UniCredit Bank
            <br /> IBAN: CZ15 2700 0000 0052 7697 4028
            <br /> Account number: 5276974028/2700
            <br /> Account owner: GLOBAL CONCEPTS
            <br /> Full financial transparency is available at all times.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
