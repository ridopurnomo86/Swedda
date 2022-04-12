import React from "react";
import PropTypes from "prop-types";
import { ExclusiveLessonContainer, ExclusiveText, ExclusiveTitle, ListExclusiveClass } from "./styles";
import CardExclusiveClass from "./CardExclusiveClass";

const ExclusiveLesson = ({ catalog }) => (
    <ExclusiveLessonContainer>
        <ExclusiveTitle>Exclusive Lesson</ExclusiveTitle>
        <ExclusiveText>Improve your skill with our exclusive lesson.</ExclusiveText>
        <ListExclusiveClass>
            {catalog?.map((info) => (
                <CardExclusiveClass
                    key={info.catalog_id}
                    imgSrc={info.poster_img}
                    title={info.title}
                    desc={info.text_content}
                    direction={`catalog/${info.catalog_id}`}
                />
            ))}
        </ListExclusiveClass>
    </ExclusiveLessonContainer>
);

export default ExclusiveLesson;

ExclusiveLesson.propTypes = {
    catalog: PropTypes.arrayOf(PropTypes.object),
};

ExclusiveLesson.defaultProps = {
    catalog: undefined,
};
