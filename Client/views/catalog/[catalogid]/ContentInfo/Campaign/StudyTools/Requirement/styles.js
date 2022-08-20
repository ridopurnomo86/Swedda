import styled from "styled-components";

export const RequirementContainer = styled.div``;

export const MenuRequirement = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: flex-start;
`;

export const MenuInfo = styled.div`
    margin-left: 16px;
`;

export const ProcessorIcon = styled.i.attrs({
    className: "fa-solid fa-microchip",
})`
    font-size: 18px;
`;

export const RamIcon = styled.i.attrs({
    className: "fa-solid fa-memory",
})`
    font-size: 18px;
`;

export const WindowIcon = styled.i.attrs({
    className: "fa-regular fa-window-restore",
})`
    font-size: 18px;
`;

export const DisplayIcon = styled.i.attrs({
    className: "fa-solid fa-display",
})`
    font-size: 18px;
`;

export const TitleRequirement = styled.p`
    font-size: 14px;
    font-weight: 600;
    align-items: flex-start;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 4px 0px;
`;
