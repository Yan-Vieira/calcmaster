import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 750px;
    height: 100vh;
    max-height: 150px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 50%;
`

export const Line = styled.div`
    width: 20%;
    height: 2px;

    margin: 0px 10px;

    background-color: var(--col_4);
`