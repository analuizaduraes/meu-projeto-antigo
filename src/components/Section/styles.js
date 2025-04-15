import styled from 'styled-components';

export const Container = styled.div`

    margin-bottom: 45px;
    background-color: ${({theme}) => theme.COLORS.ROSE_BACKGROUND};

> h2 {
    font-weight: 800;
    font-size: 22;
    color: ${({ theme }) => theme.COLORS.WHITE_COLOR};
    margin-bottom: 15px;
    margin-top: 45px;
}
`