import React from 'react'
import styled from 'styled-components'

export const SectionTitle: React.FC<{}> = ({ children }) => (
  <Title>{children}</Title>
)

const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2em;
  color: ${props => props.theme.textColor};
`
