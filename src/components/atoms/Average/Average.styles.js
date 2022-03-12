import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ average, theme }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  align-items: center;
`;
