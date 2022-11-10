import styled , {keyframes} from "styled-components";
const animationBorder = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`
export const TitleContent = styled.h3`
    padding: .85rem 1rem;
    border-bottom: 2px solid #ddd;    
    text-transform: uppercase;
    margin: 2rem 0;
    transition: .3s;
    position: relative;
    font-weight: 550;
    &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 1.5px;
        background: #000;
        content: '';
        animation: ${animationBorder} 3s linear infinite alternate-reverse;
    }
`