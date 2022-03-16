import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalytics, IoHome, IoPeople } from "react-icons/io5";
import { ReactElement } from "react";

interface ChallengesProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Challenges = ({ text, icon, iconBg }: ChallengesProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Flex bg={"lightGrey"}>
      <Container maxW={"5xl"} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Challenges
            </Text>
            <Heading>
              What are the challenges for children growing up in conflict in
              Ukraine?
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Many children in Ukraine have already witnessed or experienced
              acts of violence over eight years of conflict.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Challenges
                icon={<Icon as={IoHome} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={
                  "At least 1.5 million people has been forced from their homes"
                }
              />
              <Challenges
                icon={<Icon as={IoPeople} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={
                  "Over 400,000 children currently live in the conflict zone"
                }
              />
              <Challenges
                icon={
                  <Icon as={IoAnalytics} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={
                  "Child poverty rates are up more than 57% in some regions of Ukraine"
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"Challenges image"}
              src={"../img/ukraine-child.jpg"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
