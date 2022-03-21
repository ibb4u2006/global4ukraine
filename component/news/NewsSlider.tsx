import {
  Heading,
  Link,
  Divider,
  Container,
  Stack,
  Button,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import Slider from "react-slick";
import NewsItem from "./NewsItem";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

interface INewsList {
  data: [];
  newsBtn?: boolean;
}

const NewsList: React.FC<INewsList> = ({ data, newsBtn }) => {
  return (
    <Flex bg={"lightGrey"}>
      <Container maxW={"7xl"} p={["0", "12"]}>
        <Heading as="h1" marginTop="5">
          Latest News
        </Heading>
        <Divider my="10" />
        <Slider {...settings}>
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
        </Slider>
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
    </Flex>
  );
};

export default NewsList;
