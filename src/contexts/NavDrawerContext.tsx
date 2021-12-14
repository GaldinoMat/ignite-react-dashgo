import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface INavDrawerProviderProps {
  children: ReactNode
}

type NavDrawerContextData = UseDisclosureReturn

const NavDrawerContext = createContext({} as NavDrawerContextData)

export function NavDrawerProvider({ children }: INavDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => disclosure.onClose(), [router.asPath])

  return (
    <NavDrawerContext.Provider value={disclosure}>
      {children}
    </NavDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(NavDrawerContext)