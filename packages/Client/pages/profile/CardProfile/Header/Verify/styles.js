import styled from "styled-components";

export const VerifyContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
`;

export const CheckIcon = styled.i.attrs({
    className: "fa fa-check",
})`
    padding: 4px;
    color: ${({ theme }) => theme.shader.primary};
    background-color: ${({ theme }) => theme.main.success};
    border-radius: 4px;
    margin-right: 8px;
`;

export const XmarkIcon = styled.i.attrs({
    className: "fas fa-times",
})`
    padding: 4px 6px;
    color: ${({ theme }) => theme.shader.primary};
    background-color: ${({ theme }) => theme.main.error};
    border-radius: 4px;
    margin-right: 8px;
`;

export const SubtitleText = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.shader.secondaryOptional};
`;
