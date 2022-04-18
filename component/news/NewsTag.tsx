import { HStack, SpaceProps, Tag } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface INewsTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const NewsTags: React.FC<INewsTags> = (props) => {
  const { t } = useTranslation();
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={t(tag)}>
            {t(tag)}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default NewsTags;
