import React from "react";
import {
    CardContent,
    CardExclusiveClass,
    CardText,
    CardTitle,
    ExclusiveLessonContainer,
    ExclusiveText,
    ExclusiveTitle,
    ListExclusiveClass,
} from "./styles";
import Image from "next/image";

const DATA = [
    {
        class_exclusiveid: 1,
        image_src: "https://source.unsplash.com/Yeit9w-RWUA",
        class_title: "Bussiness Development",
        class_description:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        class_exclusiveid: 2,
        image_src: "https://source.unsplash.com/Um4iB59lS2A",
        class_title: "Accountant",
        class_description:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        class_exclusiveid: 3,
        image_src: "https://source.unsplash.com/7okkFhxrxNw",
        class_title: "Bussiness Administration",
        class_description:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        class_exclusiveid: 4,
        image_src: "https://source.unsplash.com/pypeCEaJeZY",
        class_title: "Data Analyst",
        class_description:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const ExclusiveLesson = () => (
    <ExclusiveLessonContainer>
        <ExclusiveTitle>Exclusive Lesson</ExclusiveTitle>
        <ExclusiveText>Improve your skill with our exclusive lesson.</ExclusiveText>
        <ListExclusiveClass>
            {DATA?.map((info) => (
                <CardExclusiveClass key={info.class_exclusiveid}>
                    <Image
                        src={info.image_src}
                        width={300}
                        height={150}
                        alt="pic"
                        objectFit="cover"
                        layout="responsive"
                    />
                    <CardContent>
                        <CardTitle>{info.class_title}</CardTitle>
                        <CardText>{info.class_description}</CardText>
                    </CardContent>
                </CardExclusiveClass>
            ))}
        </ListExclusiveClass>
    </ExclusiveLessonContainer>
);

export default ExclusiveLesson;
