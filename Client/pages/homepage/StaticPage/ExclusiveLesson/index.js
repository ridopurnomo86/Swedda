import React from "react";
import {
    ExclusiveLessonContainer,
    ExclusiveText,
    ExclusiveTitle,
    ListExclusiveClass,
} from "./styles";
import CardExclusiveClass from "./CardExclusiveClass";

const DATA = [
    {
        class_exclusiveid: 1,
        image_src: "https://source.unsplash.com/Yeit9w-RWUA",
        class_title: "Sales Manager",
        class_description:
            "Sales managers hire and motivate high-performing sales teams, and lead them to generate leads, hit or exceed revenue forecasts, and ultimately meet customer needs. From pharmaceuticals to software to financial management, nearly every business sector has a sales manager building relationships and closing deals.",
    },
    {
        class_exclusiveid: 2,
        image_src: "https://source.unsplash.com/Um4iB59lS2A",
        class_title: "Accountant",
        class_description:
            "An accountant is a person who records business transactions on behalf of an organization, reports on company performance to management, and issues financial statements.",
    },
    {
        class_exclusiveid: 3,
        image_src: "https://source.unsplash.com/7okkFhxrxNw",
        class_title: "Bussiness Administration",
        class_description:
            "Business administration (also known as business management) is the administration of a commercial enterprise. It includes all aspects of overseeing and supervising business operations. From the point of view of management and leadership, it also covers fields that include office building administration, accounting, finance, designing, development, quality assurance, data analysis, sales, project management, information-technology management, research and development, and marketing.",
    },
    {
        class_exclusiveid: 4,
        image_src: "https://source.unsplash.com/pypeCEaJeZY",
        class_title: "Data Analyst",
        class_description:
            "Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains.",
    },
];

const ExclusiveLesson = () => (
    <ExclusiveLessonContainer>
        <ExclusiveTitle>Exclusive Lesson</ExclusiveTitle>
        <ExclusiveText>Improve your skill with our exclusive lesson.</ExclusiveText>
        <ListExclusiveClass>
            {DATA?.map((info) => (
                <CardExclusiveClass 
                    key={info.class_exclusiveid} 
                    imgSrc={info.image_src} 
                    title={info.class_title} 
                    desc={info.class_description} 
                />
            ))}
        </ListExclusiveClass>
    </ExclusiveLessonContainer>
);

export default ExclusiveLesson;
