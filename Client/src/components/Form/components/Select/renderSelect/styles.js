import styled from "styled-components";

export const Select = styled.select`
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 16px;
    border: 1px solid
        ${({ theme, error }) => (error ? theme.main.error : theme.shader.secondaryOptional)};
    box-shadow: ${({ error }) =>
        error && "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"};
    border-radius: 4px;
    outline: none;
    margin-bottom: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

export const Option = styled.option`
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 16px;
    border: 1px solid
        ${({ theme, error }) => (error ? theme.main.error : theme.shader.secondaryOptional)};
    box-shadow: ${({ error }) =>
        error && "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"};
    border-radius: 4px;
    outline: none;
    margin-bottom: 16px;
`;
