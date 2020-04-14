import {differenceInYears, formatDistanceToNow} from 'date-fns'
import React, {lazy, Suspense} from 'react'
import {useMeasure} from 'react-use'
import {Box, Flex, Heading, Stack} from '@chakra-ui/core'

import {getNextBirthday, isYouBirthday} from 'utils'

const BackgroundConfetti = lazy(() => import('components/BackgroundConfetti'))

export default function Card({user}) {
  const [cardRef, {height, width}] = useMeasure()

  return (
    <Flex
      align={['center', 'initial']}
      bg="white"
      direction={['column', 'initial']}
      overflow="hidden"
      position="relative"
      ref={cardRef}
      rounded="lg"
      shadow="lg"
    >
      {isYouBirthday(user.birthday) && (
        <Box bottom={0} left={0} position="absolute" right={0} top={0}>
          <Suspense fallback={null}>
            <BackgroundConfetti {...{height, width}} />
          </Suspense>
        </Box>
      )}
      {user.photoUrl && (
        <Box
          bgRepeat="no-repeat"
          bgSize="cover"
          bgImage={[
            `url(${user.photoUrl}&dpr=2&fit=crop&h=96&w=96)`,
            `url(${user.photoUrl}&dpr=2&fit=crop&h=192&w=128)`,
          ]}
          h={[96, 192]}
          mt={[4, 0]}
          rounded={[`full`, `initial`]}
          w={[96, 128]}
        />
      )}

      <Stack flex={1} spacing="auto" textAlign={['center', 'initial']} w="100%">
        <Flex direction="column" flex={1} justify="center" p={4}>
          <Heading color="gray.900" size="md">
            {user.fullname}
          </Heading>
          <Box fontSize="sm" mt={1}>
            {user.birthday} (
            {differenceInYears(new Date(), new Date(user.birthday))} years)
          </Box>
        </Flex>

        <Flex
          bg="gray.100"
          direction="column"
          flex={1}
          fontSize="sm"
          justify="center"
          p={4}
        >
          <Box>
            <Box as="span" fontWeight="bold">
              Next birthday:
            </Box>{' '}
            {formatDistanceToNow(getNextBirthday(user.birthday), {
              addSuffix: true,
            })}
          </Box>

          <Box mt={2}>
            <Box as="span" fontWeight="bold">
              Celebrate In:
            </Box>{' '}
            {user.celebrateIn ? user.celebrateIn : 'No defined'}
          </Box>
        </Flex>
      </Stack>
    </Flex>
  )
}
