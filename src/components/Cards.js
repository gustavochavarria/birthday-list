import React, {useEffect, useState} from 'react'
import TableTop from 'tabletop'
import {Flex, Text} from '@chakra-ui/core'

import Card from './Card'
import {isYouBirthday} from 'utils'

const DOC =
  'https://docs.google.com/spreadsheets/d/131OUj7mGPd7bV7kxRUslauODAAeYsPr8Xe5I3UQE7ek/edit?usp=sharing'

//   https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7c4vzqcEaBWrhy05NteoNVhWC1urkBuSfH85_Pe9_e9I7qYRrDmMOnu7mhITJAGSSC8x8_iVqLGrx/pubhtml

export default function Cards({search}) {
  const [users, setUsers] = useState()

  const filterFn = search
    ? (user) =>
        String(user?.fullname || '')
          .toLowerCase()
          .includes(String(search || '').toLowerCase())
    : () => true

  useEffect(() => {
    TableTop.init({
      key: DOC,
      simpleSheet: true,
      callback: (data, tabletop) => {
        if (data) {
          setUsers(data)
        }
      },
    })
  }, [])

  const userBirthdays = (users || []).filter((user) =>
    isYouBirthday(user.birthday)
  )

  return (
    <Flex direction="column" mt="20px">
      {userBirthdays &&
        userBirthdays.map((user) => {
          return (
            <Text
              fontSize="14px"
              fontWeight="bold"
              color="red.500"
              textAlign="center"
            >
              {`Happy Birthday ${user.fullname} 🥳`}
            </Text>
          )
        })}

      {users &&
        users.filter(filterFn).map((user, index) => {
          return <Card user={user} key={index} />
        })}
    </Flex>
  )
}
