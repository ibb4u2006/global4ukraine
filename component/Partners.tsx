import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import * as React from "react";

interface IPartnersProps {
  partnerHeading: string;
  partnerData: any[];
}

const Partners: React.FunctionComponent<IPartnersProps> = ({
  partnerHeading,
  partnerData,
}) => {
  return (
    <Flex>
      <Container maxW={"7xl"} py={[10, 20]} textAlign={"center"}>
        <Stack spacing={0} pb={10}>
          <Heading>{partnerHeading}</Heading>
        </Stack>
        <Wrap direction={"row"} spacing={{ base: 4, lg: 8 }} justify={"center"}>
          {partnerData.map((partner, index) => {
            return (
              <WrapItem key={index}>
                <Stack>
                  <Link href={partner.url} target="_blank">
                    <Image src={partner.img} height={"100"} />
                  </Link>
                </Stack>
              </WrapItem>
            );
          })}
        </Wrap>
      </Container>
    </Flex>
  );
};

export default Partners;
