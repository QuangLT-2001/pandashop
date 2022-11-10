import styled from "styled-components";
const setBorder = name => {
    switch (name) {
        case "frmUser":
            return "1px solid #ddd"
        case "frmTel":
            return "1px solid #ddd"
        case "frmAddress":
            return "1px solid #ddd"
        default:
            return "none";
    }
}
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.nameLabel === 'Hiển thị mật khẩu' ? 'row' : 'column'};
    align-items: ${props => props.nameLabel === 'Hiển thị mật khẩu' ? 'center' : 'flex-start'};
    position: relative;
    overflow: hidden;
    input[type="text"],input[type="email"],input[type="password"] {
         padding: ${props => props.icon ? "1rem 6rem 1rem .25rem" : ".55rem 2rem .55rem .25rem"};
         margin: ${props => props.icon ? "0" : "0.75rem 0"};
         outline: none;
         width: 100%;
         border: ${props => setBorder(props.name)};
         border-radius: 3px;
    }
    input[name="search"] {
        padding-right: 6rem !important;
    }
    input[type="submit"] {
        padding: 1rem 4rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.3rem;
    }
    input[type="checkbox"], input[type="radio"] {
        width: auto;
        margin: 0 .75rem;
    }
    input[class="frm-map"] {
        border: 1px solid #ee4d2d;
    }
    input[class="frm-code"] {
        border: 1px solid #ee4d2d;
    }
    label {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.nameLabel === "Hiển thị mật khẩu" ? "#fff" : "#434E5E"};
    }
    .icon {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 100%;
        padding: 0 1rem;
        background: linear-gradient(-180deg,#00ffe7,#18adb5);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

    }

`