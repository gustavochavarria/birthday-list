import React from "react";

import { Text, Flex, Image } from "@chakra-ui/core";
import { formatDistanceToNow, isSameDay } from "date-fns";

const getNextBirthday = (birthday) => {
  if (!birthday) {
    return new Date();
  }
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth();

  const currentYear = new Date().getFullYear();

  console.log({ currentYear, month, day });
  console.log(new Date(currentYear, month, day));

  return new Date(currentYear, month, day);
};

export default function (props) {
  const { user } = props ?? {};

  const isYouBirthday = isSameDay(new Date(), getNextBirthday(user.birthday));

  return (
    <Flex
      w="full"
      bg={isYouBirthday ? `red.200` : `blue.100`}
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

          <Text m="4px">
            (
            {formatDistanceToNow(getNextBirthday(user.birthday), {
              addSuffix: true,
            })}
            )
          </Text>

          <Flex>
            <Text fontWeight="bold" mr="10px">
              Celebrate In:
            </Text>
            <Text>{user.celebrateIn ? user.celebrateIn : "No defined"}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
