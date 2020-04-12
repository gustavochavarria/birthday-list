import React, { useState } from "react";

import { Flex, Input, ThemeProvider } from "@chakra-ui/core";

import Cards from "./components/Cards";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <ThemeProvider>
      <Flex w="full" p="4px" direction="column">
        <Flex w="full">
          <Input
            w="full"
            placeholder="Search by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Flex>
        <Cards search={filter} />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
