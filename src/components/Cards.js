import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import TableTop from "tabletop";

import Card from "./Card";

const DOC =
  "https://docs.google.com/spreadsheets/d/131OUj7mGPd7bV7kxRUslauODAAeYsPr8Xe5I3UQE7ek/edit?usp=sharing";

//   https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7c4vzqcEaBWrhy05NteoNVhWC1urkBuSfH85_Pe9_e9I7qYRrDmMOnu7mhITJAGSSC8x8_iVqLGrx/pubhtml

export default function (props) {
  const [users, setUsers] = useState();

  const filterFn = props.search
    ? (user) =>
        String(user?.fullname || "")
          .toLowerCase()
          .includes(String(props.search || "").toLowerCase())
    : () => true;

  useEffect(() => {
    TableTop.init({
      key: DOC,
      simpleSheet: true,
      callback: (data, tabletop) => {
        if (data) {
          setUsers(data);
        }
      },
    });
  }, []);

  return (
    <Flex direction="column" mt="20px">
      {props.search}
      {users &&
        users.filter(filterFn).map((user, index) => {
          return <Card user={user} key={index} />;
        })}
    </Flex>
  );
}
