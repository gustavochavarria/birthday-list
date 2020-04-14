import React, {useState} from 'react'
import {Box, CSSReset, Input, ThemeProvider} from '@chakra-ui/core'

import Cards from 'components/Cards'
import GlobalCSS from 'GlobalCSS'

function App() {
  const [filter, setFilter] = useState('')

  return (
    <ThemeProvider>
      <Box p={4}>
        <CSSReset />
        <GlobalCSS />

        <Input
          m="auto"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by name"
          value={filter}
          maxW={400}
        />

        <Cards search={filter} />
      </Box>
    </ThemeProvider>
  )
}

export default App
