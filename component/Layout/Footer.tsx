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
              href="mailto:info@globalpreschool.cz"
            >
              info@globalpreschool.cz
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
        </Wrap>
      </Container>

      <Container
        as={Stack}
        maxW={"6xl"}
        pt={10}
        pb={5}
        direction={"row"}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"blue"}
            size={"lg"}
            bg={"primary"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.700",
            }}
          >
            <Link href={"/donate"}>Donate Now</Link>
          </Button>
          <Button variant={"link"} color={"veryDark"} size={"sm"}>
            <Link href={"/about"}>Learn more about us</Link>
          </Button>
          <Box>
            <Icon
              as={Arrow}
              color={"veryDark"}
              w={71}
              position={"absolute"}
              right={-66}
              top={"10px"}
              transform={"rotateY(180deg) rotate(30deg)"}
            />
            <Text
              fontSize={"lg"}
              fontFamily={"Caveat"}
              position={"absolute"}
              right={["-105px", "-145px", "-180px"]}
              top={["-25px", "-26px", "-15px"]}
              transform={"rotate(10deg)"}
              color={"veryDark"}
            >
              To Ukraine's Children
            </Text>
          </Box>
        </Stack>
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

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
