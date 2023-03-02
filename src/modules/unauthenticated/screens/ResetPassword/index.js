import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'


export const ResetPasswordScreen = () => {
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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o codigo enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input mt="24px" placeholder="Ex.: 0000" />
          <Input.Password mt="24px" placeholder="Nova senha" />
          <Input.Password mt="24px" placeholder="Confirme a nova senha" />

          <Button mb="12px" mt="24px">Salvar</Button>
          <Link.Action
            
            mt="14px"
            text="Não recebeu o codigo?"
            actionText="Clique aqui para reenviar !"
          />
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
