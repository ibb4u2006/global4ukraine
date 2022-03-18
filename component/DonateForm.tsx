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
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as React from "react";
import { MdOutlineEmail } from "react-icons/md";

interface IDonateFormProps {}

const DonateForm: React.FunctionComponent<IDonateFormProps> = (props) => {
  const [formData, setFormData] = React.useState({ email: "", message: "" });
  const formik = useFormik({
    initialValues: formData,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
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
                      onChange={formik.handleChange}
                      value={formik.values.message}
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
                  >
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};

export default DonateForm;
