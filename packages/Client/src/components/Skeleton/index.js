import React from "react";
import PropTypes from "prop-types";
import { SkeletonWrapper } from "./styles";

const Skeleton = ({ width, height }) => <SkeletonWrapper width={width} height={height} />;

export default Skeleton;

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

Skeleton.defaultProps = {
    width: "",
    height: "",
};
