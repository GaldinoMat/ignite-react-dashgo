import { HStack, Button, Box } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";


export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationButton isCurrent={true} number={1} />
        <PaginationButton number={2} />
        <PaginationButton number={3} />
        <PaginationButton number={4} />
      </HStack>
    </HStack >
  )
}