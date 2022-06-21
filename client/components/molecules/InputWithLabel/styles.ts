import styled from 'styled-components'
import { GRAY_20, RED } from '../../../styles/colors'

export const Wrapper = styled.div``

export const LabelContainer = styled.div``

export const InputContainer = styled.div<{ errorLabel?: string }>`
  border-bottom: 1px solid ${(props) => (props.errorLabel ? RED : GRAY_20)};
  margin-top: 8px;
`
export const TipContainer = styled.div`
  margin-top: 8px;
`

export const ErrorContainer = styled.div`
  margin-top: 8px;
`
