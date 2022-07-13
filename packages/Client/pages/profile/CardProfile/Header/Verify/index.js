import React from "react";
import PropTypes from "prop-types";
import { CheckIcon, SubtitleText, VerifyContainer, XmarkIcon } from "./styles";

const Verify = ({ isVerified }) => (
    <VerifyContainer>
        {isVerified ? (
            <>
                <CheckIcon />
                <SubtitleText>This Account Has Verified</SubtitleText>
            </>
        ) : (
            <>
                <XmarkIcon />
                <SubtitleText>This Account Not Verified</SubtitleText>
            </>
        )}
    </VerifyContainer>
);

export default Verify;

Verify.propTypes = {
    isVerified: PropTypes.bool.isRequired,
};
