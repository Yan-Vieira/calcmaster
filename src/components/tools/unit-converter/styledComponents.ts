import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: clamp(0px, 100vw, 880px);
    height: clamp(0px, 100vh, 150px);
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 50%;
`