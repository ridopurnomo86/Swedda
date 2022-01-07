import styled from "styled-components";

export const MenuContainer = styled.div`
  color: ${({theme}) => theme.shader.primary};
  .ml-m {
    margin-left: 24px;
  }
  .link {
    cursor: pointer;
    font-weight: 600;
  }
`;

export const MenuList = styled.div`
  padding: 10px 0px;
  border-bottom: 2px solid ${({theme}) => theme.shader.secondary}
`;