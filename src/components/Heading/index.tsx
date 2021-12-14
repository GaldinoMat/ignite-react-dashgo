import { Heading } from "@chakra-ui/react";

interface IHeadingProps {
  title: string
}

export function HeadingComponent({ title }: IHeadingProps) {
  return (
    <Heading size="lg" fontWeight="normal">{title}</Heading>
  )
}