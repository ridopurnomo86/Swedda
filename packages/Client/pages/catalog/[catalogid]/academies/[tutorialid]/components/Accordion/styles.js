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
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.shader.secondary};
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

export const TextContainer = styled.div`
    cursor: pointer;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 8px 16px;
    ${({ isActive }) => (isActive ? "font-weight: 600" : "font-weight: 500")};
`;
