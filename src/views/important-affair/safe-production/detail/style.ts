import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #F4F4F4;
    position: relative;
    padding: 20px;
`;

export const Title = styled.div`
    width: 100%;
    padding: 15px 0;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`;

export const TextArea = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 20px;
    margin-bottom: 20px;

    p {
        margin: 10px 0;
    }

    .bold {
        font-weight: 500;
    }

    .indent{
        text-indent: 2em;
    }
`;

export const GraphTitle = styled.div`
    width: 100%;
    font-size: 14px;
    color: #4876FF;
    font-weight: 500;
    text-align: center;
`;

export const GraphImage = styled.div`
    width: 100%;
    height: auto;
    margin: 15px 0;

    img {
        width: 100%;

    }
`