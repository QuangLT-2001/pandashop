import styled from "styled-components";
export const Title = styled.h3`
    padding: 0.55rem 1rem;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    &:after {
        width: 30%;
        height: 3px;
        background: #c30005;
        position: absolute;
        top: 100%;
        left: 0;
        content: '';
        margin: 0 1rem
    }
`