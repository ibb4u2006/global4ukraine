import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link as ChakraLink,
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
import { useTranslation } from "next-i18next";
import { MENU } from "../../data/header";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import Link from "next/link";

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
  const { t } = useTranslation();
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
        <Heading>{t("common:footer-title")}</Heading>
        <Text fontSize={"lg"}>{t("common:footer-description")}</Text>
        <Stack direction={"row"} spacing={6} alignItems="center">
          {MENU.map((menu) => {
            return (
              <Link key={menu.id} href={menu.to}>
                {t(menu.label)}
              </Link>
            );
          })}
        </Stack>
        <Stack direction={"row"} spacing={6} alignItems="center">
          <LocaleSwitcher />
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
              {t("common:open-hours-title")}
            </Heading>
            <Text fontSize="md">{t("common:open-hours-description")}</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:address-title")}
            </Heading>
            <Text fontSize="md">{t("common:address-description")}</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:transport-title")}
            </Heading>
            <Text fontSize="md">312, 161</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:tel-en")}
            </Heading>
            <Text fontSize="md">+420 739315551 🇺🇸</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:tel-cz")}
            </Heading>
            <Text fontSize="md">+420 737 416 831 🇨🇿</Text>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:tel-ukr")}
            </Heading>
            <Text fontSize="md">+420 608 239 354 🇺🇦</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:email")}
            </Heading>
            <Link href="mailto:info@globalconcepts.cz">
              <Button
                variant="link"
                fontWeight="light"
                color="blue.600"
                fontSize="lg"
                mt={1}
              >
                info@globalconcepts.cz
              </Button>
            </Link>
            <br />
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:website")}
            </Heading>
            <ChakraLink href="https://globalpreschool.cz" target="_blank">
              <Button
                variant="link"
                fontWeight="light"
                color="blue.600"
                fontSize="lg"
                mt={1}
              >
                www.globalpreschool.cz
              </Button>
            </ChakraLink>
          </WrapItem>
          <WrapItem flexDirection={"column"}>
            <Heading size={"sm"} color="veryDark" fontSize={"sm"}>
              {t("common:map")}
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
        arrowText={t("common:button-arrow")}
        label={t("common:donate-button")}
        labelUrl="/donate"
        subLabel={t("common:about-button")}
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
          <Text>{t("common:copyright")}</Text>
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
