import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends LinkProps {
  children: string;
  icon: ElementType;
}

export function NavLink({ icon, children, ...params }: INavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...params}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}