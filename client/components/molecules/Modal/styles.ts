import styled from 'styled-components';
import { BLACK, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div``;

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${BLACK};
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 10px 10px 0 0;
  padding: 15px;
  width: calc(100% - 30px);
  height: calc(100vh - 130px);
  z-index: 1;
  background-color: ${WHITE};
  overflow: scroll;
`;
