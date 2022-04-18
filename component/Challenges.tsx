import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

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

interface ISplitWithImage {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  lists?: object[];
  aboutBtnLabel?: string;
  logo?: { url: string; src: string };
}

const SplitWithImage: React.FC<ISplitWithImage> = ({
  title,
  subTitle,
  image,
  description,
  lists,
  aboutBtnLabel,
  logo,
}) => {
  const { t } = useTranslation();
  return (
    <Flex>
      <Container maxW={"5xl"} py={[10, 20]}>
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
              {subTitle}
            </Text>
            {logo && (
              <ChakraLink href={logo?.url || ""} target="_blank">
                <Image src={logo?.src} alt="Logo" height="125" />
              </ChakraLink>
            )}
            <Heading>{title}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              {description}
            </Text>
            {lists && (
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                {lists.map((list: any) => {
                  return (
                    <Challenges
                      key={list.id}
                      icon={
                        <Icon
                          as={list.icon}
                          color={`${list.color}.500`}
                          w={5}
                          h={5}
                        />
                      }
                      iconBg={useColorModeValue(
                        `${list.color}.100`,
                        `${list.color}.900`
                      )}
                      text={t(list.challenge)}
                    />
                  );
                })}
              </Stack>
            )}
            {aboutBtnLabel && (
              <Stack direction={"row"}>
                <Link href={"/about"}>
                  <Button
                    colorScheme={"blue"}
                    size={"lg"}
                    bg={"primary"}
                    rounded={"full"}
                    _hover={{
                      bg: "blue.700",
                    }}
                  >
                    {aboutBtnLabel}
                  </Button>
                </Link>
              </Stack>
            )}
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"Image"}
              src={image}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default SplitWithImage;
