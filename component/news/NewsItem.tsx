import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NewsTags from "./NewsTag";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface NewsItemProps {
  src: string;
  tags: string[];
  heading: string;
  slug: string;
  content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  src,
  tags,
  heading,
  slug,
  content,
}) => {
  const { t } = useTranslation();
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"xl"}
      width="90%"
      marginLeft="auto"
      marginRight="auto"
    >
      <Box w="100%">
        <Box
          borderRadius="lg"
          overflow="hidden"
          textDecoration="none"
          _hover={{ textDecoration: "none", cursor: "grab" }}
        >
          <Link href={`news/${slug}`}>
            <Image
              transform="scale(1.0)"
              src={src}
              alt="some text"
              objectFit="cover"
              width={"100%"}
              height={"250px"}
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Link>
        </Box>
        <Box p={5}>
          <NewsTags tags={tags} marginTop="3" />
          <Heading fontSize="xl" marginTop="2">
            <Link href={`news/${slug}`}>{t(heading)}</Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {t(content)}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default NewsItem;
