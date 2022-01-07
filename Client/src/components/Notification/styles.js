import styled, { keyframes } from "styled-components";


export const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`; 
export const fadeout = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0.5;
    }
`;


export const NotificationContainer = styled.div`
    display: ${({ show }) => show ? "flex" : "none"};
    visibility: ${({ show }) => show ? "visible" : "hidden"};
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
    position: absolute;
    top: 15vh;
    font-weight: 600;
    font-size: 16px;
    right: 100px;
    padding: 16px;
    background-color: ${({theme}) => theme.main.error};
    opacity: 0.9;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 8px;
    color: ${({theme}) => theme.shader.primary};
    animation: ${fadein} 0.5s;

    .mr-m {
        margin-right: 16px;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CloseAction = styled.div`
    cursor: pointer;
`;

export const TextMessage = styled.p`
    word-break: break-all;
`;