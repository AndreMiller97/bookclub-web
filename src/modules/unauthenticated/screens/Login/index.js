import { Flex, Image, Button } from '@chakra-ui/react'
import { Text, Input, Link } from 'components'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        paddingLeft="112px"
        flexDir="column"
        w="40%"
        h="100%"
      >
        <Flex flexDir="column" w="416px">
          <Image src="/images/logo.svg" alt="Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input mt="24px" placeholder="email@email.com" />
          <Input.Password mt="16px" placeholder="*************" />
          <Flex
            mt="8px"
            w="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="24px">Login</Button>
          <Link mt="48px">Cadastre-se</Link>
        </Flex>
      </Flex>
      <Flex
        w="60%"
        h="100%"
        backgroundImage="url('/images/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
