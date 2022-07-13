import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 350px;
    min-height: 350px;
    border-radius: 8px;
    border: 1px solid #d9d9db;
    overflow: hidden;
    position: relative;
`;

export const CardContent = styled.div`
    padding: 24px 20px;
`;

export const CardTitle = styled.p`
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 700;
`;

export const CardText = styled.p`
    font-size: 14px;
    font-weight: 400;
    max-height: 90px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

export const ViewMoreContainer = styled.div`
    background-color: ${({ theme }) => theme.main.primary};
    bottom: 0;
    padding: 8px 0px;
    color: ${({ theme }) => theme.shader.primary};
    position: absolute;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;

    .bold {
        font-weight: 600;
    }

    &:hover {
        color: #000000;
        background-color: ${({ theme }) => theme.shader.primary};
    }
`;
