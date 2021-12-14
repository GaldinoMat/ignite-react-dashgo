import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Galdino</Text>
          <Text color="gray.300" fontSize="small">galdino_mateus1000@outlook.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Mateus Galdino" src="https://github.com/GaldinoMat.png" />
    </Flex>
  )
}