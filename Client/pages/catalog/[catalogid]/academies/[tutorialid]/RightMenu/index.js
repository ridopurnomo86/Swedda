import DOMPurify from "isomorphic-dompurify";
import PropTypes from "prop-types";
import React from "react";
import Button from "src/components/Button";
import { ButtonContainer, FlexContainer, RightMenuContainer } from "./styles";

const RightMenu = ({
    tutorial = [],
    tutorialid,
    onClickNextPage = () => {},
    onClickPreviousPage = () => {},
}) => {
    const renderContent = (data, id) =>
        data.filter((item) => item.tutorial_id === parseInt(id)).map((info) => info.content);

    return (
        <RightMenuContainer>
            <div
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(renderContent(tutorial, tutorialid)),
                }}
            />
            <FlexContainer>
                <ButtonContainer>
                    <Button onClick={onClickPreviousPage}>
                        <p>Previous</p>
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button onClick={onClickNextPage}>
                        <p>Next</p>
                    </Button>
                </ButtonContainer>
            </FlexContainer>
        </RightMenuContainer>
    );
};

export default RightMenu;

RightMenu.propTypes = {
    tutorial: PropTypes.arrayOf(PropTypes.object),
    onClickNextPage: PropTypes.func,
    onClickPreviousPage: PropTypes.func,
    tutorialid: PropTypes.string,
};

RightMenu.defaultProps = {
    tutorial: undefined,
    onClickNextPage: () => {},
    onClickPreviousPage: () => {},
    tutorialid: "",
};
