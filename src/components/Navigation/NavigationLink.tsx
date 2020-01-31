import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface NavigationLinkProps {
  path: string
  className?: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  children,
  className,
}) => (
  <StyledLink to={path} className={className}>
    {children}
  </StyledLink>
)

export const StyledLink = styled(Link)`
  transition: all 0.2s ease-in;
  &:hover {
    text-decoration: underline;
  }
`
