import styled from 'styled-components'
import { GRAY_20, RED } from '../../../styles/colors'

export const Wrapper = styled.div``

export const LabelContainer = styled.div``

export const InputContainer = styled.div<{ errorLabel?: string }>`
  margin-top: 8px;
  display: flex;
`
export const InputDiv = styled.div<{ errorLabel?: string }>`
  border-bottom: 1px solid ${(props) => (props.errorLabel ? RED : GRAY_20)};
  width: 100%;
`

export const InputDashDiv = styled.div`
  flex-shrink: 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
`

export const TipContainer = styled.div`
  margin-top: 8px;
`

export const ErrorContainer = styled.div`
  margin-top: 8px;
`
