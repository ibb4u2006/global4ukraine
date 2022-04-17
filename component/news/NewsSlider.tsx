import {
  Heading,
  Link,
  Divider,
  Container,
  Stack,
  Button,
  Flex,
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
  newsHeading: string;
  newsBtnLabel: string;
  data: {
    id: number;
    title: string;
    img: string;
    description: string;
    tags: string[];
  }[];
}

const NewsList: React.FC<INewsList> = ({ newsHeading, newsBtnLabel, data }) => {
  return (
    <Flex bg={"lightGrey"}>
      <Container maxW={"7xl"} py={[10, 20]}>
        <Heading as="h1" mt="5" textAlign="center">
          {newsHeading}
        </Heading>
        <Divider my={["5", "10"]} />
        <Slider {...settings}>
          {data.map((post: any) => {
            const { id, title, description, img, tags, slug } = post;
            return (
              <NewsItem
                key={id}
                src={img}
                tags={tags}
                heading={title}
                slug={slug}
                content={description}
              />
            );
          })}
        </Slider>
        {newsBtnLabel && (
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
              <Link href={"/news"}>{newsBtnLabel}</Link>
            </Button>
          </Stack>
        )}
      </Container>
    </Flex>
  );
};

export default NewsList;
