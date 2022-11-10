import styled from "styled-components";
export const FooterWrapper = styled.footer`
    background: #171717;
    padding: 2rem .15rem 0rem;
    @media (max-width: 992px) {
        padding-bottom: 3.4rem;
    }
    .container {
        .footer-item-left {
        color: #fff;
        .descript-footer {
            margin: 1rem;
            text-align: justify;
            &::first-letter {
                font-size: 1.3rem;
                color: #cb2320;
            }
        }
    }
    .footer-item-main {
        & > ul {
            color: #fff;
            margin: 1rem;
            padding: 0;
        }
    }
    .footer-item-right {
        & > ul {
            color: #fff;
            margin: 1rem;
            padding: 0;
            display: flex;
            @media (max-width: 340px) {
                flex-wrap: wrap;
            }
        }
    }
    .footer-item-bottom {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1rem;
        & > .title-footer {
            width: fit-content;
            margin: 1rem 0;
        }
        & > iframe {
            margin: 0 1rem;
            width: 100%;
            @media (max-width: 576px) {
                width: 90%;
            }
            @media (max-width: 378px) {
                height: 80%;
            }
        }
    }
}

    .footer-bottom {
        color: #777;
        font-weight: bold;
        text-align: center;
        background: #000;
        @media (max-width: 992px) {
            display: none;
        }
        .content {
            margin: 0;
            padding: 0.35rem 0;

        }
    }
`
export const FooterItems = styled.li`
    margin: 1.1rem 0;
    & > svg {
        margin-right: 1rem;
        min-width: 20px;
    }
`
export const SocialItems = styled.li`
    min-width: 50px;
    min-height: 50px;
    margin: 0 .25rem;
    background: ${props => props.bg};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    & > a {
        color: #fff
    }
    @media (max-width: 340px) {
                margin: .25rem;
            }
`