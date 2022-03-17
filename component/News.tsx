import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

interface INewsTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

interface NewsItemProps {
  src: string;
  tags: string[];
  heading: string;
  slug: string;
  content: string;
}

interface INewsList {
  data: [];
}
const NewsItem: React.FC<NewsItemProps> = ({
  src,
  tags,
  heading,
  slug,
  content,
}) => {
  return (
    <WrapItem
      width={{ base: "100%", md: "45%", lg: "30%" }}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
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
    </WrapItem>
  );
};

const NewsTags: React.FC<INewsTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const NewsList: React.FC<INewsList> = ({ data }) => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" marginTop="5">
        Latest News
      </Heading>
      <Divider my="10" />
      <Wrap spacing="30px">
        {data.map((post: any) => {
          const { title, slug, description, heroImage, tags } = post.fields;
          return (
            <NewsItem
              key={post.sys.id}
              src={`https:${heroImage.fields.file.url}`}
              tags={tags}
              heading={title}
              slug={slug}
              content={description}
            />
          );
        })}
      </Wrap>
    </Container>
  );
};

export default NewsList;
