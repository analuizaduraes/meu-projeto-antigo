import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    font-size: 15px;

    color: ${({ theme }) => theme.COLORS.PINK_COLOR};

    > .custom-icon {
    width: 30px;
    height: 30px;
    }
`