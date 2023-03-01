import { theme } from 'styles/index'
import { ChakraProvider } from '@chakra-ui/react'
import { LoginScreen } from 'modules/unauthenticated/screens'

function App() {
  return <ChakraProvider theme={theme}>
    <LoginScreen/>
    </ChakraProvider>
}

export default App
