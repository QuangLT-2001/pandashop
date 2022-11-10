import styled from "styled-components";
export const PaginationPageWrapper = styled.div`
    flex:1;
    min-height: 100vh;
    padding-bottom: 5rem;
    @media (max-width: 992px) {
            width: 100%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    .empty {
        color: #5c5757;
        font-size: 3rem;
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .empty-text {
            color: #cacaca;
        }
        .empty-item {
            color: transparent;
            -webkit-text-stroke: 3px #5c5757;
            font-weight: bold;
            font-size: 8rem;
            position: relative;
            line-height: 1;
            &:after,&:before {
                content: '4';
                -webkit-text-stroke: 3px #000;
            }
        }
    }
    .paginationBttns {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
        transform: translate(-50%, 10px);
        left: 50%;
        bottom: 0;
        position: absolute;
        &> li {
            & > a{
            padding: .35rem .85rem;
            color: #000;
            font-size: .9rem;
            line-height: 1;
            transition: .3s;
            border: 1px solid lightblue;
            display: inline-block;
            cursor: pointer;
            border-radius: 0 !important;

        }
        &:first-child > a {
                border-top-left-radius: 5px !important;
                border-bottom-left-radius: 5px !important;
            }
            &:last-child > a{
                border-top-right-radius: 5px !important;
                border-bottom-right-radius: 5px !important;
            }
            &.paginationActive >a {
                background: ${props => props.color.name};
                border: none;
                color: #fff;
                font-weight: 650;
                font-size: 1rem;
            }
            &.paginationDisabled > a {
                color: #ddd !important;
            }
            &.next > .nextBttn, &.previous > .previousBttn {
                color: ${props => props.color.name};
            }

        }
    }
`