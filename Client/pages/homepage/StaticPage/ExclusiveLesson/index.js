import React from "react";
import { ExclusiveLessonContainer, ExclusiveText, ExclusiveTitle, ListExclusiveClass } from "./styles";
import CardExclusiveClass from "./CardExclusiveClass";
import DATA from "./static";

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
