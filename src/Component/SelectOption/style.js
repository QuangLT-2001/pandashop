import styled from "styled-components";
export const LabelOption = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    & > label {
        width: 40%;
    }
`
export const SelectOptionWrapper = styled.select`
    padding: 0.45rem 1rem;
    outline: none;
    width: fit-content;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left: 0.55rem;
`
export const SelectWrapper = styled.div`
    min-width: 27%;
    position: relative;
    z-index: 5;

`