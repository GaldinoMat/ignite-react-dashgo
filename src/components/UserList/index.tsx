import { Box, Button, Checkbox, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface IUserListProps {
  userName: string;
  email: string;
  date: string;
  isWideVersion: boolean
}

export function User({ userName, email, date, isWideVersion }: IUserListProps) {
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      {isWideVersion && <Td>{date}</Td>}
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="purple"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          Editar
        </Button>
      </Td>
    </Tr>
  )
}