import styled from 'styled-components'

export const Label = styled.label<{
  color: string
  fontWeight: string
  fontSize: string
  lineHeight: string
}>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  white-space: pre-line;
`
