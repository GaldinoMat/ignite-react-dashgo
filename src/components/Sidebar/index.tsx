import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/NavDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isNavDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isNavDrawer) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"></DrawerCloseButton>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}