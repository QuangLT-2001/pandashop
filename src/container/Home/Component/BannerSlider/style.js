import styled from "styled-components";
export const BannerItems = styled.div`
    width: 100%;
    height: 55vh;
    /* background-image: url(${props => props.item});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    @media (max-width: 1200px) and (min-height: 992px) {
        height: 30vh;
    }
    @media (max-width: 992px) {
        height: 50vh;
    }
    @media (max-width: 768px) {
        height: 45vh;
    }
    @media (max-width: 540px) {
        height: 40vh;
    }
    @media (max-width: 486px) {
        height: 30vh;
    }
    @media (max-width: 360px) {
        height: 25vh;
    }
    & > span {
        width: 100%;
        height: 100%;
        display: inline-block;
        & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    }


`