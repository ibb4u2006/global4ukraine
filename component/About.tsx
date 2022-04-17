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
import { useTranslation } from "next-i18next";

interface IGridListWithHeadingProps {
  title: string;
  paragraphs: { id: number; title: string }[];
  listTitle: string;
  listDescription: string;
  lists: { id: number; title: string }[];
  detailsTitle: string;
  detailsDescription: string;
  detailsList: { id: number; title: string }[];
}

const GridListWithHeading: React.FunctionComponent<
  IGridListWithHeadingProps
> = ({
  title,
  paragraphs,
  listTitle,
  listDescription,
  lists,
  detailsTitle,
  detailsDescription,
  detailsList,
}) => {
  const { t } = useTranslation();
  return (
    <Box px={4} py={20}>
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"justify"}>
        <Heading fontSize={"3xl"}>{t(title)}</Heading>
        {paragraphs.map((paragraph) => {
          return (
            <Text key={paragraph.id} color={"gray.600"} fontSize={"lg"}>
              {t(paragraph.title)}
            </Text>
          );
        })}
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <Box my={5}>
          <Heading size={"lg"}>{t(listTitle)}</Heading>
          <Text mt={2} fontSize="md">
            {t(listDescription)}
          </Text>
        </Box>
        <SimpleGrid columns={1} spacing={3}>
          {lists.map((list) => (
            <HStack key={list.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontSize={"lg"}>{t(list.title)}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <Box mt={10}>
          <Heading size={"lg"}>{detailsTitle}</Heading>
          <Text my={3} fontSize="md">
            {detailsDescription}
          </Text>
          {detailsList.map((detail) => {
            return (
              <Text key={detail.id} fontSize="md">
                {t(detail.title)}
              </Text>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default GridListWithHeading;
