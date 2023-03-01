import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, props }) => (
  <ChakraLink fontSize="14px" color="brand.darkGrey" {...props}> {children}</ChakraLink>
)
