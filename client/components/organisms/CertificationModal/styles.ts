import styled from 'styled-components'
import { GRAY_20 } from '../../../styles/colors'

export const CheckAllContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${GRAY_20};
  margin-bottom: 20px;
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 12px;
  }

  label {
    cursor: inherit;
  }
`

export const CheckWrapper = styled.div`
  margin-bottom: 32px;
`

export const CheckContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 12px;
  }

  label {
    cursor: inherit;
  }
`
