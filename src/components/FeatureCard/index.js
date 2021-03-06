import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Icon } from './style'
import { H5, Body } from '../globals'

const FeatureCard = ({ icon, title, description }) => {
  const {
    colors: { secondaryBody },
  } = useContext(ThemeContext)
  return (
    <Container>
      <Icon>{icon}</Icon>
      <H5>{title}</H5>
      <Body color={secondaryBody}>{description}</Body>
    </Container>
  )
}

export default FeatureCard
