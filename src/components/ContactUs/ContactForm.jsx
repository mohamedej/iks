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
  Center,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";

function ContactForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const notify = () =>
    toast.success("Form Submited!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "iks_form",
        "template_ep5vopa",
        form.current,
        "N4pklX6C8RdZC-2-U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setNumber("");
    setSubject("");
    setMessage("");
    notify();
  };

  return (
    <VStack
      as={"form"}
      ref={form}
      onSubmit={onSubmit}
      paddingX={[4, 28, 16, 24]}
      justifyContent="center"
      alignItems={"start"}
      w="full"
      mt={24}
      spacing={[6, 10, 16, 24]}
    >
      <Flex
        justify={"space-between"}
        w="full"
        h={[40, 40, 20, 0]}
        flexDir={["column", "column", "row"]}
      >
        <FormControl>
          <FormLabel ml={[0, 2]}>
            Name<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="text"
            required
            w={[60, 72, 56, 72]}
            size="sm"
            name="name"
            placeholder="Smith"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={2}>
            Email<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="email"
            required
            w={[60, 72, 56, 72]}
            size="sm"
            name="email"
            placeholder="example@email.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </FormControl>
      </Flex>
      <Flex
        justify={"space-between"}
        w="full"
        flexDir={["column", "column", "row"]}
        h={[40, 40, 20, 0]}
      >
        <FormControl>
          <FormLabel ml={2}>
            Phone<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="number"
            required
            w={[60, 72, 56, 72]}
            size="sm"
            name="phone"
            placeholder="91-000-0000"
            onChange={(event) => setNumber(event.target.value)}
            value={number}
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={[0, 2]}>
            Subject<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="text"
            required
            w={[60, 72, 56, 72]}
            size="sm"
            name="subject"
            placeholder="Enquiry"
            onChange={(event) => setSubject(event.target.value)}
            value={subject}
          />
        </FormControl>
      </Flex>
      <FormControl pr={28} mt={[8, 0]}>
        <FormLabel ml={2}>
          Message<span style={{ color: "red" }}>*</span>
        </FormLabel>
        <Textarea
          type="text"
          required
          w={[240, 300, 400, 820]}
          size="md"
          name="message"
          placeholder="Your Message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </FormControl>
      <Flex justify={"center"} w="full">
        <Button
          colorScheme={"green"}
          type="submit"
          size={["sm", "sm", "md", "md"]}
          rounded="full"
          w={[20, 20, 24, 28]}
        >
          Submit
        </Button>
      </Flex>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </VStack>
  );
}

export default ContactForm;
