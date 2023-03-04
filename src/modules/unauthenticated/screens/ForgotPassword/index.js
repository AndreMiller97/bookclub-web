import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { ForgotPasswordCall } from 'services/api/requests'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const mutation = useMutation((data) => ForgotPasswordCall(data), {
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
    onSuccess: (data) => {
      console.log({ data })
      toast({
        title: 'E-mail enviado com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      navigate(`/reset-password?email=${values.email}`)
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
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
          <Text.ScreenTitle mt="48px">Esqueceu Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo seu e-mail que enviaremos um codigo de recuperação de
            senha:
          </Text>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="24px"
            placeholder="email@exemplo.com"
          />

          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mt="24px"
          >
            Enviar
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
