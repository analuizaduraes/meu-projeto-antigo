import styled from 'styled-components';

export const Container = styled.button`
    height: 58px;
    width: 340px;

    background-color: ${({ theme }) => theme.COLORS.PINK_COLOR};

    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    border: 0;
    border-radius: 12px;

    > .custom-icon {
    width: 30px;
    height: 30px;
    }

    &:disabled {
        opacity: 0.5;
    }
`