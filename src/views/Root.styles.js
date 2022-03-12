import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
