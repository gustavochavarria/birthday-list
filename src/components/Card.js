import {formatDistanceToNow} from 'date-fns'
import React from 'react'
import {Text, Flex, Image} from '@chakra-ui/core'

import {getNextBirthday, isYouBirthday} from 'utils'

export default function Card({user}) {
  return (
    <Flex
      w="full"
      bg={isYouBirthday(user.birthday) ? `red.200` : `blue.100`}
      my="10px"
      rounded="4px"
    >
      <Flex p="10px">
        <Image
          mr="10px"
          size="100px"
          objectFit="cover"
          rounded="full"
          src={`https://api.adorable.io/avatars/128/${user.fullname}.png`}
        />

        <Flex direction="column">
          <Flex fontSize="lg" fontWeight="bold" mb="4px">
            {user.fullname}
          </Flex>

          <Text m="4px">
            {user.birthday} ({formatDistanceToNow(new Date(user.birthday))})
          </Text>

          <Flex>
            <Text m="4px" fontWeight="bold" mr="10px">
              Next birthday:
            </Text>

            <Text m="4px">
              {formatDistanceToNow(getNextBirthday(user.birthday), {
                addSuffix: true,
              })}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight="bold" mr="10px">
              Celebrate In:
            </Text>
            <Text>{user.celebrateIn ? user.celebrateIn : 'No defined'}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
