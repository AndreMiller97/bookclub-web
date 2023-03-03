import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, 'Token deve conter ao menos 4 caracteres.')
        .required('O token é obrigatório'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
    }),
    onSubmit: (data) => {
      navigate('/')
    }
  })

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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o codigo enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex.: 0000"
            maxlength={4}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="24px"
            placeholder="Nova senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="24px"
            placeholder="Confirme a nova senha"
          />

          <Button onClick={handleSubmit} mb="12px" mt="24px">
            Cadastrar
          </Button>
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
