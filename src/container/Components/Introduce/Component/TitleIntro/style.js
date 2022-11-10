import styled  from "styled-components";
export const TitleIntros = styled.h4`
    font-weight: 550;
    padding: .85rem 1rem;
    position: relative;
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 2px solid;
        content: '';
        width: 100%;
        height: 100%;
    }
`