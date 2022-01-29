import styled from "styled-components";

const ButtonContainer = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    padding: ${(props) => props.padding || "8px 16px"};
    font-weight: 600;
    border-radius: 2px;
    color: ${({ theme, textColor }) => textColor || theme.shader.primary};
    font-size: 16px;
    background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.main.secondary};
    transition: 0.3s;
    width: ${({ width }) => width || "auto"};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    &:hover {
        opacity: 0.8;
    }
`;

export default ButtonContainer;
