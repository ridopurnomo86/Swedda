import styled, { keyframes } from "styled-components";

const animated = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const AccordionContainer = styled.div`
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 6px;
    cursor: pointer;
`;

export const TextAccordion = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const ArrowIcon = styled.i.attrs({
    className: "fa-solid fa-angle-down",
})`
    font-size: 18px;
    transition: 0.2s;
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const TextLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${animated} 0.2s linear;
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
`;
