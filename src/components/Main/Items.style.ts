import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/themes/default"
import { mixins } from "../../styles/mixins"

export type IconBlockVariant = 'yellowDark' | 'yellow' | 'gray' | 'purple'

interface IconBlockProps {
  variant: IconBlockVariant
}

const iconVariants = {
  yellow: defaultTheme["yellow"],
  yellowDark: defaultTheme["yellow-dark"],
  gray: defaultTheme["base-text"],
  purple: defaultTheme["purple"]
}

export const ItensContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
  
  section {
    display: flex;
    align-items: center;
    gap: .75rem;
    font-family: ${mixins.fonts.textM};
  }
`

export const IconBlock = styled.div<IconBlockProps>`
  display: flex;
  border-radius: 100%;
  color: ${props => props.theme.background};
  padding: .5rem;
  
  ${(props) => {
    return css`
      background-color: ${iconVariants[props.variant]};
    `
  }};
`