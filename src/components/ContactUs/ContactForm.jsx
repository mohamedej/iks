import {
  Flex,
  Text,
  Box,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function ContactForm() {
  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "iks_test",
    //     "template_lcgqhcd",
    //     form.current,
    //     "7C9iAzfYgLdJUi0fq"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    alert("Email was sent!");
  };

  return (
    <VStack
      as={"form"}
      ref={form}
      onSubmit={onSubmit}
      paddingX={24}
      justify="start"
      align={"start"}
      w="full"
      mt={24}
      spacing={12}
    >
      <Flex justify={"space-between"} w="full">
        <FormControl>
          <FormLabel ml={2}>
            Name<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input type="text" required w={72} size="sm" name="name" />
        </FormControl>
        <FormControl>
          <FormLabel ml={2}>
            Email<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input type="email" required w={72} size="sm" name="email" />
        </FormControl>
      </Flex>
      <Flex justify={"space-between"} w="full">
        <FormControl>
          <FormLabel ml={2}>
            Phone<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input type="number" required w={72} size="sm" name="phone" />
        </FormControl>
        <FormControl>
          <FormLabel ml={2}>
            Subject<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input type="text" required w={72} size="sm" name="subject" />
        </FormControl>
      </Flex>
      <FormControl pr={28}>
        <FormLabel ml={2}>
          Message<span style={{ color: "red" }}>*</span>
        </FormLabel>
        <Textarea
          type="text"
          required
          w={72}
          size="md"
          width="full"
          name="message"
        />
      </FormControl>
      <Button alignSelf={"end"} colorScheme={"green"} type="submit">
        Submit
      </Button>
    </VStack>
  );
}

export default ContactForm;
