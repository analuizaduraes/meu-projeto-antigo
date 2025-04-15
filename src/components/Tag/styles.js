import styled from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT_COLOR};
  color: ${({ theme }) => theme.COLORS.WHITE_COLOR};

  > .custom-icon {
      width: 15px;
      height: 15px;
  }
`