import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { postDonor } from "../utils/donor";

interface IDonateFormProps {}

const DonateForm: React.FunctionComponent<IDonateFormProps> = (props) => {
  return (
    <Box
      borderRadius="lg"
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 16 }}
    >
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Heading
            fontSize={{
              base: "3xl",
              md: "4xl",
            }}
          >
            2. Tell us about it
          </Heading>
          <Stack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Box
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              p={8}
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              shadow="base"
              width={["sm", "md"]}
            >
              <Formik
                initialValues={{ email: "", message: "" }}
                onSubmit={async (values, actions) => {
                  await postDonor(values);
                  actions.setSubmitting(false);
                  actions.resetForm();
                  actions.setStatus("submitted");
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            name="email"
                            placeholder="Your Email"
                            onChange={props.handleChange}
                            value={props.values.email}
                            onBlur={props.handleBlur}
                            disabled={props.isSubmitting}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                          onChange={props.handleChange}
                          value={props.values.message}
                          onBlur={props.handleBlur}
                          disabled={props.isSubmitting}
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        colorScheme="blue"
                        bg="blue.400"
                        color="white"
                        _hover={{
                          bg: "blue.500",
                        }}
                        isFullWidth
                        isLoading={props.isSubmitting}
                      >
                        Submit
                      </Button>
                      {props.status === "submitted" && (
                        <Text color="green.500" fontWeight={"bold"}>
                          Thank you, your message has been sent!
                        </Text>
                      )}
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};

export default DonateForm;
