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
  Stack,
  Button,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  newsBtn?: boolean;
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
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"xl"}
      h="100%"
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

const NewsList: React.FC<INewsList> = ({ data, newsBtn }) => {
  return (
    <Container maxW={"7xl"} p={["0", "12"]}>
      <Heading as="h1" marginTop="5">
        Latest News
      </Heading>
      <Divider my="10" />
      <Wrap spacing="30px">
        <Swiper
          modules={[Pagination, A11y]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={70}
          slidesPerView={4}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          style={{ padding: "0 50px 75px" }}
        >
          {data.map((post: any) => {
            const { title, slug, description, heroImage, tags } = post.fields;
            return (
              <SwiperSlide key={post.sys.id}>
                <NewsItem
                  key={post.sys.id}
                  src={`https:${heroImage.fields.file.url}`}
                  tags={tags}
                  heading={title}
                  slug={slug}
                  content={description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrap>
      {newsBtn && (
        <Stack direction={"row"} p={10} justify={"center"}>
          <Button
            colorScheme={"blue"}
            size={"lg"}
            bg={"primary"}
            rounded={"full"}
            _hover={{
              bg: "blue.700",
            }}
          >
            <Link href={"/news"}>More News</Link>
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default NewsList;
