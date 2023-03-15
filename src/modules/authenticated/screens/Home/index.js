import { Flex } from '@chakra-ui/react'

import { NavBar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <NavBar />
      <Flex mt="48px" w="100%" h="200px" px={['24px', '48px', '80px', '112px']}>
        <Flex
          w="100%"
          h="100%"
          backgroundImage="url('/images/banner.svg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="24px"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
