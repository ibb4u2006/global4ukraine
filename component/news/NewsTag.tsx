import { HStack, SpaceProps, Tag } from "@chakra-ui/react";

interface INewsTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

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

export default NewsTags;
