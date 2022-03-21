import {
  Box,
  Button,
  chakra,
  Container,
  createIcon,
  Heading,
  Icon,
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
import CTA from "../CTA";

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
        py={10}
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
          <Link href={"/about"}>About</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/donate"}>Donate</Link>
        </Stack>
      </Container>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={"center"}
      >
        <Wrap spacing={[6, 16, 14]} justify="center">
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Open Hours
            </Heading>
            <Text fontSize="md">8-3 pm (Kids centre)</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Address
            </Heading>
            <Text fontSize="md">
              Nebušická 75, <br />
              Nebušice, <br />
              164 00 Praha 6
            </Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Transport buses
            </Heading>
            <Text fontSize="md">312, 161</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Tel (EN)
            </Heading>
            <Text fontSize="md">+420 739315551 🇺🇸</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Tel (CZ)
            </Heading>
            <Text fontSize="md">+420 737 416 831 🇨🇿</Text>
            <br />
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
              href="mailto:info@globalconcepts.cz"
            >
              info@globalconcepts.cz
            </Link>
            <br />
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
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              Map
            </Heading>
            <Box py={3}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.658175894441!2d14.32460881601058!3d50.11140477943004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bbfed26c54d49%3A0xe8b868bd5d0fd090!2zTmVidcWhaWNrw6EgNzUsIDE2NCAwMCBQcmFoYS1OZWJ1xaFpY2U!5e0!3m2!1sen!2scz!4v1647554022172!5m2!1sen!2scz"
                width="340"
                height="250"
                loading="lazy"
              ></iframe>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>
      <CTA
        arrowText
        label="Donate Now"
        labelUrl="/donate"
        subLabel="Learn more about us"
        subLabelUrl="/about"
      />
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
