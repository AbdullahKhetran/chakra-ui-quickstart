"use client"
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">

      <Flex direction="column" background={formBackground} p={12} rounded={6}>

        <Heading mb={6}>Log In</Heading>
        <Input placeholder="Email" variant="filled" type="email" mb={3} />
        <Input placeholder="Passowrd" variant="filled" type="passwrod" mb={6} />
        <Button mb={6} colorScheme="teal">Log In</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>

      </Flex>

    </Flex>
  )
}
