import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondery, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="16px"
    borderRadius="16px"
    h="56px"
    bg={secondery ? 'brand.greyDark' : 'brand.primary'}
    _hover={{
      bg: secondery ? 'brand.greyDark' : 'brand.primary'
    }}
    textColor={secondery ? 'brand.white' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
