import React from "react";
import {
    DisplayIcon,
    MenuInfo,
    MenuRequirement,
    ProcessorIcon,
    RamIcon,
    RequirementContainer,
    SubTitle,
    TitleRequirement,
    WindowIcon,
} from "./styles";

const Requirement = () => (
    <RequirementContainer>
        <MenuRequirement>
            <ProcessorIcon />
            <MenuInfo>
                <TitleRequirement>Processor</TitleRequirement>
                <SubTitle>Prosesor Intel Dual Core (Core i3 and above Recommended)</SubTitle>
            </MenuInfo>
        </MenuRequirement>
        <MenuRequirement>
            <RamIcon />
            <MenuInfo>
                <TitleRequirement>Ram</TitleRequirement>
                <SubTitle>1GB (2GB Recommended)</SubTitle>
            </MenuInfo>
        </MenuRequirement>
        <MenuRequirement>
            <WindowIcon />
            <MenuInfo>
                <TitleRequirement>Operating System</TitleRequirement>
                <SubTitle>Windows, Linux, MacOS</SubTitle>
            </MenuInfo>
        </MenuRequirement>
        <MenuRequirement>
            <DisplayIcon />
            <MenuInfo>
                <TitleRequirement>Screen</TitleRequirement>
                <SubTitle>1366 x 768 (Full HD 1920 x 1080 Recommended)</SubTitle>
            </MenuInfo>
        </MenuRequirement>
    </RequirementContainer>
);

export default Requirement;
