import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputProps extends ChakraInputProps {
  name: string,
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps>
  = ({ name, label, ...props }, ref) => {
    return (
      <FormControl>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          name={name}
          type="email"
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900"
          }}
          size="lg"
          ref={ref}
          {...props}
        />
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)