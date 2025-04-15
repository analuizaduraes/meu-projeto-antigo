import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    
    > h3 {
        color: ${({theme}) => theme.COLORS.PINK_COLOR};
    }

    > input {
        height: 50px;
        width: 350px;
        padding: 12.5px;
        border: none;
        border-radius: 8px;
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;

    > img {
        height: 65px;
        width: 65px;
        border-radius: 50%;
    }
`

export const ProfileData = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 3.5px;
`