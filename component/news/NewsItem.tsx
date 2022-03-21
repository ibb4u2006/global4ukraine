import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import NewsTags from "./NewsTag";

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
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"xl"}
      width="90%"
      marginLeft="auto"
      marginRight="auto"
    >
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            href={`news/${slug}`}
          >
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
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href={`news/${slug}`}
            >
              {heading}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {content}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default NewsItem;
