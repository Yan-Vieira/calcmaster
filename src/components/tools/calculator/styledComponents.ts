import styled from "styled-components"

interface KeyboardProps {
    templateColumns: string;
    templateRows: string;
}

interface keyGroupProps {
    templateColumns: string;
    templateRows: string;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: clamp(0px, 100%, 350px);
    height: clamp(100px, 100vh, 400px);

    padding: 20px;
    border: 1px solid var(--col_4);
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export const Screen = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 25%;

    padding: 5px 20px;
    border: 1px solid var(--col_4);
    border-radius: 10px;
`

export const Keyboard = styled.div<KeyboardProps>`
    display: grid;
    grid-template-columns: ${(props) => props.templateColumns};
    grid-template-rows: ${(props) => props.templateRows};
    gap: 5px;

    width: 100%;
    height: 75%;

    padding-top: 10px;
`

export const KeyGroup = styled.div<keyGroupProps>`
    display: grid;
    grid-template-columns: ${(props) => props.templateColumns};
    grid-template-rows: ${(props) => props.templateRows};
    gap: 5px;

    width: 100%;
    height: 100%;
`