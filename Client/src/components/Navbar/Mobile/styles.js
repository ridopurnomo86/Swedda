import styled from "styled-components";
import { MainContainer } from "../../../../styles";

export const MobileContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 16px 0px;
  margin-bottom: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  .pointer {
    cursor: pointer;
  }
  .semibold {
    font-weight: 600;
  }
`;

export const ContentContainer = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HumbergerIcon = styled.i.attrs({
    className: "fas fa-bars"
})`
  font-size: 24px;

`;

export const CloseIcon = styled.i.attrs({
    className: "fas fa-times"
})`
  font-size: 24px;
  padding: 0px 2px;

`;


export const HumbergerContainer = styled.div`
  padding: 8px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #282829;
    color: #FFFFFF;
  }
`;

export const LogoContainer = styled.div`
  z-index: 100;
  transition: 0.5s color ease-in-out;
  color: ${({theme, transition}) => transition ? theme.shader.primary : theme.shader.secondary}
`;

