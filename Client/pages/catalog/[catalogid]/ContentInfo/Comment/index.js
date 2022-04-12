import React from "react";
import PropTypes from "prop-types";
import PublishComment from "./PublishComment";
import { CommentContianer, TextContent, Title, CommentWrapper, Author, TitleComment } from "./styles";

const Comment = ({ infoComments, catalogid }) => (
    <CommentContianer>
        <Title>Comment</Title>
        <PublishComment catalogid={catalogid} />
        {infoComments.map((info) => (
            <CommentWrapper key={info.post_id}>
                <Author>{info.author}</Author>
                <TitleComment>{info.title}</TitleComment>
                <TextContent>{info.content_text}</TextContent>
            </CommentWrapper>
        ))}
    </CommentContianer>
);

export default Comment;

Comment.propTypes = {
    infoComments: PropTypes.arrayOf(PropTypes.object),
    catalogid: PropTypes.string,
};

Comment.defaultProps = {
    infoComments: undefined,
    catalogid: "",
};
