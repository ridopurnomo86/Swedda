import React from "react";
import PropTypes from "prop-types";
import {
    CheckIcon,
    FlexContainer,
    SubtitleText,
    VerifyAccountContainer,
    VerifyContainer,
    XmarkIcon,
} from "./styles";

const Verify = ({ isVerified = false, onClick }) => (
    <VerifyContainer>
        {isVerified ? (
            <FlexContainer>
                <CheckIcon />
                <SubtitleText>This Account Has Verified</SubtitleText>
            </FlexContainer>
        ) : (
            <>
                <FlexContainer>
                    <XmarkIcon />
                    <SubtitleText>This Account Not Verified</SubtitleText>
                </FlexContainer>
                <VerifyAccountContainer>
                    <SubtitleText>
                        Your account is not verify,{" "}
                        <span className="click-here" onClick={onClick}>
                            click here
                        </span>
                    </SubtitleText>
                </VerifyAccountContainer>
            </>
        )}
    </VerifyContainer>
);

export default Verify;

Verify.propTypes = {
    isVerified: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
