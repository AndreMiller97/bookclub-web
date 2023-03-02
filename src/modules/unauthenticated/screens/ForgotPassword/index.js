import { Flex, Image } from '@chakra-ui/react'
import { Text, Input,Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems={['center', 'flex-start']}
        justifyContent="center"
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image src="/images/logo.svg" alt="Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Esqueceu Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo seu e-mail que enviaremos um codigo de recuperação de
            senha:
          </Text>
          <Input mt="24px"  placeholder="email@exemplo.com" />

          <Button onClick={() => navigate('/reset-password')} mt="24px"> 
            Avançar
          </Button>
          
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
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