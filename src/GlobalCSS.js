import React from 'react'
import {css, Global} from '@emotion/core'

export default function GlobalCSS() {
  return (
    <Global
      styles={(theme) => css`
        html {
          background-color: ${theme.colors.gray[100]};
        }
      `}
    />
  )
}
