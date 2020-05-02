import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #eee;
    position: relative;
    padding: 20px;
`;

export const PanelContainer = styled.div`
    position: relative;
    background-color: #fff;
    padding: 20px 10px 10px 10px;
    margin-top: 20px;

    :first-child{
        margin-top: 0;
    }
`;

export const PanelTitleIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 10px;
    width: 5px;
    height: 18px;
    background: linear-gradient(to bottom, #ffffff, #FF3030);
`;

export const PanelTitle = styled.div`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
    margin-left: 13px;
    font-weight: 500;
`;

export const BlockContainer = styled.div`
    position: relative;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
`;

export const BlockTitle = styled.div`
    font-size: 16px;
    line-height: 20px;
    margin-left: 30px;
`;

export const BlockType = styled.div`
    height: 20px;
    width: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #4876FF;
    border-radius: 2px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
`

export const BlockDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const BlockDescription = styled.div`
    font-size: 12px;
    color: #aaaaaa;
`;

export const SeeAllContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SeeAllButton = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: #4876FF;
`
