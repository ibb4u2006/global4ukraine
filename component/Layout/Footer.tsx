import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target="_blank"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading>How to enrol</Heading>
        <Text fontSize={"lg"}>
          Contact us using any of the information below for enrolment
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/donate"}>Donate</Link>
        </Stack>
      </Container>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Wrap spacing={[6, 16, 14]} justify="center">
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Address
            </Heading>
            <Text fontSize="md">Nebušicka 6</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Tel (EN)
            </Heading>
            <Text fontSize="md">+420 739315551 🇺🇸</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Tel (CZ)
            </Heading>
            <Text fontSize="md">+420 737 416 831 🇨🇿</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Tel (UKR)
            </Heading>
            <Text fontSize="md">+420 608 239 354 🇺🇦</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Email
            </Heading>
            <Link
              fontSize="md"
              target="_blank"
              href="mailto:info@globalpreschool.cz"
            >
              info@globalpreschool.cz
            </Link>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Website
            </Heading>
            <Link
              fontSize="md"
              target="_blank"
              href="https://globalpreschool.cz"
            >
              www.globalpreschool.cz
            </Link>
          </WrapItem>
        </Wrap>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Global Concepts S.R.O. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Facebook"}
              href={"https://www.facebook.com/GlobalConceptsPrague"}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://m.youtube.com/channel/UClmAD4knSUpShGEsEDu5KOQ"}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={
                "https://instagram.com/globalpreschool?utm_medium=copy_link"
              }
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
