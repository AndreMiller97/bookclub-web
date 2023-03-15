import { Flex } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { NavBar, BookList } from 'components'
import { getHighlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const { error, data } = useQuery('highlighted', getHighlightedBooks)
  console.log({ error, data })

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
      <BookList data={data?.data} />
    </Flex>
  )
}
