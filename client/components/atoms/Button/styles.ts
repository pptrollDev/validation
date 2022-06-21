import styled from 'styled-components'
import { GRAY_20 } from '../../../styles/colors'

export const Button = styled.button<{
  color: string
  backgroundColor: string
  width?: string
}>`
  border-radius: 8px;
  border: none;
  padding: 16px 20px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;

  &:disabled {
    background-color: ${GRAY_20};
    cursor: not-allowed;
  }
`
