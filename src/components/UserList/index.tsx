import {
  Box,
  Button,
  Checkbox,
  Icon,
  Link,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";
import { queryClient } from "../../services/QueryClient";

interface IUserListProps {
  userName: string;
  id: string;
  email: string;
  date: string;
  isWideVersion: boolean;
}

async function handlePrefetchUser(userId: string) {
  await queryClient.prefetchQuery(
    ["user", userId],
    async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}

export function User({
  userName,
  email,
  date,
  isWideVersion,
  id,
}: IUserListProps) {
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link
            color="purple.400"
            onMouseEnter={() => handlePrefetchUser(id)}
          >
            <Text fontWeight="bold">{userName}</Text>
          </Link>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
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
  );
}
