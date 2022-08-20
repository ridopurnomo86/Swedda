import styled from "styled-components";

export const BreadcrumbInfo = styled.div`
    display: flex;
    padding: 24px;
`;

export const BreadcrumbLink = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.shader.primary};
    font-size: 20px;
    padding-bottom: 8px;
    font-weight: 700;
    margin-right: 24px;
    border-bottom: ${({ active }) => (active ? "1px solid #000000" : "none")};
`;
