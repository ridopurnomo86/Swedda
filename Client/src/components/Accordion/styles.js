import styled from "styled-components";

export const AccordionContainer = styled.div`
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: 2px solid ${({ theme }) => theme.main.primary};
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
