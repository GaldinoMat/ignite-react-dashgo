import { Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8">
        <h1>hello</h1>
      </Flex>
    </Flex>
  )
}
