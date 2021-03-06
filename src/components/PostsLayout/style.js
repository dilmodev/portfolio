import styled from 'styled-components'
import { Link } from 'gatsby'
import Arrow from '../../icons/Arrow'
import MyLink from '../MyLink'

export const Background = styled.div`
  background-color: ${props => props.theme.colors.background};
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing._16};
`

export const LinkContainer = styled.div`
  display: flex;
  margin-left: ${({ marginLeftAuto }) => (marginLeftAuto ? 'auto' : null)};
  align-items: center;
`

export const NextLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryLink};
  transition: ${({ theme }) => theme.transitions.hover};
  margin-right: ${({ theme }) => theme.spacing._2};

  :hover {
    color: ${({ theme }) => theme.colors.primaryLinkHover};
  }
`

export const PreviousLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryLink};
  transition: ${({ theme }) => theme.transitions.hover};

  :hover {
    color: ${({ theme }) => theme.colors.primaryLinkHover};
  }
`

export const LeftArrow = styled(Arrow)`
  margin-right: ${({ theme }) => theme.spacing._2};
  transform: rotate(180deg);
`

export const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: ${({ theme }) => theme.spacing._8};
  max-width: 42rem;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin: 0px auto;
  }
`

export const FontSettingsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing._4};
  padding-bottom: ${({ theme }) => theme.spacing._8};
`

export const DateContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing._2};
`

export const Quote = styled.div`
  padding: ${({ theme }) => theme.spacing._4};
  margin: ${({ theme }) => theme.spacing._4} 0;
  border-left: 4px solid ${({ theme }) => theme.colors.border};
  font-style: italic;
  background: ${({ theme }) => theme.colors.info};
`

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.body};
  font-family: ${props =>
    props.fontStyle ? props.fontStyle : props.theme.fontFamily.secondary};
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 200;
  padding-bottom: 4px;
`

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-family: ${props =>
    props.fontStyle
      ? props.fontStyle
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'};
  font-size: ${props =>
    props.largeFont
      ? props.theme.fontSize.text_xl.mobile
      : props.theme.fontSize.text_base.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${props =>
      props.largeFont
        ? props.theme.fontSize.text_xl.desktop
        : props.theme.fontSize.text_base.desktop};
  }
`

export const StyledLink = styled(MyLink)`
  color: ${({ theme }) => theme.colors.primaryLink};
  font-family: ${props =>
    props.fontStyle
      ? props.fontStyle
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${props =>
    props.largeFont
      ? props.theme.fontSize.text_xl.mobile
      : props.theme.fontSize.text_base.mobile};
  border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorder};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.hover};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorderHover};
    background: ${({ background, theme }) =>
      background ? background : theme.colors.backgroundLinkHover};
  }

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${props =>
      props.largeFont
        ? props.theme.fontSize.text_xl.desktop
        : props.theme.fontSize.text_base.desktop};
  }
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.body};
  font-family: ${props =>
    props.fontStyle
      ? props.fontStyle
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'};
  font-size: ${props =>
    props.largeFont
      ? props.theme.fontSize.text_4xl.mobile
      : props.theme.fontSize.text_3xl.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.none};
  margin-bottom: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${props =>
      props.largeFont
        ? props.theme.fontSize.text_4xl.desktop
        : props.theme.fontSize.text_3xl.desktop};
  }
`

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.body};
  font-family: ${props =>
    props.fontStyle
      ? props.fontStyle
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'};
  font-size: ${props =>
    props.largeFont
      ? props.theme.fontSize.text_3xl.mobile
      : props.theme.fontSize.text_2xl.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.none};
  margin-top: ${({ theme, largeFont }) =>
    largeFont ? theme.spacing._8 : theme.spacing._4};
  margin-bottom: ${({ theme }) => theme.spacing._1};
  padding: 0;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${props =>
      props.largeFont
        ? props.theme.fontSize.text_3xl.desktop
        : props.theme.fontSize.text_2xl.desktop};
  }
`

export const OL = styled.ol`
  color: ${({ theme }) => theme.colors.body};
  font-family: ${props =>
    props.fontStyle
      ? props.fontStyle
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'};
  font-size: ${props =>
    props.largeFont
      ? props.theme.fontSize.text_3xl.mobile
      : props.theme.fontSize.text_2xl.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.none};
  margin-top: ${({ theme, largeFont }) =>
    largeFont ? theme.spacing._8 : theme.spacing._4};
  margin-bottom: ${({ theme }) => theme.spacing._1};
  padding: 0;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${props =>
      props.largeFont
        ? props.theme.fontSize.text_3xl.desktop
        : props.theme.fontSize.text_2xl.desktop};
  }
`
