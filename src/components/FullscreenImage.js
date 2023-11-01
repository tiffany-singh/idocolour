import styled from 'styled-components'

export const FullscreenImage = styled.div`
    background: url(${props => props.image});
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


export const EpkFullscreenImage = styled.div`
    background: url(${props => props.image});
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    max-height: 100%;
    background-position: center;
    background-size: cover;
`;