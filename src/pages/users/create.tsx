import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { HeadingComponent } from "../../components/Heading"
import Link from "next/link";

type CreateUserFormData = {
  email: string;
  nome: string;
  password: string;
  password_confirmation: string;
}

export default function CreateUser() {

  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória").min(6, "Senha precisa de, no mínimo, 6 caracteres"),
    password_confirmation: yup.string().oneOf([null, yup.ref("password")], "As senhas devem ser iguais")
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleUserCreation: SubmitHandler<CreateUserFormData> = (data) => {
    console.log(data);
  }

  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleUserCreation)}
        >
          <HeadingComponent title="Criar usuários" />
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                type="text"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirme a senha"
                error={errors.password_confirmation}
                {...register("password")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                isLoading={formState.isSubmitting}
                type="submit"
                colorScheme="pink"
              >Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}
