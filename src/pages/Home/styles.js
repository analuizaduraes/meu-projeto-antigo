import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: auto;

`

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    overflow-y: scroll;

    p {
        text-align: justify;
        width: 100%;
    }

    .starsRating {
        color: ${({ theme }) => theme.COLORS.PINK_COLOR};
    }
`