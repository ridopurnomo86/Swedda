import React from "react";
import ListInfo from "./ListInfo";
import { InfoEventContainer, TitleEvent, TitleText, FlexInfo } from "./styles";

const InfoEvent = () => (
    <InfoEventContainer>
        <TitleEvent>Why Event So Important To You?</TitleEvent>
        <TitleText>The following are the benefits that you will get if you actively join the Swedda event.</TitleText>
        <FlexInfo>
            <ListInfo
                icon={<i className="fa fa-graduation-cap" style={{ fontSize: "64px" }}></i>}
                title="Upgrade Kemampuan Teknik"
                infoText="Banyak pembicara yang sudah lama di dunia IT dari berbagai bidang, sehingga Anda dapat memilih event yang
            sesuai dengan kemampuan/minat anda."
            />
            <ListInfo
                icon={<i className="fa fa-network-wired" style={{ fontSize: "64px" }}></i>}
                title="Bangun Jaringan"
                infoText="Event dihadiri oleh pembicara yang top dan peserta dari berbagai daerah, 
                sehingga Anda bisa berkesempatan membangun relasi dengan pembicara, peserta dan orang-orang hebat di sana."
            />
            <ListInfo
                icon={<i className="fa fa-highlighter" style={{ fontSize: "60px" }}></i>}
                title="Up-to-Date Perkembangan"
                infoText="Materi yang dibawakan sesuai perberkembang IT saat ini, 
                sehingga Anda tidak ketinggalan perkembangan teknologi terkini."
            />
        </FlexInfo>
    </InfoEventContainer>
);

export default InfoEvent;
