import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IDonorProps {
  data: [];
}

const Donors: React.FC<IDonorProps> = ({ data }) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack align={"center"}>
          <Heading>Our Donors</Heading>
          <Text>We have been getting support from people around the world</Text>
        </Stack>
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
              spaceBetween: 10,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          style={{ padding: "0 50px 75px" }}
        >
          {data.length > 1 &&
            data.map((donor: any) => {
              const { message } = donor.fields;
              return (
                <SwiperSlide key={donor.sys.id}>
                  <Box
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"lg"}
                    p={8}
                    rounded={"xl"}
                  >
                    <Text
                      align={"center"}
                      textAlign={"center"}
                      color={useColorModeValue("gray.600", "gray.400")}
                      fontSize={"sm"}
                    >
                      {message}
                    </Text>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Donors;
