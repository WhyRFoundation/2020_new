import React from 'react'
import styled from 'styled-components'

export const Footer: React.FC<any> = () => (
  <Wrapper>© {new Date().getFullYear()}</Wrapper>
)

const Wrapper = styled.footer`
  text-align: center;
  margin: 24px;
`
