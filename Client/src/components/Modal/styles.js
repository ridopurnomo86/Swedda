import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: rgb(0, 0, 0, 0.4);
    transition: 1s;
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const ModalContainer = styled.div`
    border-radius: 4px;
    max-width: 550px;
    aspect-ratio: 1;
    margin: 0px 32px;
    background-color: #ffffff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    position: relative;
`;

export const IconContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const CloseIcon = styled.i.attrs({
    className: "fa-sharp fa-solid fa-xmark",
})`
    font-size: 24px;
    padding: 0px 2px;
    cursor: pointer;
`;

export const TitleText = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 24px 0px 16px 0px;
    text-align: center;
`;

export const MessageText = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`;
