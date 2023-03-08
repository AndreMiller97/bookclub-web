import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [searchParams] = useSearchParams()

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha na requisição.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha salva com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'Token deve conter ao menos 6 caracteres.')
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
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
    }
  })

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
            placeholder="Ex.: 000000"
            maxLength={6}
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

          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mb="12px"
            mt="24px"
          >
            Salvar
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
