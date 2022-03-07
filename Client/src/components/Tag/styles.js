import styled from "styled-components";

export const TagContainer = styled.div`
    display: inline-block;
    padding: 6px;
    margin-right: 8px;
    border-radius: 8px;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.shader.secondaryOptional};
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 600;
`;
