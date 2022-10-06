import styled from "styled-components";

const BlurContainer = styled.div`
    ${({ active }) =>
        active &&
        `
    position: fixed;
    z-index: 10;
    top: 0;
    filter: blur(2px);
    width: 100%;
    height: 100%;
    `}
`;

export default BlurContainer;
