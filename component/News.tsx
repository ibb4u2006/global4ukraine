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

interface BlogItemProps {
  src: string;
  tags: string[];
  heading: string;
  content: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ src, tags, heading, content }) => {
  return (
    <WrapItem
      width={{ base: "100%", md: "45%", lg: "30%" }}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
    >
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              transform="scale(1.0)"
              src={src}
              alt="some text"
              objectFit="contain"
              width="100%"
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
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
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

const NewsList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" marginTop="5">
        Latest News
      </Heading>
      <Divider my="10" />
      <Wrap spacing="30px">
        <BlogItem
          src="./img/global4ukraine.jpg"
          tags={["Education", "Food"]}
          heading="Ukrainian refugees should seek schooling outside Prague"
          content="The Czech government is working to increase school capacities but spaces in big cities will still be scarce."
        />
        <BlogItem
          src="./img/global4ukraine.jpg"
          tags={["Education", "Food"]}
          heading="Ukrainian refugees should seek schooling outside Prague"
          content="The Czech government is working to increase school capacities but spaces in big cities will still be scarce."
        />
        <BlogItem
          src="./img/global4ukraine.jpg"
          tags={["Education", "Food"]}
          heading="Ukrainian refugees should seek schooling outside Prague"
          content="The Czech government is working to increase school capacities but spaces in big cities will still be scarce."
        />
      </Wrap>
    </Container>
  );
};

export default NewsList;
