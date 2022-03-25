import * as React from "react";
import { Container, Flex, Image } from "@chakra-ui/react";
import { SRLWrapper } from "simple-react-lightbox";

interface IGalleryComponentProps {
  images: any[];
}

const GalleryComponent: React.FunctionComponent<IGalleryComponentProps> = ({
  images,
}) => {
  const gallery = images[0].fields.gallery;
  return (
    <Flex>
      <Container maxW={"7xl"} py="12" className="gallery-container">
        <SRLWrapper>
          {gallery.map((photo: any) => {
            const { url } = photo.fields.file;
            return (
              <Image
                key={photo.sys.id}
                src={`https:${url}`}
                width={["150px", "300px"]}
                height={["150", "300"]}
                objectFit="cover"
              />
            );
          })}
        </SRLWrapper>
      </Container>
    </Flex>
  );
};

export default GalleryComponent;
