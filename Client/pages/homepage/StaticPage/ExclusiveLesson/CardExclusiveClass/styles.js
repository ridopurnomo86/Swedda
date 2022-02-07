import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 350px;
    min-height: 350px;
    border-radius: 8px;
    border: 1px solid #d9d9db;
    overflow: hidden;
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
    overflow: hidden;
    text-overflow: ellipsis ellipsis;
`;