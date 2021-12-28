import { Heading, Spinner } from "@chakra-ui/react";

interface IHeadingProps {
  title: string;
  isFetching?: boolean;
  isLoading?: boolean;
}

export function HeadingComponent({
  title,
  isFetching = false,
  isLoading = false,
}: IHeadingProps) {
  return (
    <Heading size="lg" fontWeight="normal">
      {title}
      {!isLoading && isFetching && (
        <Spinner size="sm" color="gray.500" ml="4" />
      )}
    </Heading>
  );
}
