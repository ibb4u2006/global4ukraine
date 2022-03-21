import { Container, Flex, SimpleGrid, Stack, Wrap } from "@chakra-ui/react";
import * as React from "react";
import NewsItem from "./NewsItem";

interface INewsProps {
  data: any[];
}

const News: React.FunctionComponent<INewsProps> = ({ data }) => {
  return (
    <Flex>
      <Container maxW={"7xl"} p={["0", "12"]}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          py={["10", "0"]}
        >
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
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default News;
