import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { HeadingComponent } from "../../components/Heading";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { User } from "../../components/UserList"

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <HeadingComponent title="Usuários" />
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <User
                userName="Mateus Galdino"
                email="galdino_mateus1000@outlook.com"
                date="04 de Abril, 2021"
                isWideVersion={isWideVersion} />
              <User
                userName="Mateus Galdino"
                email="galdino_mateus1000@outlook.com"
                date="04 de Abril, 2021"
                isWideVersion={isWideVersion} />
              <User
                userName="Mateus Galdino"
                email="galdino_mateus1000@outlook.com"
                date="04 de Abril, 2021"
                isWideVersion={isWideVersion} />
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex >
    </Box>
  )
}
